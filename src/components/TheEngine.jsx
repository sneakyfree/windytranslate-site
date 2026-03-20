import { motion } from 'framer-motion';
import { HiLightningBolt, HiCube, HiBeaker, HiShieldCheck, HiChip, HiGlobe } from 'react-icons/hi';

export default function TheEngine() {
  const features = [
    {
      icon: HiLightningBolt,
      title: 'Pair Specialists, Not Generalists',
      description: 'Google uses one model for 100+ languages. We train a dedicated model for each pair — EN↔ES, EN↔ZH, ZH↔JA — each one obsessively optimized for its specific language combination. The accuracy difference is 20-30%.',
      stat: '2,084 models',
    },
    {
      icon: HiShieldCheck,
      title: 'Domain-Trained Intelligence',
      description: 'Medical models trained on 2M clinical documents. Legal models trained on 500K court filings. Technical models trained on 1M engineering docs. Your industry\'s vocabulary, handled correctly.',
      stat: '5 domains',
    },
    {
      icon: HiBeaker,
      title: 'Download or API — Your Choice',
      description: 'Every model lives on HuggingFace. Download and run locally with zero dependencies. Or call our API for edge-cached, sub-50ms responses. Own your stack or outsource it. We don\'t lock you in.',
      stat: 'Open models',
    },
    {
      icon: HiCube,
      title: 'White-Label Ready',
      description: 'Your brand. Your domain. Our engine. Hospitals embed us for patient communication. Law firms use us for cross-border contracts. Call centers deploy us for real-time translation. "Powered by WindyTranslate" — or completely invisible.',
      stat: 'Your brand',
    },
    {
      icon: HiChip,
      title: 'Edge-Deployed, Globally',
      description: 'Models cached at edge locations worldwide. Average response time under 50ms. No cold starts. No spin-up delays. Translation at the speed your users expect.',
      stat: '<50ms',
    },
    {
      icon: HiGlobe,
      title: '127 Languages, Growing',
      description: 'From Mandarin to Maori. From Arabic to Zulu. Major pairs have 98%+ accuracy. Long-tail pairs continue improving with every deployment. The catalog never stops growing.',
      stat: '127 languages',
    },
  ];

  return (
    <section id="engine" className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            The <span className="gradient-text">Intel Inside</span> of Translation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            You don't buy Intel — you buy a laptop powered by Intel. You don't use WindyTranslate directly — 
            you use products <em>powered by</em> WindyTranslate. But enterprises, developers, and CTOs?{' '}
            <span className="text-white font-semibold">They plug in directly.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card group hover:border-blue-500/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                  <feature.icon className="text-blue-400" size={24} />
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md border border-purple-500/20">
                  {feature.stat}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">One Engine. Five Products. Infinite Scale.</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                WindyTranslate is the translation intelligence layer that powers every product in the Windy ecosystem. 
                When WindyChat handles a real-time conversation in Mandarin, that's us. When WindyTraveler translates 
                a restaurant menu in Tokyo, that's us. When WindyClone speaks in your voice — in Spanish — that's us.
              </p>
              <p className="text-gray-400 leading-relaxed">
                <span className="text-white font-semibold">Now we're opening the engine to everyone.</span>{' '}
                The same infrastructure that powers millions of translations across five consumer products — 
                available via API, SDK, or white-label deployment.
              </p>
            </div>
            <div className="bg-gray-900/70 rounded-xl p-6 border border-gray-800 font-mono text-sm">
              <div className="text-gray-500 mb-3">// Architecture</div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-blue-400 w-48">Consumer Layer</span>
                  <span className="text-gray-600">│</span>
                </div>
                <div className="text-gray-400 pl-4 space-y-1">
                  <div>├─ <span className="text-blue-300">WindyWord.ai</span> <span className="text-gray-600">voice → text</span></div>
                  <div>├─ <span className="text-purple-300">WindyChat.ai</span> <span className="text-gray-600">real-time comms</span></div>
                  <div>├─ <span className="text-green-300">WindyTraveler.com</span> <span className="text-gray-600">travel companion</span></div>
                  <div>├─ <span className="text-orange-300">WindyClone.ai</span> <span className="text-gray-600">digital twin</span></div>
                  <div>└─ <span className="text-cyan-300">WindyCloud.com</span> <span className="text-gray-600">storage + compute</span></div>
                </div>
                <div className="text-gray-600 pl-8">│</div>
                <div className="text-gray-600 pl-4">All translation powered by ↓</div>
                <div className="text-gray-600 pl-8">│</div>
                <div className="flex items-center">
                  <span className="text-yellow-400 font-bold w-48">Engine Layer</span>
                  <span className="text-gray-600">│</span>
                </div>
                <div className="text-yellow-300/80 pl-4">
                  └─ <span className="text-yellow-300 font-bold">WindyTranslate.com</span>
                  <span className="text-gray-500"> 2,084 LLMs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
