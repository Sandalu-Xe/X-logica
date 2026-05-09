import { motion } from 'motion/react';
import { 
  HandDrawnDiscovery, 
  HandDrawnDesign, 
  HandDrawnDev, 
  HandDrawnLaunch 
} from './HandDrawnIcons';

const steps = [
  {
    icon: <HandDrawnDiscovery className="w-10 h-10" />,
    title: 'Discovery',
    description: 'We dive deep into your business goals, user needs, and market landscape to define the perfect strategy.',
    color: 'bg-[#F2F4F1] text-[#2C3E2C]', // Realistic Sage
  },
  {
    icon: <HandDrawnDesign className="w-10 h-10" />,
    title: 'Design',
    description: 'Our designers craft intuitive, high-fidelity interfaces that prioritize user experience and brand identity.',
    color: 'bg-[#F9F4FA] text-[#4A148C]', // Realistic Soft Purple
  },
  {
    icon: <HandDrawnDev className="w-10 h-10" />,
    title: 'Development',
    description: 'Using agile methodologies, our engineers build robust, scalable code that brings your vision to life.',
    color: 'bg-[#EDF7F6] text-[#004D40]', // Realistic Soft Teal
  },
  {
    icon: <HandDrawnLaunch className="w-10 h-10" />,
    title: 'Launch',
    description: 'We ensure a smooth deployment and provide ongoing support to help your product grow and evolve.',
    color: 'bg-[#F8F2ED] text-[#5D4037]', // Realistic Terracotta
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Process() {
  return (
    <section id="about" className="py-24 md:py-32 bg-premium-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-24"
        >
          <motion.span variants={itemVariants} className="text-[10px] font-bold tracking-[0.3em] text-accent-blue uppercase mb-4 block opacity-60">Human-Centric Strategy</motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight text-premium-black mb-8">
            Our Proven Process for Success
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            We follow a structured, collaborative approach to ensure every project is delivered on time, 
            within budget, and beyond expectations.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[40px] left-0 right-0 h-0.5 bg-gray-100 hidden lg:block -z-10 opacity-50" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-10">
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -3, 3, 0],
                  }}
                  className={`w-20 h-20 flex items-center justify-center relative z-10 transition-all duration-1000 ${step.color}`}
                  style={{ 
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.02)"
                  } as React.CSSProperties}
                >
                  {step.icon}
                </motion.div>
                
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full border border-gray-100 flex items-center justify-center text-xs font-bold text-premium-black shadow-lg z-20">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-premium-black mb-4 group-hover:text-accent-blue transition-colors duration-500">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
