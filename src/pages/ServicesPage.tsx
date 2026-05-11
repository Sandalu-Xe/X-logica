import { motion } from 'motion/react';
import { Check, ArrowRight, Globe, Layout, Bot, PenTool, Smartphone, Lightbulb } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import PageHero from '../components/PageHero';
import { containerVariants, itemVariants, EASE } from '../lib/animations';

// --- Data ---

const features = [
  'Real-time data visualization and analytics',
  'Seamless integration with your existing stack',
  'Advanced security and role-based access control',
  'Customizable dashboards and reporting tools',
  'Mobile-first responsive design for all devices',
];

const services = [
  { 
    icon: <Globe size={28} strokeWidth={1.5} />, 
    title: 'Premium Website Development', 
    description: 'Custom, high-performance websites built with modern technologies to elevate your digital presence and drive conversions.', 
    color: 'bg-[#f0f4f1] text-[#2d4a3e]', 
    tag: 'Web',
    blob: 'rounded-[24%_76%_35%_65%_/_53%_30%_70%_47%]',
    hover: 'group-hover:rotate-12'
  },
  { 
    icon: <Layout size={28} strokeWidth={1.5} />, 
    title: 'Web Application Development', 
    description: 'Scalable and secure web applications tailored to streamline your business operations and provide exceptional user experiences.', 
    color: 'bg-[#f9f3ef] text-[#5c3d2e]', 
    tag: 'Apps',
    blob: 'rounded-[65%_35%_76%_24%_/_47%_70%_30%_53%]',
    hover: 'group-hover:-rotate-12'
  },
  { 
    icon: <Bot size={28} strokeWidth={1.5} />, 
    title: 'AI Solutions & Chatbots', 
    description: 'Intelligent AI integrations and custom chatbots to automate workflows, enhance customer support, and unlock new insights.', 
    color: 'bg-[#edf2f7] text-[#1a365d]', 
    tag: 'AI',
    blob: 'rounded-[40%_60%_40%_60%_/_60%_40%_60%_40%]',
    hover: 'group-hover:scale-110'
  },
  { 
    icon: <PenTool size={28} strokeWidth={1.5} />, 
    title: 'UI/UX Design Services', 
    description: 'User-centric design solutions that combine beautiful aesthetics with intuitive navigation to delight your audience.', 
    color: 'bg-[#f5f3ff] text-[#7c3aed]', 
    tag: 'Design',
    blob: 'rounded-[30%_70%_70%_30%_/_50%_50%_50%_50%]',
    hover: 'group-hover:rotate-6'
  },
  { 
    icon: <Smartphone size={28} strokeWidth={1.5} />, 
    title: 'Mobile App Development', 
    description: 'Native and cross-platform mobile applications designed to perform seamlessly across iOS and Android devices.', 
    color: 'bg-[#f1f6f4] text-[#2c4a3e]', 
    tag: 'Mobile',
    blob: 'rounded-[50%_50%_30%_70%_/_70%_30%_50%_50%]',
    hover: 'group-hover:scale-110'
  },
  { 
    icon: <Lightbulb size={28} strokeWidth={1.5} />, 
    title: 'IT Consulting', 
    description: 'Expert strategic guidance to help you navigate digital transformation and optimize your technology infrastructure.', 
    color: 'bg-[#fff7ed] text-[#ea580c]', 
    tag: 'Consulting',
    blob: 'rounded-[70%_30%_50%_50%_/_50%_50%_70%_30%]',
    hover: 'group-hover:-rotate-6'
  },
];

// --- Page ---

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        badgeColor="violet"
        title={<>Powerful Tools for <span className="text-accent-blue">Modern</span> Teams</>}
        description="Explore our suite of premium software services designed to accelerate growth, enhance security, and streamline operations for forward-thinking enterprises."
      />

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-premium-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                whileHover={{ y: -8 }}
                className="group p-10 bg-white border border-gray-100 rounded-[32px] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-8">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.1,
                      rotate: service.hover.includes('-') ? -12 : 12 
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className={`w-16 h-16 flex items-center justify-center ${service.blob} ${service.color} shadow-lg shadow-black/5`}
                  >
                    {service.icon}
                  </motion.div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-accent-blue bg-accent-blue/5 px-3 py-1 rounded-full border border-accent-blue/10">{service.tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-premium-black mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-premium-black group-hover:text-accent-blue transition-colors">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Service Detail */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: EASE }}
              viewport={{ once: false, margin: '-100px' }}
            >
              <span className="text-3xl font-hand text-accent-blue mb-6 block">Featured Service</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-8 leading-tight">
                Xlogica - Nexus Dashboard: <br /> Insight at Your Fingertips
              </h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Our flagship service provides a unified platform for managing your entire digital ecosystem. Built with performance and security at its core, Nexus Dashboard helps you make data-driven decisions faster.
              </p>
              <ul className="space-y-4 mb-10">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
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
              <Magnetic strength={0.2}>
                <button className="bg-premium-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 group">
                  See it in Action <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: EASE }}
              viewport={{ once: false, margin: '-100px' }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent-blue/5 rounded-[40px] blur-3xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <img src="/images/dashboard-mockup.png" alt="Xlogica Insights Interface" className="w-full h-auto rounded-2xl" />
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
    </>
  );
}
