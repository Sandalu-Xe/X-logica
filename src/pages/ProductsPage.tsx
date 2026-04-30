import { motion } from 'motion/react';
import { Check, ArrowRight, Layers, Shield, Zap, BarChart3 } from 'lucide-react';
import Magnetic from '../components/Magnetic';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const features = [
  'Real-time data visualization and analytics',
  'Seamless integration with your existing stack',
  'Advanced security and role-based access control',
  'Customizable dashboards and reporting tools',
  'Mobile-first responsive design for all devices',
];

const products = [
  {
    icon: <Layers className="w-7 h-7" />,
    title: 'Nexus Dashboard',
    description: 'A unified platform for managing your entire digital ecosystem with real-time analytics and powerful reporting.',
    color: 'bg-blue-50 text-blue-600',
    tag: 'Flagship',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'SecureVault',
    description: 'Enterprise-grade security management with advanced threat detection and compliance monitoring.',
    color: 'bg-green-50 text-green-600',
    tag: 'Security',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'FlowEngine',
    description: 'Intelligent workflow automation platform that streamlines operations and eliminates bottlenecks.',
    color: 'bg-purple-50 text-purple-600',
    tag: 'Automation',
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'InsightPro',
    description: 'AI-powered business intelligence tool that transforms raw data into actionable growth strategies.',
    color: 'bg-orange-50 text-orange-600',
    tag: 'Analytics',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-accent-violet/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] bg-accent-blue/5 rounded-full blur-[120px]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent-violet uppercase bg-accent-violet/5 rounded-full border border-accent-violet/10"
            >
              Our Products
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-premium-black mb-8 leading-[1.1]"
            >
              Powerful Tools for{' '}
              <span className="text-accent-blue">Modern</span> Teams
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl"
            >
              Explore our suite of premium software products designed to accelerate growth,
              enhance security, and streamline operations for forward-thinking enterprises.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 md:py-32 bg-premium-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${product.color}`}>
                    {product.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-accent-blue bg-accent-blue/5 px-3 py-1 rounded-full border border-accent-blue/10">
                    {product.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-premium-black mb-4">{product.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">{product.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-premium-black group-hover:text-accent-blue transition-colors">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Product Detail */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-xs font-bold tracking-widest text-accent-violet uppercase mb-6 block">Featured Product</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-8 leading-tight">
                Nexus Dashboard: <br /> Insight at Your Fingertips
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
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <Magnetic strength={0.2}>
                <button className="bg-premium-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 group">
                  See it in Action <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent-blue/5 rounded-[40px] blur-3xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <img
                  src="https://picsum.photos/seed/product/1000/1200"
                  alt="Nexus Dashboard Interface"
                  className="w-full h-auto rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[240px] hidden md:block"
                >
                  <div className="text-sm font-bold text-premium-black mb-2">Total Revenue</div>
                  <div className="text-2xl font-bold text-accent-blue mb-4">$1,240,500</div>
                  <div className="flex items-center gap-2 text-xs text-green-600 font-bold">
                    <ArrowRight size={14} className="-rotate-45" /> +15.4% this month
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
