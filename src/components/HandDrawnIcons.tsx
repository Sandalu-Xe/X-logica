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
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
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
