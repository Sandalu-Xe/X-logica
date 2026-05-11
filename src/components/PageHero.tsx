import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../lib/animations';

interface PageHeroProps {
  badge: string;
  badgeColor?: 'blue' | 'violet';
  title: React.ReactNode;
  description: string;
  centered?: boolean;
  blobs?: Array<{ position: string; color: string }>;
  image?: string;
}

const defaultBlobs: Array<{ position: string; color: string }> = [];

export default function PageHero({
  badge,
  badgeColor = 'blue',
  title,
  description,
  centered = false,
  blobs = defaultBlobs,
  image,
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
        <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-2' : ''} gap-16 items-center`}>
          <motion.div
            className={`${centered && !image ? 'mx-auto text-center max-w-3xl' : 'max-w-3xl'}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className={`block mb-4 text-3xl font-hand ${badgeColor === 'violet' ? 'text-accent-violet' : 'text-accent-blue'}`}
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
              className={`text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl ${centered && !image ? 'mx-auto' : ''}`}
            >
              {description}
            </motion.p>
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative rounded-[48px] overflow-hidden border border-gray-100 shadow-2xl shadow-black/5"
            >
              <img src={image} alt="Hero Illustration" className="w-full h-auto select-none pointer-events-none" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
