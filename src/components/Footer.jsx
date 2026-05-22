import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const windyBrands = [
    { name: 'Windy Word', url: 'https://windyword.ai' },
    { name: 'Windy Chat', url: 'https://windychat.ai' },
    { name: 'Windy Mail', url: 'https://windymail.ai' },
    { name: 'Windy Code', url: 'https://windycode.org' },
    { name: 'Windy Mind', url: 'https://windymind.ai' },
    { name: 'Windy Clone', url: 'https://windyclone.ai' },
    { name: 'Windy Fly', url: 'https://windyfly.ai' },
    { name: 'Windy Traveler', url: 'https://windytraveler.com' },
    { name: 'Windy Cloud', url: 'https://windycloud.com' },
    { name: 'Eternitas', url: 'https://eternitas.ai' },
  ];

  const developers = [
    { name: 'API Docs', url: '#api' },
    { name: 'Quick Start', url: '#quickstart' },
    { name: 'Model Catalog', url: '#models' },
    { name: 'GitHub', url: 'https://github.com/windytranslate' },
    { name: 'Status', url: '#' },
  ];

  const company = [
    { name: 'About', url: '#engine' },
    { name: 'Pricing', url: '#pricing' },
    { name: 'Enterprise', url: '#enterprise' },
    { name: 'Contact', url: 'mailto:hello@windytranslate.com' },
  ];

  const legal = [
    { name: 'Terms of Service', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Acceptable Use', url: '#' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Windy Brands */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Windy Ecosystem</h4>
            <ul className="space-y-2">
              {windyBrands.map((brand, index) => (
                <li key={index}>
                  <a
                    href={brand.url}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Developers</h4>
            <ul className="space-y-2">
              {developers.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-3">
              Get notified about new models and features.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-gray-500 text-sm">
              © {currentYear} WindyTranslate. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://github.com/windytranslate" className="text-gray-500 hover:text-blue-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:hello@windytranslate.com" className="text-gray-500 hover:text-blue-400 transition-colors">
              <HiMail size={22} />
            </a>
          </div>
        </div>

        {/* Powered by badge */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            Powering{' '}
            <span className="text-blue-400">WindyWord.ai</span> ·{' '}
            <span className="text-purple-400">WindyChat.ai</span> ·{' '}
            <span className="text-green-400">WindyTraveler.com</span> ·{' '}
            <span className="text-orange-400">WindyClone.ai</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
