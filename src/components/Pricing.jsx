import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiSparkles, HiBriefcase, HiOfficeBuilding, HiArrowRight } from 'react-icons/hi';

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
  if (millions <= 0.03) recommended = tiers[0];
  else if (millions <= 10) recommended = tiers[1];
  else if (millions <= 100) recommended = tiers[2];
  else recommended = tiers[3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 max-w-2xl mx-auto bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold text-center mb-2">Not Sure Which Plan?</h3>
      <p className="text-gray-400 text-center text-sm mb-6">Drag the slider. We'll tell you.</p>

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

      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 text-center">
        <p className="text-sm text-gray-500 mb-1">Recommended plan</p>
        <p className="text-2xl font-extrabold gradient-text">{recommended.plan}</p>
        <p className="text-lg text-gray-300 mt-1">{recommended.price}</p>
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
        '1,000 characters/day — enough to prototype',
        'Access to all 2,084 models including specialists',
        'Community support + docs',
        '10 requests/minute',
        'HuggingFace model downloads',
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
        '1M characters/month',
        'All specialist models (medical, legal, technical)',
        'Email support — 24hr response time',
        '100 requests/minute',
        'API analytics dashboard',
        'Batch translation (100 texts/call)',
        'WindyCloud storage (10GB)',
      ],
      cta: 'Start Building',
      popular: true,
      highlight: '$0.099 per 1K chars — cheaper than Google Cloud Translation',
    },
    {
      name: 'Business',
      icon: HiOfficeBuilding,
      price: '$499',
      period: '/month',
      description: 'Scale across teams. Custom models. SLA.',
      features: [
        '10M characters/month',
        'Dedicated model instances',
        'Priority support (4hr SLA)',
        '500 requests/minute',
        'Custom model training on your data',
        'White-label "Powered by" branding',
        'WindyCloud storage (100GB)',
        'Team management + SSO',
      ],
      cta: 'Contact Sales',
      popular: false,
      highlight: '$0.049 per 1K chars at volume',
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

  return (
    <section id="pricing" className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Start Free. <span className="gradient-text">Scale Forever.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No hidden fees. No per-language surcharges. Every plan includes all 2,084 specialist models.
          </p>
        </motion.div>

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
                  <p className="text-xs text-blue-400/80 mt-2">{plan.highlight}</p>
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
            All plans include access to all 2,084 specialist models.{' '}
            <a href="#api" className="text-blue-400 hover:underline">
              Compare plans in detail
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
