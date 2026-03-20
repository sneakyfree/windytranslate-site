import { motion } from 'framer-motion';
import { HiMicrophone, HiChatAlt, HiGlobeAlt, HiDuplicate, HiCloud } from 'react-icons/hi';

export default function PoweredBy() {
  const products = [
    {
      name: 'WindyWord.ai',
      icon: HiMicrophone,
      tagline: 'Voice → Text Intelligence',
      description: 'Specialized voice-to-text transcription. Every language model pulls from WindyTranslate for multi-language support.',
      color: 'from-blue-500 to-cyan-500',
      borderHover: 'hover:border-blue-500/40',
    },
    {
      name: 'WindyChat.ai',
      icon: HiChatAlt,
      tagline: 'Real-Time Translated Comms',
      description: 'Chat, voice calls, video calls — all with live AI translation across 100+ languages. Powered by our pair specialists.',
      color: 'from-purple-500 to-pink-500',
      borderHover: 'hover:border-purple-500/40',
    },
    {
      name: 'WindyTraveler.com',
      icon: HiGlobeAlt,
      tagline: 'The Travel Companion',
      description: 'Offline translation packs, real-time travel translation, AI tour guides. Every word goes through WindyTranslate.',
      color: 'from-green-500 to-teal-500',
      borderHover: 'hover:border-green-500/40',
    },
    {
      name: 'WindyClone.ai',
      icon: HiDuplicate,
      tagline: 'Your Digital Twin',
      description: 'Speak in your voice — in any language. WindyTranslate handles the translation; WindyClone handles the voice.',
      color: 'from-orange-500 to-red-500',
      borderHover: 'hover:border-orange-500/40',
    },
    {
      name: 'WindyCloud.com',
      icon: HiCloud,
      tagline: 'The Data Layer',
      description: 'Stores every model, translation memory, and user data. The gravity well that holds the ecosystem together.',
      color: 'from-cyan-500 to-blue-500',
      borderHover: 'hover:border-cyan-500/40',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Animated background pulse */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Powering <span className="gradient-text">5 Products</span>.
            <br />
            <span className="text-gray-500">100+ Countries. Millions of Translations.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every Windy product is powered by WindyTranslate. The same engine that handles millions 
            of translations across five consumer products —{' '}
            <span className="text-white font-semibold">now available to power yours.</span>
          </p>
        </motion.div>

        {/* Product cards in orbit-like layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`card group ${product.borderHover} ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${product.color}`}>
                  <product.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">
                    {product.tagline}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>

              {/* Powered by badge */}
              <div className="mt-4 pt-3 border-t border-gray-800/50">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600">Powered by WindyTranslate</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              If It Powers <span className="gradient-text">All of That</span>,
              <br />
              It Can Power You.
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              The same 2,084 specialist models. The same sub-50ms latency. The same domain accuracy.
              Plug in via API, SDK, or white-label deployment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#api" className="btn-primary text-lg px-8 py-3">
                Start Integrating
              </a>
              <a href="#enterprise" className="btn-secondary text-lg px-8 py-3">
                Enterprise Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
