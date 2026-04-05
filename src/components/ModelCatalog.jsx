import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiChip, HiTrendingUp, HiDatabase, HiShieldCheck } from 'react-icons/hi';
import { models, modelCategories, langNames } from '../data/models';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    } else if (rating >= i - 0.5) {
      // Half star: use a layered approach
      stars.push(
        <span key={i} className="relative inline-block" style={{ width: '1em' }}>
          <span className="text-gray-700">★</span>
          <span className="absolute left-0 top-0 overflow-hidden text-yellow-400" style={{ width: '50%' }}>★</span>
        </span>
      );
    } else {
      stars.push(<span key={i} className="text-gray-700">★</span>);
    }
  }
  return (
    <span className="inline-flex items-center text-sm tracking-tight">
      {stars}
      <span className="ml-1.5 text-xs text-gray-400 font-semibold">{rating.toFixed(1)}</span>
    </span>
  );
}

function expandPair(pair) {
  // "en→zh" → "English → Chinese"
  const parts = pair.split('→');
  if (parts.length !== 2) return pair;
  const from = langNames[parts[0].trim()] || parts[0];
  const to = langNames[parts[1].trim()] || parts[1];
  return `${from} → ${to}`;
}

export default function ModelCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModel, setExpandedModel] = useState(null);

  const filteredModels = models.filter((model) => {
    const matchesCategory = selectedCategory === 'all' || model.category === selectedCategory;
    const matchesSearch =
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (model.domain && model.domain.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalModels = models.length;
  const avgAccuracy = (
    models.reduce((sum, m) => sum + parseFloat(m.accuracy), 0) / models.length
  ).toFixed(1);

  return (
    <section id="models" className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            The <span className="gradient-text">Model Armory</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            3,500+ specialist models. Each one trained on domain-specific data. Each one benchmarked against 
            generic alternatives.{' '}
            <span className="text-white font-semibold">Choose your weapon.</span>
          </p>

          {/* Armory stats bar */}
          <div className="inline-flex flex-wrap justify-center gap-6 px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400">{totalModels}</div>
              <div className="text-xs text-gray-500">Models Shown</div>
            </div>
            <div className="w-px bg-gray-800"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-400">{avgAccuracy}%</div>
              <div className="text-xs text-gray-500">Avg Accuracy</div>
            </div>
            <div className="w-px bg-gray-800"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">+22.4%</div>
              <div className="text-xs text-gray-500">vs Generic Avg</div>
            </div>
            <div className="w-px bg-gray-800"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-400">5</div>
              <div className="text-xs text-gray-500">Domains</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search models by name, ID, or domain... (e.g. 'medical', 'en-es')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              All ({models.length})
            </button>
            {modelCategories.map((cat) => {
              const count = models.filter((m) => m.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                  }`}
                >
                  {cat.icon} {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Model Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
              className="card group hover:border-blue-500/40 cursor-pointer"
              onClick={() => setExpandedModel(expandedModel === model.id ? null : model.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-base font-bold group-hover:text-blue-400 transition-colors">
                      {model.name}
                    </h3>
                  </div>
                  <code className="text-xs text-gray-600 font-mono">{model.id}</code>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] rounded-md border border-blue-500/20 font-bold">VIA API</span>
                  <HiChip className="text-purple-500/50 group-hover:text-purple-400 transition-colors" size={16} />
                </div>
              </div>

              {/* Star Rating */}
              {model.rating && (
                <div className="mb-2">
                  <StarRating rating={model.rating} />
                </div>
              )}

              {/* Language pairs */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {model.pairs.map((pair) => (
                    <span
                      key={pair}
                      className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20 font-mono"
                    >
                      {pair}
                    </span>
                  ))}
                  {model.domain && (
                    <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-xs rounded-md border border-yellow-500/20">
                      {model.domain}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-gray-500">
                  {model.pairs.map(expandPair).join(' · ')}
                </div>
              </div>

              {/* Key metrics */}
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Specialist Accuracy</span>
                  <span className="text-green-400 font-bold">{model.accuracy}%</span>
                </div>
                {model.genericAccuracy && (
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">vs Generic</span>
                    <span className="text-red-400">{model.genericAccuracy}%</span>
                  </div>
                )}
                {/* Accuracy bar */}
                <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  {model.genericAccuracy && (
                    <div
                      className="absolute top-0 left-0 h-full bg-red-500/40 rounded-full"
                      style={{ width: `${model.genericAccuracy}%` }}
                    ></div>
                  )}
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                    style={{ width: `${model.accuracy}%` }}
                  ></div>
                </div>
                {model.genericAccuracy && (
                  <div className="text-xs text-right">
                    <span className="text-green-400 font-semibold">
                      +{(parseFloat(model.accuracy) - parseFloat(model.genericAccuracy)).toFixed(1)}% improvement
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Size</span>
                  <span className="text-gray-300">{model.size}</span>
                </div>
                {model.trainingData && (
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Training Data</span>
                    <span className="text-gray-300">{model.trainingData}</span>
                  </div>
                )}
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {expandedModel === model.id && model.description && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 border-t border-gray-800 text-xs text-gray-400 leading-relaxed">
                      {model.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="space-y-2 mt-3">
                <div className="flex space-x-2">
                  <a href="#api" className="flex-1 px-3 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-lg shadow-blue-500/20">
                    <HiDatabase size={14} />
                    <span>Use via API</span>
                    <span className="ml-1 px-1.5 py-0.5 bg-white/20 rounded text-[10px]">Easy</span>
                  </a>
                  <a href="#pricing" className="px-3 py-2.5 border border-gray-700 hover:bg-gray-800 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1.5">
                    <HiShieldCheck size={14} />
                    <span>See Plans</span>
                  </a>
                </div>
                <p className="text-[10px] text-gray-600 text-center">One API call. 3,500+ specialist models at your fingertips.</p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredModels.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No models found matching "{searchQuery}"</p>
            <p className="text-gray-600 text-sm mt-2">Try searching by language pair (e.g., "en-es") or domain (e.g., "medical")</p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">
            Showing {filteredModels.length} of 3,500+ specialist models.{' '}
            <span className="text-gray-400">Full catalog available via API.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="#api" className="btn-primary inline-flex items-center space-x-2">
              <HiDatabase size={18} />
              <span>Get API Access — One Endpoint, All Models</span>
            </a>
            <a href="#pricing" className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-700 hover:bg-gray-800 rounded-xl font-semibold transition-colors">
              <HiTrendingUp size={18} />
              <span>Compare Plans</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
