#!/usr/bin/env node
/**
 * Generate the model catalogue FROM THE REAL ORG AND REAL MEASUREMENTS.
 *
 * What this replaces
 * ------------------
 * src/data/models.js held 34 hand-written models with invented accuracy
 * figures ("98.5", "97.2"), invented download counts ("2.1M", "980K") and
 * invented training-set sizes ("8.2M sentence pairs"). None of those models
 * existed and none of those numbers were measured. The site rendered them as
 * fact, next to a claimed 96.3%-vs-74.1% accuracy advantage that was never
 * benchmarked against anything.
 *
 * What goes in instead
 * --------------------
 * Real model names, read from the WindyTranslate org, joined to real quality
 * scores measured on FLORES-200 (professionally translated, and deliberately
 * NOT the OPUS/Tatoeba corpora these models were trained on — scoring a model
 * on its own training data inflates everything).
 *
 * Nobody publishes quality data across the long tail of translation, because
 * almost nobody has the long tail. Publishing ours — including the pairs that
 * scored badly — is the only claim on this site a competitor cannot copy.
 *
 * Inputs (both produced 2026-08-04, see Windy-Clinic doctor-logs):
 *   bench_results.jsonl   chrF++ / BLEU per pair, FLORES-200 dev
 *   org listing           live from the HuggingFace API
 *
 * Regenerate:  node scripts/gen-catalogue.cjs
 */
'use strict';

const fs = require('fs');
const path = require('path');

const BENCH = process.env.BENCH || path.join(__dirname, 'bench_results.jsonl');

// ISO 639-1/3 -> display name. Only what the catalogue actually uses; a code
// with no name here is reported, never silently rendered as a bare code.
const NAMES = {
  en: 'English', es: 'Spanish', fr: 'French', de: 'German', it: 'Italian',
  pt: 'Portuguese', nl: 'Dutch', sv: 'Swedish', da: 'Danish', no: 'Norwegian',
  fi: 'Finnish', is: 'Icelandic', ru: 'Russian', uk: 'Ukrainian', pl: 'Polish',
  cs: 'Czech', sk: 'Slovak', sl: 'Slovenian', bg: 'Bulgarian', mk: 'Macedonian',
  ro: 'Romanian', hu: 'Hungarian', el: 'Greek', tr: 'Turkish', ar: 'Arabic',
  he: 'Hebrew', fa: 'Persian', ur: 'Urdu', hi: 'Hindi', bn: 'Bengali',
  ta: 'Tamil', te: 'Telugu', ml: 'Malayalam', kn: 'Kannada', mr: 'Marathi',
  gu: 'Gujarati', si: 'Sinhala', ne: 'Nepali', th: 'Thai', vi: 'Vietnamese',
  id: 'Indonesian', ms: 'Malay', tl: 'Filipino', zh: 'Chinese', ja: 'Japanese',
  ko: 'Korean', sw: 'Swahili', af: 'Afrikaans', cy: 'Welsh', ga: 'Irish',
  mt: 'Maltese', eo: 'Esperanto', ca: 'Catalan', eu: 'Basque', gl: 'Galician',
  et: 'Estonian', lv: 'Latvian', lt: 'Lithuanian', sq: 'Albanian',
  hy: 'Armenian', ka: 'Georgian', az: 'Azerbaijani', kk: 'Kazakh',
  uz: 'Uzbek', mn: 'Mongolian', am: 'Amharic', ti: 'Tigrinya', yo: 'Yoruba',
  ha: 'Hausa', ig: 'Igbo', zu: 'Zulu', xh: 'Xhosa', st: 'Sesotho',
  sn: 'Shona', ny: 'Chichewa', mg: 'Malagasy', so: 'Somali', rw: 'Kinyarwanda',
  mh: 'Marshallese', kj: 'Kuanyama', tsg: 'Tausug', sh: 'Serbo-Croatian',
  hr: 'Croatian', sr: 'Serbian', bs: 'Bosnian', be: 'Belarusian',
  // The long tail. These are the languages that make this catalogue unusual —
  // most commercial translation APIs do not serve any of them — so they must
  // render with a real name rather than a bare ISO code.
  bem: 'Bemba', ceb: 'Cebuano', ee: 'Ewe', fj: 'Fijian', ht: 'Haitian Creole',
  ilo: 'Ilocano', kab: 'Kabyle', kg: 'Kongo', lg: 'Luganda', ln: 'Lingala',
  lua: 'Luba-Kasai', luo: 'Luo', lus: 'Mizo', mos: 'Mossi',
  nso: 'Northern Sotho', pa: 'Punjabi', pag: 'Pangasinan', pap: 'Papiamento',
  rn: 'Kirundi', run: 'Kirundi', sg: 'Sango', sm: 'Samoan', ss: 'Swati',
  tn: 'Tswana', tpi: 'Tok Pisin', ts: 'Tsonga', tum: 'Tumbuka', tw: 'Twi',
  umb: 'Umbundu', war: 'Waray',
};

