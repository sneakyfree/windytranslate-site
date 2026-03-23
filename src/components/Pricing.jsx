import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCheck, HiSparkles, HiBriefcase, HiOfficeBuilding, HiArrowRight } from 'react-icons/hi';

function CompetitorAnchoring() {
  const competitors = [
    { name: 'Major Cloud Translation APIs', price: '$15–25/M chars', models: '1 generic model', quality: 'Good for chat. Bad for medical, legal, technical.', color: 'text-gray-400' },
    { name: 'Premium Translation APIs', price: '$20–30/M chars', models: '1 model, limited languages', quality: 'Decent quality, limited languages. No specialist models.', color: 'text-gray-400' },
    { name: 'Budget Translation APIs', price: '$10–15/M chars', models: '1 generic model', quality: 'Cheap but generic. No domain specialization.', color: 'text-gray-400' },
    { name: 'WindyTranslate', price: 'From $0', models: '3,500+ specialist models', quality: 'Pair-trained specialists. Medical ES↔EN ≠ Legal ES↔EN. We have both.', color: 'text-blue-400' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="mb-16 max-w-4xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-center mb-2">The API Landscape (Honest Version)</h3>
      <p className="text-gray-500 text-center text-sm mb-8">Everyone charges per character. We give you more for less.</p>
      <div className="overflow-hidden rounded-xl border border-gray-800/60">
        {competitors.map((c, i) => (
          <div key={i} className={`flex items-center justify-between px-5 py-4 ${
            c.name === 'WindyTranslate' 
              ? 'bg-blue-500/10 border-t-2 border-blue-500/30' 
              : i % 2 === 0 ? 'bg-gray-900/40' : 'bg-gray-900/20'
          }`}>
            <div className="flex-1">
              <div className={`font-bold text-sm ${c.name === 'WindyTranslate' ? 'text-blue-400' : 'text-white'}`}>
                {c.name === 'WindyTranslate' ? '🌪️ ' : ''}{c.name}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{c.quality}</div>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
              <div className={`text-sm font-bold ${c.name === 'WindyTranslate' ? 'text-green-400' : 'text-gray-400'}`}>{c.price}</div>
              <div className="text-xs text-gray-600">{c.models}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-4 text-xs text-gray-500">
        Other APIs: 1 generic model tries to translate everything. WindyTranslate: <span className="text-blue-400 font-bold">3,500+ specialists</span>, each trained on specific language pairs and domains.
        <br />
        <span className="text-gray-600">It's the difference between a GP and a brain surgeon.</span>
      </p>
    </motion.div>
  );
}

function PricingCalculator() {
  const [chars, setChars] = useState(5);
  const tiers = [
    { max: 1, label: 'Free', price: '$0/mo', plan: 'Developer Free' },
    { max: 10, label: 'Pro', price: '$99/mo', plan: 'Pro' },
    { max: 100, label: 'Business', price: '$499/mo', plan: 'Business' },
    { max: 1000, label: 'Enterprise', price: 'Custom', plan: 'Enterprise' },
  ];

  const millions = chars;
  let recommended;
  let googleCost;
  if (millions <= 0.03) { recommended = tiers[0]; googleCost = 0; }
  else if (millions <= 10) { recommended = tiers[1]; googleCost = millions * 20; }
  else if (millions <= 100) { recommended = tiers[2]; googleCost = millions * 20; }
  else { recommended = tiers[3]; googleCost = millions * 20; }

  const savings = googleCost - (recommended.price === '$0/mo' ? 0 : parseFloat(recommended.price.replace(/[^0-9.]/g, '')));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 max-w-2xl mx-auto bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold text-center mb-2">How Much Will You Save?</h3>
      <p className="text-gray-400 text-center text-sm mb-6">Drag the slider. See what general-purpose APIs would charge you — then see our price.</p>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Monthly characters</span>
          <span className="text-lg font-bold text-blue-400">
            {millions < 1 ? `${(millions * 1000).toFixed(0)}K` : `${millions}M`}
          </span>
        </div>
        <input
          type="range"
          min="0.01"
          max="200"
          step="0.01"
          value={chars}
          onChange={(e) => setChars(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>10K</span>
          <span>1M</span>
          <span>10M</span>
          <span>100M</span>
          <span>200M+</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">General-Purpose APIs</p>
          <p className="text-2xl font-bold text-red-400/80 line-through">${googleCost.toFixed(0)}/mo</p>
          <p className="text-[10px] text-gray-600">1 generic model</p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">WindyTranslate</p>
          <p className="text-2xl font-extrabold gradient-text">{recommended.price}</p>
          <p className="text-[10px] text-blue-400">3,500+ specialist models</p>
        </div>
      </div>

      {savings > 0 && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-center">
          <span className="text-green-400 font-bold text-lg">You save ${savings.toFixed(0)}/mo</span>
          <span className="text-green-400/60 text-sm ml-2">with better quality</span>
        </div>
      )}

      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center mt-4">
        <p className="text-sm text-gray-500 mb-1">Recommended plan</p>
        <p className="text-2xl font-extrabold gradient-text">{recommended.plan}</p>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const plans = [
    {
      name: 'Developer Free',
      icon: HiSparkles,
      price: '$0',
      period: 'forever',
      description: 'Build and test. No credit card. No time limit.',
      features: [
        '1M characters/month',
        'All 3,500+ specialist models included',
        'Community support + full docs',
        '10 requests/minute',
        'HuggingFace model downloads (free!)',
      ],
      cta: 'Start Free',
      popular: false,
      highlight: null,
    },
    {
      name: 'Pro',
      icon: HiBriefcase,
      price: '$99',
      period: '/month',
      description: 'Ship to production. Real apps. Real users.',
      features: [
        '10M characters/month',
        'All specialist models (medical, legal, technical)',
        'Email support — 24hr response time',
        '100 requests/minute',
        'API analytics dashboard',
        'Batch translation (100 texts/call)',
        'WindyCloud storage (10GB)',
      ],
      cta: 'Start Building',
      popular: true,
      highlight: 'At $0.099/1K chars overage — with specialist models included.',
    },
    {
      name: 'Business',
      icon: HiOfficeBuilding,
      price: '$499',
      period: '/month',
      description: 'Scale across teams. Custom models. SLA.',
      features: [
        '100M characters/month',
        'Dedicated model instances',
        'Priority support (4hr SLA)',
        '1,000 requests/minute',
        'Custom model training on YOUR data',
        'White-label "Powered by" branding',
        'WindyCloud storage (100GB)',
        'Team management + SSO',
      ],
      cta: 'Contact Sales',
      popular: false,
      highlight: 'At $0.049/1K chars overage — with dedicated model instances.',
    },
    {
      name: 'Enterprise',
      icon: HiOfficeBuilding,
      price: 'Custom',
      period: '',
      description: 'Unlimited. On-premise. Compliant.',
      features: [
        'Unlimited characters',
        'Dedicated infrastructure + GPU',
        '24/7 support with 1hr SLA',
        'No rate limits',
        'Custom model development from scratch',
        'On-premises / air-gapped deployment',
        'SOC 2, HIPAA, GDPR, FedRAMP',
        'Dedicated account team',
      ],
      cta: 'Talk to Sales',
      popular: false,
      highlight: 'For healthcare, legal, government, and defense',
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Start Free. <span className="gradient-text">Scale Forever.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No hidden fees. No per-language surcharges. Every plan includes all 3,500+ specialist models.
          </p>
        </motion.div>

        <CompetitorAnchoring />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`card relative flex flex-col ${
                plan.popular
                  ? 'border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02]'
                  : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-bold tracking-wider">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <plan.icon className="text-blue-400 mb-3" size={28} />
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-xs mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold gradient-text">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-2 text-sm">{plan.period}</span>}
                </div>
                {plan.highlight && (
                  <p className="text-xs text-green-400/80 mt-2 font-semibold">{plan.highlight}</p>
                )}
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <HiCheck className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-400 text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all text-sm flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                <span>{plan.cta}</span>
                <HiArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <PricingCalculator />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 text-sm">
            All plans include all 3,500+ specialist models. Open source models available on HuggingFace for free.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            🔓 No lock-in. Download any model, run it yourself. The API is the convenience play, not the cage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
