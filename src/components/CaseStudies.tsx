import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'Acme Global: Cloud Migration',
    description: 'Modernizing legacy infrastructure for a global enterprise with zero downtime.',
    tags: ['Cloud', 'AWS', 'DevOps'],
    image: 'https://picsum.photos/seed/case1/800/600',
  },
  {
    title: 'Vortex Tech: AI Dashboard',
    description: 'Building an intelligent analytics platform for real-time data visualization.',
    tags: ['AI', 'React', 'Python'],
    image: 'https://picsum.photos/seed/case2/800/600',
  },
  {
    title: 'Lumina AI: Product Design',
    description: 'Crafting a delightful user experience for a next-gen AI-driven product.',
    tags: ['UX/UI', 'Figma', 'Product'],
    image: 'https://picsum.photos/seed/case3/800/600',
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

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      } as any}
      className="group cursor-pointer perspective-1000"
    >
      <div 
        className="relative rounded-[32px] overflow-hidden mb-8 aspect-[4/3] shadow-xl shadow-black/5 border border-gray-100"
        style={{ transform: "translateZ(20px)" }}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
          <span className="text-white font-bold flex items-center gap-2">
            View Case Study <ArrowRight size={18} />
          </span>
        </div>
      </div>
      
      <div className="flex gap-2 mb-4" style={{ transform: "translateZ(30px)" }}>
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-accent-blue bg-accent-blue/5 px-3 py-1 rounded-full border border-accent-blue/10">
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-2xl font-bold text-premium-black mb-4 group-hover:text-accent-blue transition-colors" style={{ transform: "translateZ(40px)" }}>
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed" style={{ transform: "translateZ(50px)" }}>
        {project.description}
      </p>
    </motion.div>
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
