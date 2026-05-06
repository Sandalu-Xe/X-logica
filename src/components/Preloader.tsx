import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';

const sloganPart1 = "Intelligent Solutions.";
const sloganPart2 = "Limitless Growth.";

const letterVariants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.3 + i * 0.02,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-premium-black"
    >
      {/* Subtle radial glow behind content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)',
        } as React.CSSProperties}
      />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <Logo light className="scale-150" />
        </motion.div>

        {/* Progress bar */}
        <div className="mt-4 w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-accent-blue"
          />
        </div>

        {/* Slogan */}
        <div className="mt-8 flex flex-col items-center gap-1">
          {/* "Intelligent Solutions." */}
          <div className="flex overflow-hidden">
            {sloganPart1.split('').map((char, i) => (
              <motion.span
                key={`p1-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-[13px] tracking-[0.3em] uppercase font-medium"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  display: 'inline-block',
                  whiteSpace: 'pre',
                } as React.CSSProperties}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* "Limitless Growth." with gradient */}
          <div className="flex overflow-hidden">
            {sloganPart2.split('').map((char, i) => (
              <motion.span
                key={`p2-${i}`}
                custom={sloganPart1.length + i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-[13px] tracking-[0.3em] uppercase font-bold"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  whiteSpace: 'pre',
                } as React.CSSProperties}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Subtle glow line under slogan */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 h-[1px] w-32"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(139,92,246,0.4), transparent)',
            } as React.CSSProperties}
          />
        </div>
      </div>
    </motion.div>
  );
}
