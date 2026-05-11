import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const features = [
  'Real-time data visualization and analytics',
  'Seamless integration with your existing stack',
  'Advanced security and role-based access control',
  'Customizable dashboards and reporting tools',
  'Mobile-first responsive design for all devices',
];

export default function FeaturedProduct() {
  return (
    <section id="products" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center"
          >
            <span className="text-3xl font-hand text-accent-blue mb-6 block">Featured Service</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-8 leading-tight">
              Xlogica - Nexus Insights: <br /> Expert Digital Solutions
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed mx-auto max-w-2xl">
              Our flagship service provides a unified platform for managing your entire digital ecosystem.
              Built with performance and strategy at its core, Nexus Insights helps you make data-driven decisions faster.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: false }}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="flex justify-center">
              <Link
                to="/solutions"
                className="bg-premium-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 group w-fit"
              >
                See it in Action <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
