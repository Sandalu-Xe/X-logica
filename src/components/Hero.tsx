import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import Magnetic from './Magnetic';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const headline = "We Build Software That Scales Your Business";
  const words = headline.split(" ");
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-blue/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-violet/5 rounded-full blur-[120px]" 
        />
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
            Next-Gen Software Development
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight text-premium-black mb-8 leading-[1.1]"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block mr-[0.2em] ${word === "Scales" ? "text-accent-blue" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            X-LOGICA empowers forward-thinking companies with premium custom software, 
            cloud-native solutions, and AI-driven products that drive real growth.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Magnetic strength={0.2}>
              <button className="w-full sm:w-auto bg-premium-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 group shadow-lg shadow-black/10">
                Get Started Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <button className="w-full sm:w-auto bg-white text-premium-black border border-gray-200 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all active:scale-95">
                <Play size={20} fill="currentColor" /> View Showcase
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Hero Image / Dashboard Mockup with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="mt-20 relative perspective-1000"
        >
          <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white"
               style={{ transform: "translateZ(50px)" }}>
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <img 
              src="https://picsum.photos/seed/dashboard/1200/800" 
              alt="X-LOGICA Dashboard" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Elements with higher translateZ */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "translateZ(100px)" }}
            className="absolute -top-10 -right-10 hidden lg:block bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ArrowRight size={20} className="-rotate-45" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">Growth</div>
                <div className="text-lg font-bold text-premium-black">+124%</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ transform: "translateZ(100px)" }}
            className="absolute -bottom-10 -left-10 hidden lg:block bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <div className="w-5 h-5 bg-accent-blue rounded-sm rotate-45" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">Active Users</div>
                <div className="text-lg font-bold text-premium-black">12.5k</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
