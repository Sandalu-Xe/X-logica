import React from 'react';
import { motion } from 'motion/react';

interface IconProps {
  className?: string;
  color?: string;
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.2 + i * 0.2;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring" as const, duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const wiggle = {
  animate: {
    x: [0, 0.5, -0.5, 0],
    y: [0, -0.5, 0.5, 0],
    rotate: [0, 0.5, -0.5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export const HandDrawnFilter = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <filter id="pencilTexture">
      <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.2" result="blur" />
      <feComposite in="blur" in2="SourceGraphic" operator="over" />
    </filter>
  </svg>
);

export const OrganicGlobe = ({ className = "w-6 h-6" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    {/* Wobbly Circle */}
    <motion.path 
      d="M12,3 C17,3 21,7 21,12 C21,17 17,21 12,21 C7,21 3,17 3,12 C3,7 7,3 12,3 Z" 
      variants={draw} custom={1}
    />
    <motion.path 
      d="M3.5,9.5 C8,8.5 16,8.5 20.5,9.5" 
      variants={draw} custom={2}
    />
    <motion.path 
      d="M3.5,14.5 C8,15.5 16,15.5 20.5,14.5" 
      variants={draw} custom={3}
    />
    <motion.path 
      d="M11.5,3.5 C9.5,8 9.5,16 11.5,20.5" 
      variants={draw} custom={4}
    />
    <motion.path 
      d="M12.5,3.5 C14.5,8 14.5,16 12.5,20.5" 
      variants={draw} custom={5}
    />
  </motion.svg>
);

export const OrganicBrowser = ({ className = "w-6 h-6" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path 
      d="M4,5 C4,4 5,4 6,4 L18,4 C19,4 20,4 20,5 L20,19 C20,20 19,20 18,20 L6,20 C5,20 4,20 4,19 Z" 
      variants={draw} custom={1}
    />
    <motion.path 
      d="M4,10 C8,9.5 16,9.5 20,10" 
      variants={draw} custom={2}
    />
    <motion.circle cx="7" cy="7" r="0.8" fill="currentColor" variants={draw} custom={3} />
    <motion.circle cx="10" cy="7" r="0.8" fill="currentColor" variants={draw} custom={4} />
  </motion.svg>
);

export const OrganicRobot = ({ className = "w-6 h-6" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path d="M12,8 L12,4" variants={draw} custom={1} />
    <motion.path d="M9,4 L15,4" variants={draw} custom={2} />
    <motion.path 
      d="M7,9 C6,9 5,10 5,11 L5,17 C5,19 7,21 10,21 L14,21 C17,21 19,19 19,17 L19,11 C19,10 18,9 17,9 Z" 
      variants={draw} custom={3}
    />
    <motion.circle cx="9" cy="14" r="1.2" fill="currentColor" variants={draw} custom={4} />
    <motion.circle cx="15" cy="14" r="1.2" fill="currentColor" variants={draw} custom={5} />
    <motion.path d="M10,18 C11,18.5 13,18.5 14,18" variants={draw} custom={6} />
  </motion.svg>
);

export const OrganicDesign = ({ className = "w-6 h-6" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path 
      d="M12,19 L19,12 L22,15 L15,22 Z" 
      variants={draw} custom={1}
    />
    <motion.path 
      d="M18,13 L16.5,5.5 L2,2 L5.5,16.5 L13,18 Z" 
      variants={draw} custom={2}
    />
    <motion.path d="M2,2 L22,22" variants={draw} custom={3} />
  </motion.svg>
);

export const OrganicMobile = ({ className = "w-6 h-6" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path 
      d="M6,3 C6,2.5 6.5,2 7,2 L17,2 C17.5,2 18,2.5 18,3 L18,21 C18,21.5 17.5,22 17,22 L7,22 C6.5,22 6,21.5 6,21 Z" 
      variants={draw} custom={1}
    />
    <motion.circle cx="12" cy="19" r="1" fill="currentColor" variants={draw} custom={2} />
  </motion.svg>
);

export const HandDrawnMail = ({ className = "w-5 h-5" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path 
      d="M4,4 L20,4 L20,20 L4,20 Z" 
      variants={draw} custom={1}
    />
    <motion.path 
      d="M4,4 L12,12 L20,4" 
      variants={draw} custom={2}
    />
  </motion.svg>
);

export const HandDrawnTwitter = ({ className = "w-5 h-5" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path 
      d="M4,4 L10,12 L4,20 M20,4 L12,12 L20,20" 
      variants={draw} custom={1}
    />
    <motion.path 
      d="M8,4 L16,20" 
      variants={draw} custom={2}
    />
  </motion.svg>
);

export const HandDrawnLinkedin = ({ className = "w-5 h-5" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" variants={draw} custom={1} />
    <motion.rect x="2" y="9" width="4" height="12" variants={draw} custom={2} />
    <motion.circle cx="4" cy="4" r="2" variants={draw} custom={3} />
  </motion.svg>
);

export const HandDrawnGithub = ({ className = "w-5 h-5" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path 
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" 
      variants={draw} custom={1}
    />
  </motion.svg>
);

export const HandDrawnInstagram = ({ className = "w-5 h-5" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.rect x="2" y="2" width="20" height="20" rx="5" ry="5" variants={draw} custom={1} />
    <motion.path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" variants={draw} custom={2} />
    <motion.line x1="17.5" y1="6.5" x2="17.51" y2="6.5" variants={draw} custom={3} />
  </motion.svg>
);

export const HandDrawnWhatsapp = ({ className = "w-5 h-5" }: IconProps) => (
  <motion.svg
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    {/* Outer chat bubble shape */}
    <motion.path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      variants={draw} custom={1}
    />
    {/* Phone handset path */}
    <motion.path
      d="M9 9c0-.5.5-1.5 1.5-1.5.3 0 .6.1.8.4l1 2c.2.3.1.7-.1 1l-.6.6c.5 1 1.2 1.8 2.2 2.2l.6-.6c.3-.2.7-.3 1-.1l2 1c.3.2.4.5.4.8 0 1-1 1.5-1.5 1.5-2.5 0-7-4.5-7-7z"
      variants={draw} custom={2}
    />
  </motion.svg>
);

export const HandDrawnDiscovery = ({ className = "w-7 h-7" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path d="M11,19 C6.5,19 3,15.5 3,11 C3,6.5 6.5,3 11,3 C15.5,3 19,6.5 19,11 C19,13 18.5,15 17,16.5" variants={draw} custom={1} />
    <motion.path d="M21,21 L16,16" variants={draw} custom={2} />
    <motion.path d="M8,11 C8,9 10,8 11,8" variants={draw} custom={3} />
  </motion.svg>
);

export const HandDrawnDesign = ({ className = "w-7 h-7" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path d="M12,19 L19,12 L22,15 L15,22 Z" variants={draw} custom={1} />
    <motion.path d="M18,13 L16.5,5.5 L2,2 L5.5,16.5 L13,18 Z" variants={draw} custom={2} />
    <motion.path d="M2,2 L22,22" variants={draw} custom={3} />
  </motion.svg>
);

export const HandDrawnDev = ({ className = "w-7 h-7" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path d="M16 18l6-6-6-6" variants={draw} custom={1} />
    <motion.path d="M8 6l-6 6 6 6" variants={draw} custom={2} />
  </motion.svg>
);

export const HandDrawnLaunch = ({ className = "w-7 h-7" }: IconProps) => (
  <motion.svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    style={{ filter: "url(#pencilTexture)" } as React.CSSProperties}
    {...wiggle}
  >
    <motion.path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" variants={draw} custom={1} />
    <motion.path d="M12 15l-3.5 3.5L7 17l4-4M9 13l-4 4 1.5 1.5L10 15" variants={draw} custom={2} />
    <motion.path d="M2 22l7-7M9 13c0-3.5 1-6 3-8s4.5-3 8-3c0 3.5-1 6-3 8s-4.5 3-8 3z" variants={draw} custom={3} />
  </motion.svg>
);
