import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';

const cases = [
  {
    title: 'Dhaham Ceylone Spice website',
    description: 'Developed a responsive full-stack platform for "Daham Ceylon Spice" using React, TypeScript, and Express. The project features a dynamic product API, sophisticated animations with Framer Motion, and a custom design system tailored for a premium international export brand. Optimized asset delivery and implemented a cross-page dark/light mode functionality.',
    tags: ['React', 'TypeScript', 'Express'],
    image: 'https://tktueigbfdpshjztxtvl.supabase.co/storage/v1/object/sign/Sandalu%20Album/CylonSpice.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTQwNmI4NC03NTAyLTQ4YmItYTlkNy1jOTlhNzQxYjFiOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTYW5kYWx1IEFsYnVtL0N5bG9uU3BpY2UuanBlZyIsImlhdCI6MTc3NzYzMTI0MywiZXhwIjoyMDkyOTkxMjQzfQ.txks7F3LSD3PY--PibsAF-UZbVpUGOZZqpZBxfpGrSA',
    link: 'https://daham-ceylon-spice.vercel.app/#/',
  },
  {
    title: 'Spero Cementi Website',
    description: 'Delivered a luxury-grade interface featuring a custom viewport-adaptive animation system and a persistent theme engine. Focused on high-fidelity user experiences and clean software solutions, leveraging AI-augmented development to ensure rapid, high-performance execution.',
    tags: ['React', 'Animations', 'UI/UX'],
    image: 'https://tktueigbfdpshjztxtvl.supabase.co/storage/v1/object/sign/Sandalu%20Album/projectsimg/Spero.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTQwNmI4NC03NTAyLTQ4YmItYTlkNy1jOTlhNzQxYjFiOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTYW5kYWx1IEFsYnVtL3Byb2plY3RzaW1nL1NwZXJvLmpwZWciLCJpYXQiOjE3Nzc2MzE3MTUsImV4cCI6MjA5Mjk5MTcxNX0.Utn3RE6nSHbINFj-D2et3mDX91HNMSt1_Evs9Tej9ds',
    link: 'https://spero-project-nine.vercel.app/#/',
  },
  {
    title: 'Silver ray hotel managemnt sysytem website(client)',
    description: 'Architected a dual-platform ecosystem featuring a high-performance Next.js client website and a robust PHP administrative dashboard. Implemented a clean MVC (Model-View-Controller) architecture to ensure modular code maintainability and efficient data handling via MySQL. Developed a centralized backend to manage real-time room availability, guest bookings, and administrative operations with seamless data synchronization.',
    tags: ['Next.js', 'PHP', 'MySQL'],
    image: 'https://tktueigbfdpshjztxtvl.supabase.co/storage/v1/object/sign/Sandalu%20Album/projectsimg/Silveray.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTQwNmI4NC03NTAyLTQ4YmItYTlkNy1jOTlhNzQxYjFiOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTYW5kYWx1IEFsYnVtL3Byb2plY3RzaW1nL1NpbHZlcmF5LmpwZWciLCJpYXQiOjE3Nzc2MzIyNjksImV4cCI6MjA5Mjk5MjI2OX0.F-HPxn0bTfCAKj9kEj-dTSWpYavdrhvz2Qnyj7-nk20',
    link: 'https://silverray.lk/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function CaseStudyCard({ project, index }: { project: any; index: number; key?: React.Key }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isMobile = useMobile();

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <motion.a
      href={project.link || '#'}
      target={project.link ? "_blank" : "_self"}
      rel={project.link ? "noopener noreferrer" : ""}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={!isMobile ? {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        display: "block",
      } : { display: "block" } as any}
      className="group cursor-pointer perspective-1000"
    >
      <div
        className="relative rounded-[32px] overflow-hidden mb-8 aspect-[4/3] shadow-xl shadow-black/5 border border-gray-100 will-change-transform"
        style={!isMobile ? { transform: "translateZ(20px)" } : {}}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
          <span className="text-white font-bold flex items-center gap-2">
            View Case Study <ArrowRight size={18} />
          </span>
        </div>
      </div>

      <div className="flex gap-2 mb-4" style={!isMobile ? { transform: "translateZ(30px)" } : {}}>
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-accent-blue bg-accent-blue/5 px-3 py-1 rounded-full border border-accent-blue/10">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-premium-black mb-4 group-hover:text-accent-blue transition-colors" style={!isMobile ? { transform: "translateZ(40px)" } : {}}>
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed" style={!isMobile ? { transform: "translateZ(50px)" } : {}}>
        {project.description}
      </p>
    </motion.a>
  );
}

export default function CaseStudies() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-premium-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div className="max-w-2xl">
            <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">Case Studies</motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black">
              Featured Projects and <br /> Success Stories
            </motion.h2>
          </div>
          <motion.button variants={itemVariants} className="text-sm font-bold text-premium-black flex items-center gap-2 group hover:text-accent-blue transition-colors">
            View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {cases.map((project, index) => (
            <CaseStudyCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
