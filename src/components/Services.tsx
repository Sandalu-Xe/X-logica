import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { 
  OrganicGlobe, 
  OrganicBrowser, 
  OrganicRobot, 
  OrganicDesign, 
  OrganicMobile,
  HandDrawnFilter 
} from './HandDrawnIcons';

const services = [
  {
    icon: <OrganicGlobe className="w-8 h-8" />,
    title: 'Premium Website Development',
    description: 'Stunning, high-performance websites tailored to elevate your brand presence and drive conversions.',
    color: 'bg-white text-blue-600 border border-gray-100',
    blob: 'rounded-[24%_76%_35%_65%_/_53%_30%_70%_47%]',
    hover: 'group-hover:rotate-12'
  },
  {
    icon: <OrganicBrowser className="w-8 h-8" />,
    title: 'Web Application Development',
    description: 'Robust, scalable, and secure web applications built to streamline your business operations.',
    color: 'bg-white text-purple-600 border border-gray-100',
    blob: 'rounded-[65%_35%_76%_24%_/_47%_70%_30%_53%]',
    hover: 'group-hover:-rotate-12'
  },
  {
    icon: <OrganicRobot className="w-8 h-8" />,
    title: 'AI Solutions & Chatbots',
    description: 'Intelligent AI-driven products, including custom chatbots, to automate tasks and enhance customer experience.',
    color: 'bg-white text-green-600 border border-gray-100',
    blob: 'rounded-[40%_60%_40%_60%_/_60%_40%_60%_40%]',
    hover: 'group-hover:scale-110'
  },
  {
    icon: <OrganicDesign className="w-8 h-8" />,
    title: 'UI/UX Design Services',
    description: 'Intuitive and engaging user interfaces designed to provide seamless and memorable user experiences.',
    color: 'bg-white text-violet-600 border border-gray-100',
    blob: 'rounded-[30%_70%_70%_30%_/_50%_50%_50%_50%]',
    hover: 'group-hover:rotate-6'
  },
  {
    icon: <OrganicMobile className="w-8 h-8" />,
    title: 'Mobile App Development',
    description: 'High-performance, cross-platform mobile applications built seamlessly with Flutter and React Native.',
    color: 'bg-white text-teal-600 border border-gray-100',
    blob: 'rounded-[50%_50%_30%_70%_/_70%_30%_50%_50%]',
    hover: 'group-hover:scale-110'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
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
      className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] transition-all duration-700 relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-700 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 0, 0, 0.02),
              transparent 80%
            )
          `,
        } as any}
      />
      
      <motion.div 
        className={`w-16 h-16 flex items-center justify-center mb-10 relative z-10 transition-all duration-1000 ${service.blob} ${service.hover} ${service.color}`}
        style={{ 
          boxShadow: "inset 0 0 20px rgba(0,0,0,0.02)"
        } as React.CSSProperties}
      >
        {service.icon}
      </motion.div>

      <h3 className="text-2xl font-bold text-premium-black mb-4 relative z-10 group-hover:text-accent-sage transition-colors duration-500 font-serif">
        {service.title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed mb-10 relative z-10 font-sans font-normal">
        {service.description}
      </p>
      
      <Link to="/services" className="inline-flex items-center gap-3 text-sm font-bold text-premium-black group-hover:text-accent-sage transition-all relative z-10">
        <span className="underline underline-offset-8 decoration-gray-300 group-hover:decoration-accent-sage transition-colors">Explore Solution</span>
        <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-white relative bg-grain">
      <HandDrawnFilter />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10"
        >
          <div className="max-w-3xl">
            <motion.span variants={itemVariants} className="text-[10px] font-bold tracking-[0.3em] text-accent-sage uppercase mb-6 block opacity-60">Human-Centric Studio</motion.span>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-premium-black leading-[1.1] font-serif">
              Built by Humans, <br /> 
              <span className="text-accent-sage italic relative">
                for Humans.
              </span>
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="text-gray-500 max-w-sm text-xl leading-relaxed font-serif italic border-l border-gray-300 pl-8">
            "Software should feel like it was made by a person who cares about the details."
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
