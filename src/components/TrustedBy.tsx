import { motion } from 'motion/react';

const logos = [
  { name: 'Acme Corp', src: 'https://picsum.photos/seed/acme/200/80?grayscale' },
  { name: 'Global Tech', src: 'https://picsum.photos/seed/global/200/80?grayscale' },
  { name: 'Nexus AI', src: 'https://picsum.photos/seed/nexusai/200/80?grayscale' },
  { name: 'Vortex', src: 'https://picsum.photos/seed/vortex/200/80?grayscale' },
  { name: 'Lumina', src: 'https://picsum.photos/seed/lumina/200/80?grayscale' },
  { name: 'Horizon', src: 'https://picsum.photos/seed/horizon/200/80?grayscale' },
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm font-bold tracking-widest text-gray-400 uppercase mb-12"
        >
          Trusted by leading companies worldwide
        </motion.p>
        
        <div className="flex overflow-hidden relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap will-change-transform"
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity grayscale"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
