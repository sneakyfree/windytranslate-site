import { motion } from 'framer-motion';

/*
 * The lab section.
 *
 * Everything here is either verifiable or an explicit statement of intent.
 * The fleet figures come from the Clinic's own MASTER_ROSTER._variant_counts
 * (1,827 patients, 5,844 variants, of which 3,816 are distinct trained weight
 * sets and 2,028 are ct2_int8 format conversions). The clinic description is
 * literal — every model really does have a JSON chart with an examination
 * history and a signed verdict per doctor.
 *
 * The passion line is opinion, not a measurement, and is Grant's. It is the
 * one claim on this page nobody can falsify and nobody can copy honestly.
 */

const FACTS = [
  {
    figure: '1,827',
    label: 'models under care',
    body: 'Every model in the fleet has a chart — where it came from, what was done to it, which doctor signed off, and what the examination found.',
  },
  {
    figure: '5,844',
    label: 'builds maintained',
    body: 'Base weights, fine-tuned variants and quantized builds. The same model in the format your hardware actually wants, rather than one take-it-or-leave-it artifact.',
  },
  {
    figure: '209',
    label: 'languages covered',
    body: 'Including many that no major translation service offers at all. The long tail is not an afterthought here; it is most of the catalogue.',
  },
];

export default function TheLab() {
  return (
    <section id="lab" className="py-24 px-6 bg-gray-950 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Built in a <span className="gradient-text">Laboratory</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Windstorm Labs exists to do one thing: make voice and language models lighter,
            faster and more accurate than they were yesterday. We fork from strong open
            foundations, refine them in-house, and keep refining them. These are our models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {FACTS.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-7"
            >
              <div className="text-4xl font-black gradient-text mb-1">{f.figure}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">{f.label}</div>
              <p className="text-sm text-gray-400 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">
            Nobody is more passionate about the great art of voice-to-text and translation
            than Windy Word, Windy Translate and Windy Traveler.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            We are on a permanent quest for the lightest, fastest, most accurate voice and
            language models anywhere in the world. The catalogue you see today is a snapshot;
            it will be better next month, and we will publish the scores either way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
