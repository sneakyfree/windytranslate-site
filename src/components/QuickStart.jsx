import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiClipboardCopy, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';

export default function QuickStart() {
  const [copied, setCopied] = useState(null);

  const steps = [
    {
      number: '1',
      title: 'Get Your API Key',
      description: 'Free tier. No credit card. 30 seconds.',
      code: null,
    },
    {
      number: '2',
      title: 'Install the SDK',
      description: 'One command. Python or Node.js. Or skip and use REST directly.',
      code: {
        python: 'pip install windytranslate',
        node: 'npm install windytranslate',
      },
    },
    {
      number: '3',
      title: 'Translate With Domain Intelligence',
      description: 'Three lines. Choose your specialist. Get production-grade accuracy.',
      code: {
        python: `from windytranslate import WindyTranslate

wt = WindyTranslate(api_key='wt_live_sk_...')

# General translation — auto-selects best pair specialist
result = wt.translate('Hello world', from_lang='en', to_lang='es')
print(result.text)  # "¡Hola, mundo!"

# Domain specialist — medical, legal, technical
medical = wt.translate(
    'Patient presents with tachycardia',
    from_lang='en', to_lang='es',
    specialist='medical'
)
print(medical.text)  # "Paciente presenta taquicardia"
print(medical.model) # "en-es-med" (specialist auto-selected)`,
        node: `import WindyTranslate from 'windytranslate';

const wt = new WindyTranslate('wt_live_sk_...');

// General translation — auto-selects best pair specialist
const result = await wt.translate('Hello world', {
  from: 'en', to: 'es'
});
console.log(result.text);  // "¡Hola, mundo!"

// Domain specialist — medical, legal, technical
const medical = await wt.translate(
  'Patient presents with tachycardia',
  { from: 'en', to: 'es', specialist: 'medical' }
);
console.log(medical.text);  // "Paciente presenta taquicardia"
console.log(medical.model); // "en-es-med" (specialist)`,
      },
    },
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Zero to <span className="gradient-text">Production</span> in 30 Seconds
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Not an exaggeration. Three steps. Copy, paste, ship.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-xl font-extrabold shadow-lg shadow-blue-500/20">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 mb-4">{step.description}</p>

                  {step.code && (
                    <div className="space-y-4">
                      {typeof step.code === 'object' && 'python' in step.code ? (
                        <div className="grid md:grid-cols-2 gap-4">
                          {['python', 'node'].map((lang) => (
                            <div key={lang} className="relative">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                                  {lang === 'node' ? 'Node.js' : 'Python'}
                                </span>
                                <button
                                  onClick={() => handleCopy(step.code[lang], `${index}-${lang}`)}
                                  className="p-1 hover:bg-gray-800 rounded transition-colors flex items-center space-x-1"
                                >
                                  {copied === `${index}-${lang}` ? (
                                    <HiCheckCircle className="text-green-400" size={16} />
                                  ) : (
                                    <HiClipboardCopy className="text-gray-500" size={16} />
                                  )}
                                  <span className="text-xs text-gray-600">
                                    {copied === `${index}-${lang}` ? 'Copied!' : 'Copy'}
                                  </span>
                                </button>
                              </div>
                              <pre className="bg-gray-950 rounded-xl p-4 overflow-x-auto border border-gray-800">
                                <code className="text-xs font-mono text-gray-300 leading-relaxed">
                                  {step.code[lang]}
                                </code>
                              </pre>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/50 to-purple-600/10"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <HiLightningBolt className="text-green-400" size={18} />
            <span className="text-green-400 text-sm font-semibold">
              Most developers integrate in under 5 minutes
            </span>
          </div>
          <div>
            <a href="#api" className="btn-primary">
              Full API Documentation →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
