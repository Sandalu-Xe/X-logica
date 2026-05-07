import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { Globe, Code, Cpu, Layout, ArrowRight } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';
import PageHero from '../components/PageHero';
import { processSteps } from '../data/process';
import { containerVariants, itemVariants } from '../lib/animations';

// --- Data ---

const services = [
  { icon: <Globe className="w-6 h-6" />, title: 'Premium Website Development', description: 'Stunning, high-performance websites tailored to elevate your brand presence and drive conversions.', color: 'bg-blue-50 text-blue-600' },
  { icon: <Code className="w-6 h-6" />, title: 'Web Application Development', description: 'Robust, scalable, and secure web applications built to streamline your business operations.', color: 'bg-purple-50 text-purple-600' },
  { icon: <Cpu className="w-6 h-6" />, title: 'AI Solutions & Chatbots', description: 'Intelligent AI-driven products, including custom chatbots, to automate tasks and enhance customer experience.', color: 'bg-green-50 text-green-600' },
  { icon: <Layout className="w-6 h-6" />, title: 'UI/UX Design Services', description: 'Intuitive and engaging user interfaces designed to provide seamless and memorable user experiences.', color: 'bg-orange-50 text-orange-600' },
  { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile App Development', description: 'High-performance, cross-platform mobile applications built seamlessly with Flutter and React Native.', color: 'bg-teal-50 text-teal-600' },
];

// --- Sub-component ---

function ServiceCard({ service }: { service: typeof services[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useMobile();

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
    >
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.06), transparent 80%)`,
          } as any}
        />
      )}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative z-10 ${service.color}`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-premium-black mb-4 relative z-10">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">{service.description}</p>
      <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-premium-black group-hover:text-accent-blue transition-colors relative z-10">
        Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}

// --- Page ---

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Our Solutions"
        title={<>Comprehensive <span className="text-accent-blue">Solutions</span> for Digital Transformation</>}
        description="We combine technical excellence with business strategy to deliver products that make a real impact on your bottom line."
        blobs={[
          { position: 'top-[-10%] left-[-10%] w-[40%] h-[40%]', color: 'bg-accent-blue/5' },
          { position: 'bottom-[-10%] right-[-10%] w-[40%] h-[40%]', color: 'bg-accent-violet/5' },
        ]}
      />

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-premium-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">Our Expertise</motion.span>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight text-premium-black">What We Do Best</motion.h2>
            </div>
            <motion.p variants={itemVariants} className="text-gray-500 max-w-sm">Each solution is crafted with precision, leveraging the latest technologies and industry best practices.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => <ServiceCard key={i} service={service} />)}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants} className="text-center mb-20">
            <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">How We Work</motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight text-premium-black mb-6">Our Proven Process for Success</motion.h2>
            <motion.p variants={itemVariants} className="text-gray-500 max-w-2xl mx-auto leading-relaxed">We follow a structured, collaborative approach to ensure every project is delivered on time, within budget, and beyond expectations.</motion.p>
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
