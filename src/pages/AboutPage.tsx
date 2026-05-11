import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import PageHero from '../components/PageHero';
import { processSteps } from '../data/process';
import { containerVariants, itemVariants, EASE } from '../lib/animations';

// --- Data ---

const values = [
  {
    icon: <Target size={28} strokeWidth={1.5} />,
    title: 'Mission',
    description: 'To empower businesses worldwide with intelligent, scalable web and AI solutions that drive measurable growth and innovation.',
    bgColor: 'bg-white border border-gray-100',
    textColor: 'text-[#1a365d]',
    blobClass: 'rounded-[40%_60%_40%_60%_/_60%_40%_60%_40%]',
    hoverClass: 'group-hover:scale-110',
  },
  {
    icon: <Eye size={28} strokeWidth={1.5} />,
    title: 'Vision',
    description: 'To be the global standard for premium website development, web applications, and AI solutions, setting benchmarks in quality, reliability, and client satisfaction.',
    bgColor: 'bg-white border border-gray-100',
    textColor: 'text-[#5c3d2e]',
    blobClass: 'rounded-[65%_35%_76%_24%_/_47%_70%_30%_53%]',
    hoverClass: 'group-hover:-rotate-12',
  },
  {
    icon: <Heart size={28} strokeWidth={1.5} />,
    title: 'Values',
    description: 'We believe in transparency, continuous innovation, and building lasting partnerships with our clients through excellence.',
    bgColor: 'bg-white border border-gray-100',
    textColor: 'text-[#2d4a3e]',
    blobClass: 'rounded-[24%_76%_35%_65%_/_53%_30%_70%_47%]',
    hoverClass: 'group-hover:rotate-12',
  },
];

const stats = [
  { label: 'Projects Completed', value: 500, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
  { label: 'Team Members', value: 50, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
];

// --- Sub-components ---

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const increment = value / (2000 / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black">
      {count}{suffix}
    </span>
  );
}

// --- Page ---

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Xlogica"
        centered
        title={<>Building the <span className="text-accent-blue">Future</span> of Web & AI Solutions</>}
        description="We're a team of passionate engineers, designers, and strategists dedicated to crafting exceptional web, UI/UX, and AI solutions that help businesses thrive in the digital age."
      />

      {/* Brand Illustration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
            viewport={{ once: false }}
            className="relative rounded-[48px] overflow-hidden border border-gray-100 shadow-2xl shadow-black/5"
          >
            <img 
              src="/images/about-illustration.png" 
              alt="Team Collaboration Illustration" 
              className="w-full h-auto rounded-[32px] pointer-events-none select-none"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: '-100px' }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div key={i} variants={itemVariants} className="p-10 bg-white border border-gray-100 rounded-[32px] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group">
                <div className={`w-16 h-16 flex items-center justify-center mb-8 ${val.bgColor} ${val.textColor} ${val.blobClass} ${val.hoverClass} transition-transform duration-500`}>
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: '-100px' }} variants={containerVariants} className="text-center mb-20">
            <motion.span variants={itemVariants} className="text-3xl font-hand text-accent-blue mb-4 block">How We Work</motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-6">Our Proven Process for Success</motion.h2>
            <motion.p variants={itemVariants} className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We follow a structured, collaborative approach to ensure every project is delivered on time, within budget, and beyond expectations.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: '-100px' }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block -z-10" />
            {processSteps.map((step, i) => {
              const blobClasses = [
                'rounded-[40%_60%_40%_60%_/_60%_40%_60%_40%]',
                'rounded-[65%_35%_76%_24%_/_47%_70%_30%_53%]',
                'rounded-[24%_76%_35%_65%_/_53%_30%_70%_47%]',
                'rounded-[45%_55%_70%_30%_/_30%_70%_45%_55%]'
              ];
              const hovers = [
                'group-hover:scale-110',
                'group-hover:-rotate-12',
                'group-hover:rotate-12',
                'group-hover:scale-110'
              ];

              return (
                <motion.div key={i} variants={itemVariants} className="flex flex-col items-center text-center group">
                  <div className={`w-20 h-20 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 ${blobClasses[i]} ${hovers[i]} shadow-lg shadow-black/5 ${step.color}`}>
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border border-gray-100 flex items-center justify-center text-sm font-bold text-premium-black shadow-sm">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-premium-black mb-4">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                viewport={{ once: false }}
                className="flex flex-col items-center text-center"
              >
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mt-4">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
