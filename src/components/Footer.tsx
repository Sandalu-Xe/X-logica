import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const footerLinks = {
  Company: [
    { name: 'About Us', to: '/about' },
    { name: 'Careers', to: '/careers' },
    { name: 'Our Works', to: '/blog' },
    { name: 'Press', to: '/blog' },
  ],
  Services: [
    { name: 'Premium Websites', to: '/solutions' },
    { name: 'Web Applications', to: '/solutions' },
    { name: 'AI & Chatbots', to: '/solutions' },
    { name: 'UI/UX Design', to: '/solutions' },
  ],
  Support: [
    { name: 'Help Center', to: '/about' },
    { name: 'Contact Us', to: '/careers' },
    { name: 'Privacy Policy', to: '/' },
    { name: 'Terms of Service', to: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-premium-black text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20"
        >
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <Logo light />
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-10">
              Empowering businesses with premium website development, web applications, UI/UX design, and AI solutions like custom chatbots.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-8">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {link.name}
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Xlogica Software & AI Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
