import { motion } from 'framer-motion';
import { HiCode, HiBookOpen, HiStatusOnline, HiNewspaper, HiTerminal } from 'react-icons/hi';
import { FaGithub, FaDiscord } from 'react-icons/fa';

export default function DevResources() {
  const resources = [
    {
      icon: HiCode,
      title: 'SDKs & Libraries',
      description: 'Official SDKs for Python, Node.js, Go, Ruby, PHP. Type-safe. Well-documented. Maintained weekly.',
      link: '#',
      linkText: 'Browse SDKs',
    },
    {
      icon: FaGithub,
      title: 'Open Source',
      description: 'Example integrations, starter templates, and community contributions. MIT licensed.',
      link: 'https://github.com/windytranslate',
      linkText: 'View on GitHub',
    },
    {
      icon: HiStatusOnline,
      title: 'API Status',
      description: 'Real-time uptime monitoring. 99.9% SLA. Automated incident reports. Status page you can trust.',
      link: '#',
      linkText: 'Check Status',
    },
    {
      icon: HiNewspaper,
      title: 'Changelog',
      description: 'New models, accuracy improvements, API updates. We ship every week.',
      link: '#',
      linkText: 'View Changelog',
    },
    {
      icon: HiBookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides, migration docs, and full API reference with runnable examples.',
      link: '#api',
      linkText: 'Read Docs',
    },
    {
      icon: FaDiscord,
      title: 'Developer Community',
      description: 'Join 3,500+ developers building with WindyTranslate. Get help, share integrations, request features.',
      link: '#',
      linkText: 'Join Discord',
    },
  ];

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Developer <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to integrate, debug, and scale. Built by developers, for developers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="card group hover:border-blue-500/40 cursor-pointer"
            >
              <resource.icon className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors" size={28} />
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{resource.description}</p>
              <span className="text-blue-400 text-sm font-semibold group-hover:underline">
                {resource.linkText} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
