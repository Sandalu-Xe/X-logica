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
    color: 'bg-white text-blue-600 border border-gray-100', 
    tag: 'Web',
    blob: 'rounded-[24%_76%_35%_65%_/_53%_30%_70%_47%]',
    hover: 'group-hover:rotate-12'
  },
  { 
    icon: <Layout size={28} strokeWidth={1.5} />, 
    title: 'Web Application Development', 
    description: 'Scalable and secure web applications tailored to streamline your business operations and provide exceptional user experiences.', 
    color: 'bg-white text-purple-600 border border-gray-100', 
    tag: 'Apps',
    blob: 'rounded-[65%_35%_76%_24%_/_47%_70%_30%_53%]',
    hover: 'group-hover:-rotate-12'
  },
  { 
    icon: <Bot size={28} strokeWidth={1.5} />, 
    title: 'AI Solutions & Chatbots', 
    description: 'Intelligent AI integrations and custom chatbots to automate workflows, enhance customer support, and unlock new insights.', 
    color: 'bg-white text-green-600 border border-gray-100', 
    tag: 'AI',
    blob: 'rounded-[40%_60%_40%_60%_/_60%_40%_60%_40%]',
    hover: 'group-hover:scale-110'
  },
  { 
    icon: <PenTool size={28} strokeWidth={1.5} />, 
    title: 'UI/UX Design Services', 
    description: 'User-centric design solutions that combine beautiful aesthetics with intuitive navigation to delight your audience.', 
    color: 'bg-white text-violet-600 border border-gray-100', 
    tag: 'Design',
    blob: 'rounded-[30%_70%_70%_30%_/_50%_50%_50%_50%]',
    hover: 'group-hover:rotate-6'
  },
  { 
    icon: <Smartphone size={28} strokeWidth={1.5} />, 
    title: 'Mobile App Development', 
    description: 'Native and cross-platform mobile applications designed to perform seamlessly across iOS and Android devices.', 
    color: 'bg-white text-teal-600 border border-gray-100', 
    tag: 'Mobile',
    blob: 'rounded-[50%_50%_30%_70%_/_70%_30%_50%_50%]',
    hover: 'group-hover:scale-110'
  },
  { 
    icon: <Lightbulb size={28} strokeWidth={1.5} />, 
    title: 'IT Consulting', 
    description: 'Expert strategic guidance to help you navigate digital transformation and optimize your technology infrastructure.', 
    color: 'bg-white text-orange-600 border border-gray-100', 
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
      <section className="py-24 md:py-32 bg-white">
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

      {/* Featured Service Detail section removed */}
    </>
  );
}
