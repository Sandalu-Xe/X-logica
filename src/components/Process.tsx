import { motion } from 'motion/react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Discovery',
    description: 'We dive deep into your business goals, user needs, and market landscape to define the perfect strategy.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Design',
    description: 'Our designers craft intuitive, high-fidelity interfaces that prioritize user experience and brand identity.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Development',
    description: 'Using agile methodologies, our engineers build robust, scalable code that brings your vision to life.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Launch',
    description: 'We ensure a smooth deployment and provide ongoing support to help your product grow and evolve.',
    color: 'bg-orange-50 text-orange-600',
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Process() {
  return (
    <section id="about" className="py-24 md:py-32 bg-premium-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">How We Work</motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-6">
            Our Proven Process for Success
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We follow a structured, collaborative approach to ensure every project is delivered on time, 
            within budget, and beyond expectations.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 relative z-10 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-black/5 ${step.color}`}>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border border-gray-100 flex items-center justify-center text-sm font-bold text-premium-black shadow-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-premium-black mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
