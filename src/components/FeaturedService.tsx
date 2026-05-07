import { motion } from 'motion/react';
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
            <span className="text-xs font-bold tracking-widest text-accent-violet uppercase mb-6 block">Featured Product</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-8 leading-tight">
              Xlogica - Nexus Dashboard: <br /> Insight at Your Fingertips
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Our flagship product provides a unified platform for managing your entire digital ecosystem. 
              Built with performance and security at its core, Nexus Dashboard helps you make data-driven decisions faster.
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
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: false }}
              className="bg-premium-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 group"
            >
              See it in Action <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent-blue/5 rounded-[40px] blur-3xl -z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
              <img 
                src="/images/dashboard-mockup.png" 
                alt="Nexus Dashboard Interface" 
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
                className="absolute bottom-6 right-6 lg:-right-6 bg-white/95 backdrop-blur-lg p-5 md:p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60 min-w-[220px] md:min-w-[240px] z-10 hidden sm:block"
              >
                <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Total Revenue</div>
                <div className="text-3xl font-bold text-premium-black mb-4">$1,240,500</div>
                <div className="flex items-center gap-2 text-sm text-green-600 font-bold bg-green-50 w-fit px-3 py-1 rounded-full">
                  <ArrowRight size={14} className="-rotate-45" /> +15.4% this month
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
