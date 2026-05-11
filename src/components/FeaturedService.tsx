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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <span className="text-3xl font-hand text-accent-blue mb-6 block">Featured Service</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-8 leading-tight">
              Xlogica - Nexus Insights: <br /> Expert Digital Solutions
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Our flagship service provides a unified platform for managing your entire digital ecosystem.
              Built with performance and strategy at its core, Nexus Insights helps you make data-driven decisions faster.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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

            <Link
              to="/solutions"
              className="bg-premium-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 group w-fit"
            >
              See it in Action <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-[#E5E7E0]/30 rounded-[60px] blur-3xl -z-10" />
            <div className="relative rounded-[40px] overflow-hidden border border-[#2C3E2C]/5 bg-white p-4 md:p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
              <img
                src="/images/featured-illustration.png"
                alt="Human-Centric Data Interface"
                className="w-full h-auto rounded-[32px] pointer-events-none select-none"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
                className="absolute bottom-6 right-6 lg:-right-6 bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-[#2C3E2C]/5 min-w-[240px] z-10 hidden sm:block"
                style={{ borderRadius: "24px 8px 24px 8px" } as React.CSSProperties}
              >
                <div className="text-xl font-hand text-[#2C3E2C]/80 mb-1">Platform Growth</div>
                <div className="text-3xl font-bold text-premium-black mb-4">$1.2M+</div>
                <div className="flex items-center gap-2 text-xs text-[#2C3E2C] font-bold bg-[#E5E7E0] w-fit px-3 py-1 rounded-full">
                  +15.4% <span className="opacity-50">this month</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
