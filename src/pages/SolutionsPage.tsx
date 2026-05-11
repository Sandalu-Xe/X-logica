import { motion } from 'motion/react';
import { Globe, Code, Cpu, Layout, Smartphone, ArrowRight, Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import { processSteps } from '../data/process';
import { containerVariants, itemVariants, EASE } from '../lib/animations';

const services = [
  { icon: <Globe size={28} strokeWidth={1.5} />, title: 'Premium Website Development', description: 'Stunning, high-performance websites tailored to elevate your brand presence and drive conversions.', color: 'bg-white text-blue-600 border border-gray-100' },
  { icon: <Code size={28} strokeWidth={1.5} />, title: 'Web Application Development', description: 'Robust, scalable, and secure web applications built to streamline your business operations.', color: 'bg-white text-purple-600 border border-gray-100' },
  { icon: <Cpu size={28} strokeWidth={1.5} />, title: 'AI Solutions & Chatbots', description: 'Intelligent AI-driven products, including custom chatbots, to automate tasks and enhance customer experience.', color: 'bg-white text-green-600 border border-gray-100' },
  { icon: <Layout size={28} strokeWidth={1.5} />, title: 'UI/UX Design Services', description: 'Intuitive and engaging user interfaces designed to provide seamless and memorable user experiences.', color: 'bg-white text-orange-600 border border-gray-100' },
  { icon: <Smartphone size={28} strokeWidth={1.5} />, title: 'Mobile App Development', description: 'High-performance, cross-platform mobile applications built seamlessly with modern technologies.', color: 'bg-white text-teal-600 border border-gray-100' },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Our Solutions"
        title={<>Comprehensive <span className="text-accent-blue">Solutions</span> for Digital Transformation</>}
        description="We combine technical excellence with business strategy to deliver products that make a real impact on your bottom line."
      />

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }} 
            variants={containerVariants} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-10 bg-white border border-gray-100 rounded-[32px] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-premium-black mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-premium-black group-hover:text-accent-blue transition-colors cursor-pointer">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants} className="text-center mb-20">
            <span className="text-3xl font-hand text-accent-blue mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-6">How We Work</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">We follow a structured, collaborative approach to ensure success.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block -z-10" />
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 relative z-10 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-black/5 ${step.color}`}>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border border-gray-100 flex items-center justify-center text-sm font-bold text-premium-black shadow-sm">{i + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-premium-black mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
