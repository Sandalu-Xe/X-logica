import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { Code, Cloud, Cpu, Layout, ArrowRight, Search, PenTool, Rocket } from 'lucide-react';

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

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions built with modern technologies to solve your unique business challenges. From MVPs to enterprise platforms.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud Solutions',
    description: 'Scale with confidence using our cloud-native architecture, infrastructure management, and migration services.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'AI & Machine Learning',
    description: 'Leverage the power of data with intelligent algorithms, predictive analytics, and natural language processing.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Product Design & UX',
    description: 'Create delightful user experiences that drive engagement, customer loyalty, and lasting brand impressions.',
    color: 'bg-orange-50 text-orange-600',
  },
];

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

function ServiceCard({ service }: { service: typeof services[0] }) {
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
        } as any}
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

export default function SolutionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-blue/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-violet/5 rounded-full blur-[120px]" />
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
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent-blue uppercase bg-accent-blue/5 rounded-full border border-accent-blue/10"
            >
              Our Solutions
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-premium-black mb-8 leading-[1.1]"
            >
              Comprehensive{' '}
              <span className="text-accent-blue">Solutions</span> for Digital Transformation
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl"
            >
              We combine technical excellence with business strategy to deliver products
              that make a real impact on your bottom line.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-premium-white">
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
                What We Do Best
              </motion.h2>
            </div>
            <motion.p variants={itemVariants} className="text-gray-500 max-w-sm">
              Each solution is crafted with precision, leveraging the latest technologies and industry best practices.
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
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-white">
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
    </>
  );
}
