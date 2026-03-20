import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiHeart, HiScale, HiAcademicCap, HiPhone, HiOfficeBuilding, HiArrowRight } from 'react-icons/hi';

export default function WhiteLabel() {
  const [activeStory, setActiveStory] = useState(0);

  const verticals = [
    {
      icon: HiHeart,
      name: 'Healthcare',
      color: 'from-red-500/20 to-red-600/20',
      borderColor: 'border-red-500/30',
      accentColor: 'text-red-400',
      story: 'A patient walks into the ER. She speaks Mandarin. The attending speaks English. Her chest pain could be cardiac, could be muscular — the difference is in the details she\'s trying to describe.',
      problem: 'Google Translate renders "胸闷" as "chest tightness." Technically correct. Clinically useless. Is it pressure? Squeezing? Radiating?',
      solution: 'WindyTranslate Medical ZH↔EN translates "胸闷伴有放射性左臂疼痛" as "chest oppression with radiating left arm pain" — immediately signaling a STEMI protocol. The ER team activates the cath lab.',
      stakes: 'In healthcare, a mistranslation isn\'t a bug report. It\'s a malpractice suit. It\'s a death.',
      stat: '96.3% accuracy on clinical terminology',
      statSub: 'vs 74.1% generic — a 22% gap that kills',
    },
    {
      icon: HiScale,
      name: 'Legal',
      color: 'from-yellow-500/20 to-amber-600/20',
      borderColor: 'border-yellow-500/30',
      accentColor: 'text-yellow-400',
      story: 'A $400M cross-border acquisition. The contract is in English. The counterparty\'s counsel needs it in German — not conversational German, but Rechtssprache. Court-admissible legal German.',
      problem: 'Generic translation renders "hold harmless" as "schadlos halten." A German lawyer reads that and sends the contract back. The correct legal term is "freistellen." The deal stalls.',
      solution: 'WindyTranslate Legal EN↔DE uses "freistellen" and "Rechtsverteidigung" — terms that survive judicial review. The contract closes on schedule.',
      stakes: 'One wrong word in a contract doesn\'t just lose a deal — it creates liability. Legal translation requires zero tolerance for "close enough."',
      stat: '97.8% accuracy on legal terminology',
      statSub: 'Trained on 440K court filings and contracts',
    },
    {
      icon: HiAcademicCap,
      name: 'Education',
      color: 'from-blue-500/20 to-indigo-600/20',
      borderColor: 'border-blue-500/30',
      accentColor: 'text-blue-400',
      story: 'An online university has 200,000 students across 40 countries. Course material exists in English. Students need it in their native language — but not tourist-phrase-book translation. Academic precision.',
      problem: 'A physics lecture translates "angular momentum" to Chinese as "角动量." Correct. But the explanation of conservation laws uses colloquial phrasing that confuses the concept. Students fail the exam — not because they don\'t understand physics, but because the translation dumbed it down.',
      solution: 'WindyTranslate Technical models preserve academic register. The Chinese translation reads like it was written by a Chinese physics professor, not run through a generic translator.',
      stakes: 'Education is the great equalizer — but only if the translation preserves the teaching, not just the words.',
      stat: '98.1% on academic content',
      statSub: 'Preserving register across 127 languages',
    },
    {
      icon: HiPhone,
      name: 'Call Centers',
      color: 'from-green-500/20 to-emerald-600/20',
      borderColor: 'border-green-500/30',
      accentColor: 'text-green-400',
      story: 'A global SaaS company routes 50,000 support calls per month. Agents speak English. Customers speak 30+ languages. Current solution: hire multilingual agents at 3x cost, or use generic real-time translation that makes agents sound robotic.',
      problem: 'The customer says "the app keeps crashing when I try to upload." Generic translation to Hindi loses the technical context — the agent thinks it\'s a connectivity issue, not an app bug. 15 minutes wasted. CSAT drops.',
      solution: 'WindyTranslate Technical + Conversational models handle code-switching (technical terms mixed with casual speech) naturally. The agent hears exactly what the customer means. First-call resolution jumps 34%.',
      stakes: 'Every misunderstood support call costs $12-40 in agent time. At 50K calls/month, even a 10% improvement saves $60K-200K annually.',
      stat: 'Sub-200ms real-time translation',
      statSub: 'Fast enough for live conversation',
    },
    {
      icon: HiOfficeBuilding,
      name: 'Government',
      color: 'from-purple-500/20 to-violet-600/20',
      borderColor: 'border-purple-500/30',
      accentColor: 'text-purple-400',
      story: 'A federal agency serves 330 million people who speak 350+ languages. Executive Order 13166 requires meaningful access to services for people with limited English proficiency. The agency needs translation that\'s accurate, auditable, and compliant.',
      problem: 'Cloud-based generic translation APIs raise data sovereignty concerns. Sending Social Security numbers through Google\'s API? Immigration case details through Amazon Translate? Legal and security teams say no.',
      solution: 'WindyTranslate on-premises deployment. Models run inside the agency\'s firewall. No data ever leaves their infrastructure. SOC 2 and FedRAMP-aligned. Every translation logged and auditable.',
      stakes: 'Government translation isn\'t optional — it\'s federally mandated. And it must be secure, accurate, and provably compliant.',
      stat: 'On-premises deployment available',
      statSub: 'Zero data leaves your infrastructure',
    },
  ];

  const v = verticals[activeStory];

  return (
    <section id="enterprise" className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Built for Industries Where{' '}
            <span className="gradient-text">"Close Enough" Isn't</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Healthcare. Legal. Education. Government. Call centers.{' '}
            <span className="text-white font-semibold">
              Industries where a bad translation isn't an inconvenience — it's a liability.
            </span>
          </p>
        </motion.div>

        {/* Vertical selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {verticals.map((vertical, index) => (
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeStory === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
              }`}
            >
              <vertical.icon size={18} />
              <span>{vertical.name}</span>
            </button>
          ))}
        </div>

        {/* Story Card */}
        <motion.div
          key={activeStory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`max-w-4xl mx-auto bg-gradient-to-br ${v.color} border ${v.borderColor} rounded-2xl p-8 md:p-10`}
        >
          {/* The story */}
          <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">"{v.story}"</p>

          {/* The problem */}
          <div className="mb-6">
            <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2">❌ The Problem</h4>
            <p className="text-gray-300 leading-relaxed">{v.problem}</p>
          </div>

          {/* The solution */}
          <div className="mb-6">
            <h4 className="text-green-400 font-bold text-sm uppercase tracking-wider mb-2">✓ WindyTranslate</h4>
            <p className="text-gray-200 leading-relaxed">{v.solution}</p>
          </div>

          {/* The stakes */}
          <div className="bg-gray-950/50 rounded-xl p-4 mb-6 border border-gray-800">
            <p className={`${v.accentColor} font-semibold text-sm`}>{v.stakes}</p>
          </div>

          {/* Stat */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <div className={`text-2xl font-extrabold ${v.accentColor}`}>{v.stat}</div>
              <div className="text-sm text-gray-500">{v.statSub}</div>
            </div>
            <a
              href="mailto:enterprise@windytranslate.com"
              className="mt-4 sm:mt-0 btn-primary flex items-center space-x-2 text-sm"
            >
              <span>Talk to Enterprise Sales</span>
              <HiArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* White-label + Enterprise features */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/20"
          >
            <h3 className="text-2xl font-bold mb-4">White-Label Deployment</h3>
            <p className="text-gray-400 text-sm mb-4">Your brand. Your domain. Our engine underneath.</p>
            <ul className="space-y-3 text-gray-400">
              {[
                'Your branding, your domain — "Powered by WindyTranslate" or completely invisible',
                'Dedicated model instances tuned to your terminology',
                'Custom model training on your proprietary data',
                'SLA guarantees: 99.9% uptime, sub-50ms p95 latency',
                'Revenue share or flat licensing — your choice',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
            <p className="text-gray-400 text-sm mb-4">Built for industries that don't compromise on data.</p>
            <ul className="space-y-3 text-gray-400">
              {[
                'On-premises deployment — zero data leaves your firewall',
                'SOC 2 Type II certified, HIPAA-compliant',
                'GDPR data residency controls (EU, US, APAC)',
                '24/7 support with 1-hour SLA and dedicated account team',
                'Audit logs for every translation — full compliance trail',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