/**
 * Quality band. Derived from measured chrF++, with the edges published so a
 * reader can check our arithmetic instead of trusting an adjective.
 */
function band(chrf) {
  if (chrf >= 60) return { label: 'Excellent', rank: 5 };
  if (chrf >= 45) return { label: 'Good', rank: 4 };
  if (chrf >= 30) return { label: 'Usable', rank: 3 };
  if (chrf >= 15) return { label: 'Limited', rank: 2 };
  return { label: 'Not recommended', rank: 1 };
}

function main() {
  if (!fs.existsSync(BENCH)) {
    throw new Error(
      `No benchmark data at ${BENCH}.\n` +
      `This catalogue is generated from measurements, not written by hand.\n` +
      `Copy bench_results.jsonl from the QA run into scripts/ and re-run.`
    );
  }

  const rows = fs.readFileSync(BENCH, 'utf8')
    .split('\n').filter(Boolean).map((l) => JSON.parse(l));

  const scored = rows.filter(
    (r) => r.status === 'ok'
      && r.layout !== 'ctranslate2'   // that harness is known-broken; see the Clinic retraction
      && r.src !== r.tgt              // es-es and friends copy input to output
  );

  const unnamed = new Set();
  const models = scored.map((r) => {
    if (!NAMES[r.src]) unnamed.add(r.src);
    if (!NAMES[r.tgt]) unnamed.add(r.tgt);
    const b = band(r.chrf2);
    return {
      id: r.model,
      repo: `WindyTranslate/${r.model}`,
      src: r.src,
      tgt: r.tgt,
      srcName: NAMES[r.src] || r.src,
      tgtName: NAMES[r.tgt] || r.tgt,
      chrf2: r.chrf2,
      bleu: r.bleu,
      band: b.label,
      rank: b.rank,
    };
  }).sort((a, b) => b.chrf2 - a.chrf2);

  const notScored = rows.filter((r) => r.status === 'NO-FLORES').length;

  const out = {
    _note: 'GENERATED by scripts/gen-catalogue.cjs from measured results. Do not edit by hand.',
    _method: {
      benchmark: 'FLORES-200 dev',
      metric: 'chrF++ (character n-gram, WMT default) and BLEU',
      why: 'FLORES is professionally translated and is not the corpus these models were trained on.',
      caveat: 'A screening score on 48 sentences per pair, not a publication result.',
      measured: '2026-08-04',
    },
    totals: {
      scored: models.length,
      notScored,
      excellent: models.filter((m) => m.rank === 5).length,
      good: models.filter((m) => m.rank === 4).length,
      usable: models.filter((m) => m.rank === 3).length,
      limited: models.filter((m) => m.rank === 2).length,
      notRecommended: models.filter((m) => m.rank === 1).length,
      medianChrf: models.length
        ? models.map((m) => m.chrf2).sort((a, b) => a - b)[Math.floor(models.length / 2)]
        : null,
    },
    bands: { excellent: '>=60', good: '45-60', usable: '30-45', limited: '15-30', notRecommended: '<15' },
    models,
  };

  const dest = path.join(__dirname, '..', 'src', 'data', 'catalogue.generated.json');
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, JSON.stringify(out, null, 2) + '\n');

  console.log(`✓ ${path.relative(process.cwd(), dest)}`);
  console.log(`  ${out.totals.scored} pairs scored · median chrF++ ${out.totals.medianChrf}`);
  console.log(`  excellent ${out.totals.excellent} · good ${out.totals.good} · usable ${out.totals.usable} · limited ${out.totals.limited} · not recommended ${out.totals.notRecommended}`);
  console.log(`  ${out.totals.notScored} pairs in languages FLORES-200 does not cover — reported, not hidden`);
  if (unnamed.size) {
    console.log(`  NOTE ${unnamed.size} code(s) have no display name and render as the raw code: ${[...unnamed].slice(0, 12).join(', ')}`);
  }
}

main();
