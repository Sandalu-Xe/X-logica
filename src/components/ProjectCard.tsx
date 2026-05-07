import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';
import { itemVariants } from '../lib/animations';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isMobile = useMobile();

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const tiltStyle = !isMobile
    ? { rotateX, rotateY, transformStyle: 'preserve-3d' as const, display: 'block' }
    : { display: 'block' };

  return (
    <motion.a
      href={project.link || '#'}
      target={project.link ? '_blank' : '_self'}
      rel={project.link ? 'noopener noreferrer' : ''}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle as any}
      className="group cursor-pointer perspective-1000"
    >
      <div
        className="relative rounded-[32px] overflow-hidden mb-8 aspect-[4/3] shadow-xl shadow-black/5 border border-gray-100 will-change-transform"
        style={!isMobile ? { transform: 'translateZ(20px)' } : {}}
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
            View Project <ArrowRight size={18} />
          </span>
        </div>
      </div>

      <div className="flex gap-2 mb-4" style={!isMobile ? { transform: 'translateZ(30px)' } : {}}>
        {project.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-accent-blue bg-accent-blue/5 px-3 py-1 rounded-full border border-accent-blue/10">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-premium-black mb-4 group-hover:text-accent-blue transition-colors" style={!isMobile ? { transform: 'translateZ(40px)' } : {}}>
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed" style={!isMobile ? { transform: 'translateZ(50px)' } : {}}>
        {project.description}
      </p>
    </motion.a>
  );
}
