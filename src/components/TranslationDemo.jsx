import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSwitchHorizontal, HiLightningBolt, HiClock, HiShieldCheck } from 'react-icons/hi';

const domains = [
  {
    id: 'medical',
    label: '🏥 Medical',
    color: 'red',
    examples: [
      {
        input: 'The patient presented with acute myocardial infarction with ST-segment elevation requiring emergent percutaneous coronary intervention.',
        pair: 'EN → ES',
        generic: 'El paciente se presentó con infarto agudo de miocardio con elevación del segmento ST que requiere intervención coronaria percutánea urgente.',
        specialist: 'El paciente se presentó con infarto agudo de miocardio con elevación del segmento ST (IAMCEST) que requiere intervención coronaria percutánea (ICP) de emergencia.',
        issue: 'Misses standard medical abbreviations (IAMCEST, ICP). "Urgente" vs clinically correct "de emergencia." Could cause triage delays.',
      },
      {
        input: 'Administer 0.4mg sublingual nitroglycerin. Monitor for hypotension. Contraindicated with PDE5 inhibitors.',
        pair: 'EN → ZH',
        generic: '给予0.4毫克舌下硝酸甘油。监测低血压。与PDE5抑制剂禁忌。',
        specialist: '舌下含服硝酸甘油0.4mg，密切监测血压变化，警惕低血压反应。本药与5型磷酸二酯酶抑制剂（如西地那非）存在配伍禁忌。',
        issue: 'Generic omits dosage administration route detail, uses informal phrasing inappropriate for medical orders, and fails to expand PDE5 for Chinese clinical context.',
      },
    ],
  },
  {
    id: 'legal',
    label: '⚖️ Legal',
    color: 'yellow',
    examples: [
      {
        input: 'The indemnifying party shall hold harmless and defend the indemnified party against all claims arising from breach of representations and warranties herein.',
        pair: 'EN → DE',
        generic: 'Die schadlos haltende Partei hält die schadlos gehaltene Partei schadlos und verteidigt sie gegen alle Ansprüche aus der Verletzung der hierin enthaltenen Zusicherungen und Gewährleistungen.',
        specialist: 'Die freistellende Partei stellt die freigestellte Partei von sämtlichen Ansprüchen frei, die aus einer Verletzung der in diesem Vertrag abgegebenen Zusicherungen und Gewährleistungen entstehen, und übernimmt deren Rechtsverteidigung.',
        issue: '"Schadlos halten" is informal. German legal contracts require "freistellen" and "Rechtsverteidigung." This translation would not survive legal review.',
      },
    ],
  },
  {
    id: 'technical',
    label: '💻 Technical',
    color: 'blue',
    examples: [
      {
        input: 'The garbage collector failed to reclaim heap memory due to circular references in the weak map implementation, causing an out-of-memory exception in the worker thread pool.',
        pair: 'EN → JA',
        generic: 'ガベージコレクタは、弱いマップ実装の循環参照のためにヒープメモリを回収できず、ワーカースレッドプールでメモリ不足例外が発生しました。',
        specialist: 'WeakMap実装における循環参照により、ガベージコレクタがヒープメモリの回収に失敗し、ワーカースレッドプールでOutOfMemoryExceptionが発生しました。',
        issue: 'Translates "weak map" literally (弱いマップ) instead of keeping the standard term "WeakMap." Translates "out-of-memory exception" into Japanese instead of keeping "OutOfMemoryException." Engineers would not recognize these terms.',
      },
    ],
  },
];

export default function TranslationDemo() {
  const [activeDomain, setActiveDomain] = useState('medical');
  const [activeExample, setActiveExample] = useState(0);
  const [showComparison, setShowComparison] = useState(false);

  const domain = domains.find((d) => d.id === activeDomain);
  const example = domain.examples[activeExample % domain.examples.length];

  useEffect(() => {
    setActiveExample(0);
    setShowComparison(false);
    const timer = setTimeout(() => setShowComparison(true), 600);
    return () => clearTimeout(timer);
  }, [activeDomain]);

  useEffect(() => {
    setShowComparison(false);
    const timer = setTimeout(() => setShowComparison(true), 400);
    return () => clearTimeout(timer);
  }, [activeExample]);

  return (
    <section id="demo" className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See the <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Generic translation APIs use one model for everything. We built specialists.{' '}
            <span className="text-white font-semibold">The difference isn't subtle — it's dangerous.</span>
          </p>
        </motion.div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {domains.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDomain(d.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeDomain === d.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Example selector if multiple */}
        {domain.examples.length > 1 && (
          <div className="flex justify-center gap-2 mb-6">
            {domain.examples.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveExample(i)}
                className={`w-8 h-1.5 rounded-full transition-all ${
                  activeExample % domain.examples.length === i ? 'bg-blue-500' : 'bg-gray-800 hover:bg-gray-700'
                }`}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDomain}-${activeExample}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            {/* Input sentence */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Source Text</span>
                <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 font-mono">
                  {example.pair}
                </span>
              </div>
              <p className="text-white font-medium text-lg leading-relaxed">"{example.input}"</p>
            </div>

            {/* Comparison */}
            {showComparison && (
              <div className="grid md:grid-cols-2 gap-6">
                {/* Generic */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-900/50 border border-red-500/20 rounded-xl p-6 relative"
                >
                  <div className="absolute -top-3 left-4">
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30">
                      GENERIC API
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-300 leading-relaxed mb-4 font-mono text-sm">{example.generic}</p>
                    <p className="text-red-400/80 text-xs leading-relaxed">{example.issue}</p>
                  </div>
                </motion.div>

                {/* WindyTranslate Specialist */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-gray-900/50 border border-green-500/20 rounded-xl p-6 relative"
                >
                  <div className="absolute -top-3 left-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30 flex items-center space-x-1">
                      <HiShieldCheck size={12} />
                      <span>WINDYTRANSLATE SPECIALIST</span>
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-100 leading-relaxed mb-4 font-mono text-sm">{example.specialist}</p>
                    <p className="text-green-400/80 text-xs leading-relaxed">
                      ✓ Keeps the domain abbreviations a specialist reader expects.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Improvement callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-center"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
                <HiLightningBolt className="text-yellow-400" size={18} />
                <span className="text-sm text-gray-300">
                  Side-by-side output, not a score. Per-pair benchmarks are in{' '}
                  <a href="#models" className="text-blue-400 hover:underline">the catalogue</a>.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
