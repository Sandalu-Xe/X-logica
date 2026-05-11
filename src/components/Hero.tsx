import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import { useMobile } from '../hooks/useMobile';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.08,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const Scribble = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 100 20"
    className={`absolute pointer-events-none ${className}`}
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 0.3 }}
    transition={{ duration: 1.5, delay: 1 }}
  >
    <motion.path
      d="M5,15 Q25,5 45,15 T85,15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </motion.svg>
);

export default function Hero() {
  const headline = "Human-Centric Software & AI Solutions";
  const words = headline.split(" ");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isMobile = useMobile();

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative inline-block">
            <motion.h1
              className="text-4xl md:text-8xl font-bold tracking-tight text-premium-black mb-8 leading-[1.05]"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-[0.2em] ${word === "AI" ? "text-[#5D4037]" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <Scribble className="bottom-0 left-1/4 w-1/2 text-[#5D4037]" />
            <motion.div
              initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
              whileInView={{ opacity: 0.8, rotate: -12, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute -top-6 -right-10 md:-top-8 md:-right-16 font-hand text-lg md:text-3xl text-black hidden sm:block"
            >
              Designed for Business
            </motion.div>
          </div>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            We blend technical precision with a human touch to build websites, web applications, and AI solutions that feel as natural as they are powerful.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Magnetic strength={0.1}>
              <button className="w-full sm:w-auto bg-[#2C3E2C] text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#1A261A] transition-all active:scale-95 group shadow-xl shadow-black/5">
                Start a Conversation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnetic>
            <Magnetic strength={0.1}>
              <Link to="/projects" className="w-full sm:w-auto bg-white text-[#2C3E2C] border border-[#2C3E2C]/10 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-95">
                View Our Work
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
