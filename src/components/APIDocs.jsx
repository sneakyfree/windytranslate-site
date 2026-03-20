import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiClipboardCopy, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';

export default function APIDocs() {
  const [activeTab, setActiveTab] = useState('node');
  const [copied, setCopied] = useState(false);

  const codeExamples = {
    node: {
      label: 'Node.js',
      lang: 'javascript',
      quick: `// Three lines. That's it.
const wt = new WindyTranslate('your-key');
const result = await wt.translate('The patient has acute chest pain', {
  from: 'en', to: 'es', specialist: 'medical'
});
// → "El paciente presenta dolor torácico agudo"
// Clinically precise. Not "dolor de pecho." `,
      full: `import WindyTranslate from 'windytranslate';

const wt = new WindyTranslate('wt_live_sk_...');

// Basic translation — picks the best pair specialist automatically
const basic = await wt.translate('Hello, world!', { from: 'en', to: 'es' });
console.log(basic.text);        // "¡Hola, mundo!"
console.log(basic.model);       // "en-es-mp" (Marco Polo specialist)
console.log(basic.confidence);  // 0.985

// Domain specialist — medical, legal, technical
const medical = await wt.translate(
  'Administer 0.4mg sublingual nitroglycerin',
  { from: 'en', to: 'zh', specialist: 'medical' }
);
console.log(medical.text);   // "舌下含服硝酸甘油0.4mg"
console.log(medical.model);  // "en-zh-med"

// Batch translation — up to 100 texts in one call
const batch = await wt.translateBatch([
  { text: 'Check-in time', from: 'en', to: 'ja' },
  { text: 'Emergency exit', from: 'en', to: 'ja' },
  { text: 'No smoking', from: 'en', to: 'ja' },
]);
// All translated in a single API round-trip

// Language detection
const detected = await wt.detect('Bonjour le monde');
console.log(detected.language);    // "fr"
console.log(detected.confidence);  // 0.99`,
    },
    python: {
      label: 'Python',
      lang: 'python',
      quick: `# Three lines. That's it.
wt = WindyTranslate('your-key')
result = wt.translate('The patient has acute chest pain',
    from_lang='en', to_lang='es', specialist='medical')
# → "El paciente presenta dolor torácico agudo"
# Clinically precise. Not "dolor de pecho."`,
      full: `from windytranslate import WindyTranslate

wt = WindyTranslate(api_key='wt_live_sk_...')

# Basic translation — auto-selects best pair specialist
basic = wt.translate('Hello, world!', from_lang='en', to_lang='es')
print(basic.text)        # "¡Hola, mundo!"
print(basic.model)       # "en-es-mp" (Marco Polo specialist)
print(basic.confidence)  # 0.985

# Domain specialist — medical, legal, technical
medical = wt.translate(
    'Administer 0.4mg sublingual nitroglycerin',
    from_lang='en', to_lang='zh', specialist='medical'
)
print(medical.text)   # "舌下含服硝酸甘油0.4mg"
print(medical.model)  # "en-zh-med"

# Batch translation — up to 100 texts in one call
batch = wt.translate_batch([
    {'text': 'Check-in time', 'from': 'en', 'to': 'ja'},
    {'text': 'Emergency exit', 'from': 'en', 'to': 'ja'},
    {'text': 'No smoking', 'from': 'en', 'to': 'ja'},
])
# All translated in a single API round-trip

# Language detection
detected = wt.detect('Bonjour le monde')
print(detected.language)    # "fr"
print(detected.confidence)  # 0.99`,
    },
    curl: {
      label: 'cURL',
      lang: 'bash',
      quick: `# One request. Domain specialist included.
curl -X POST https://api.windytranslate.com/v1/translate \\
  -H "Authorization: Bearer wt_live_sk_..." \\
  -H "Content-Type: application/json" \\
  -d '{"text":"The patient has acute chest pain","from":"en","to":"es","specialist":"medical"}'`,
      full: `# Translate with domain specialist
curl -X POST https://api.windytranslate.com/v1/translate \\
  -H "Authorization: Bearer wt_live_sk_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Force majeure clause shall supersede all obligations",
    "from": "en",
    "to": "de",
    "specialist": "legal"
  }'

# Response:
# {
#   "text": "Die Klausel der höheren Gewalt hat Vorrang...",
#   "model": "en-de-leg",
#   "confidence": 0.978,
#   "chars": 52,
#   "latency_ms": 34
# }

# Batch translation
curl -X POST https://api.windytranslate.com/v1/translate/batch \\
  -H "Authorization: Bearer wt_live_sk_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "translations": [
      {"text": "Check-in time", "from": "en", "to": "ja"},
      {"text": "Emergency exit", "from": "en", "to": "ja"}
    ]
  }'

# Language detection
curl https://api.windytranslate.com/v1/detect \\
  -H "Authorization: Bearer wt_live_sk_..." \\
  -d '{"text": "Bonjour le monde"}'`,
    },
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const endpoints = [
    { method: 'POST', path: '/v1/translate', description: 'Translate text with optional domain specialist' },
    { method: 'POST', path: '/v1/translate/batch', description: 'Batch translate up to 100 texts in one call' },
    { method: 'POST', path: '/v1/detect', description: 'Detect language with confidence score' },
    { method: 'GET', path: '/v1/models', description: 'List all 2,084 specialist models with metadata' },
    { method: 'GET', path: '/v1/models/:id', description: 'Get benchmarks, accuracy, and details for a model' },
    { method: 'GET', path: '/v1/usage', description: 'Your current usage, quota, and billing' },
  ];

  const [showFull, setShowFull] = useState(false);
  const currentExample = codeExamples[activeTab];

  return (
    <section id="api" className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            API That <span className="gradient-text">Developers Love</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three lines to integrate. Domain specialists built in. The kind of API you copy-paste on first sight.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Endpoints */}
          <div>
            <h3 className="text-2xl font-bold mb-6">REST Endpoints</h3>
            <div className="space-y-3">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="card py-4"
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono ${
                        endpoint.method === 'GET'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <div className="flex-1 min-w-0">
                      <code className="text-purple-400 font-mono text-sm">{endpoint.path}</code>
                      <p className="text-gray-500 text-xs mt-1">{endpoint.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 card bg-blue-500/5 border-blue-500/20">
              <h4 className="font-semibold text-blue-400 mb-2 flex items-center space-x-2">
                <HiLightningBolt size={18} />
                <span>Authentication</span>
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                All requests use Bearer token auth. Get your key in 30 seconds — free tier included.
              </p>
              <code className="block bg-gray-950 px-4 py-3 rounded-lg text-sm font-mono text-blue-400 border border-gray-800">
                Authorization: Bearer wt_live_sk_...
              </code>
            </div>
          </div>

          {/* Right: Code Examples */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">
                {showFull ? 'Full Examples' : 'Quick Start — 3 Lines'}
              </h3>
              <button
                onClick={() => setShowFull(!showFull)}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                {showFull ? '← Quick start' : 'See full examples →'}
              </button>
            </div>

            {/* Language Tabs */}
            <div className="flex space-x-2 mb-4">
              {Object.entries(codeExamples).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                  }`}
                >
                  {val.label}
                </button>
              ))}
            </div>

            {/* Code Block */}
            <div className="relative">
              <button
                onClick={() => handleCopy(showFull ? currentExample.full : currentExample.quick)}
                className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors z-10 flex items-center space-x-1"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <HiCheckCircle className="text-green-400" size={18} />
                    <span className="text-green-400 text-xs font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <HiClipboardCopy className="text-gray-400" size={18} />
                    <span className="text-gray-500 text-xs">Copy</span>
                  </>
                )}
              </button>

              <pre className="bg-gray-950 rounded-xl p-6 overflow-x-auto border border-gray-800 max-h-[480px]">
                <code className={`language-${currentExample.lang} text-sm leading-relaxed`}>
                  {showFull ? currentExample.full : currentExample.quick}
                </code>
              </pre>
            </div>

            {!showFull && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 card bg-green-500/5 border-green-500/20"
              >
                <p className="text-green-400 text-sm font-semibold mb-1">💡 The specialist parameter is the magic.</p>
                <p className="text-gray-400 text-sm">
                  Add <code className="text-purple-400">specialist: 'medical'</code> and the API routes your request 
                  to a model trained on 2M medical documents. No specialist? It auto-selects the best general pair model.
                </p>
              </motion.div>
            )}

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: 'Install', node: 'npm i windytranslate', py: 'pip install windytranslate' },
              ].map((item, i) => (
                <div key={i} className="col-span-3">
                  <div className="flex flex-wrap gap-3">
                    <div className="flex-1 bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 font-mono text-sm flex items-center justify-between">
                      <span className="text-gray-400">
                        <span className="text-green-400">$</span>{' '}
                        {activeTab === 'python' ? item.py : activeTab === 'node' ? item.node : item.node}
                      </span>
                      <button
                        onClick={() => handleCopy(activeTab === 'python' ? item.py : item.node)}
                        className="ml-3 text-gray-600 hover:text-gray-400 transition-colors"
                      >
                        <HiClipboardCopy size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
