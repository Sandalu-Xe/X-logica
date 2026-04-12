import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { Code, Cloud, Cpu, Layout, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions built with modern technologies to solve your unique business challenges.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud Solutions',
    description: 'Scale with confidence using our cloud-native architecture and infrastructure management.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'AI & Machine Learning',
    description: 'Leverage the power of data with intelligent algorithms and predictive analytics.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Product Design & UX',
    description: 'Create delightful user experiences that drive engagement and customer loyalty.',
    color: 'bg-orange-50 text-orange-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ServiceCard({ service, index }: { service: any; index: number; key?: React.Key }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.06),
              transparent 80%
            )
          `,
        }}
      />
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative z-10 ${service.color}`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-premium-black mb-4 relative z-10">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
        {service.description}
      </p>
      <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-premium-black group-hover:text-accent-blue transition-colors relative z-10">
        Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-premium-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">Our Expertise</motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black">
              Comprehensive Solutions for <br /> Digital Transformation
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="text-gray-500 max-w-sm">
            We combine technical excellence with business strategy to deliver products that make a real impact.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
