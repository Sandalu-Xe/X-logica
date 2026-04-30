import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Search, PenTool, Code, Rocket, Quote, Target, Eye, Heart } from 'lucide-react';

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

const values = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'Mission',
    description: 'To empower businesses worldwide with intelligent, scalable software solutions that drive measurable growth and innovation.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: 'Vision',
    description: 'To be the global standard for premium software development, setting benchmarks in quality, reliability, and client satisfaction.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Values',
    description: 'We believe in transparency, continuous innovation, and building lasting partnerships with our clients through excellence.',
    color: 'bg-green-50 text-green-600',
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

const stats = [
  { label: 'Projects Completed', value: 500, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
  { label: 'Team Members', value: 50, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
];

const testimonials = [
  {
    quote: "Nexus transformed our legacy systems into a modern, cloud-native powerhouse. Their attention to detail and technical expertise is unmatched.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "Acme Global",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "The product design team at Nexus is world-class. They didn't just build what we asked for—they built what our users actually needed.",
    author: "Michael Chen",
    role: "Product Director",
    company: "Vortex Tech",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    quote: "Working with Nexus was a seamless experience. They delivered our AI-driven analytics platform ahead of schedule and under budget.",
    author: "Elena Rodriguez",
    role: "CEO",
    company: "Lumina AI",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black">
      {count}{suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[50%] h-[50%] bg-accent-blue/5 rounded-full blur-[120px]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent-blue uppercase bg-accent-blue/5 rounded-full border border-accent-blue/10"
            >
              About X-LOGICA
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-premium-black mb-8 leading-[1.1]"
            >
              Building the{' '}
              <span className="text-accent-blue">Future</span> of Software
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
            >
              We're a team of passionate engineers, designers, and strategists dedicated to crafting
              exceptional software solutions that help businesses thrive in the digital age.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 md:py-32 bg-premium-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((val, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${val.color} group-hover:scale-110 transition-transform duration-300`}>
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold text-premium-black mb-4">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed">{val.description}</p>
              </motion.div>
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
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-24 bg-premium-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mt-4">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">Testimonials</motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-6">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We've helped hundreds of companies scale their digital presence and achieve their business goals.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-10 bg-premium-white border border-gray-100 rounded-3xl relative group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-accent-blue/10 group-hover:text-accent-blue/20 transition-colors" />
                <p className="text-lg text-gray-700 italic leading-relaxed mb-10 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-premium-black">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
