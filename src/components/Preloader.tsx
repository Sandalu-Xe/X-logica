import { motion } from 'motion/react';
import Logo from './Logo';

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-premium-black"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <Logo light className="scale-150" />
        </motion.div>
        <div className="mt-4 w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-accent-blue"
          />
        </div>
      </div>
    </motion.div>
  );
}
