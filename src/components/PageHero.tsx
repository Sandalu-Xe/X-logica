import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../lib/animations';

interface PageHeroProps {
  badge: string;
  badgeColor?: 'blue' | 'violet';
  title: React.ReactNode;
  description: string;
  centered?: boolean;
  blobs?: Array<{ position: string; color: string }>;
}

const defaultBlobs: Array<{ position: string; color: string }> = [];

export default function PageHero({
  badge,
  badgeColor = 'blue',
  title,
  description,
  centered = false,
  blobs = defaultBlobs,
}: PageHeroProps) {
  const badgeClass = badgeColor === 'violet'
    ? 'text-accent-violet bg-accent-violet/5 border-accent-violet/10'
    : 'text-accent-blue bg-accent-blue/5 border-accent-blue/10';

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        {blobs.map((blob, i) => (
          <div key={i} className={`absolute ${blob.position} ${blob.color} rounded-full blur-[120px]`} />
        ))}

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className={`block mb-4 text-3xl font-hand ${badgeColor === 'blue' ? 'text-accent-blue' : 'text-accent-blue'}`}
          >
            {badge}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-7xl font-bold tracking-tight text-premium-black mb-8 leading-[1.1]"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
