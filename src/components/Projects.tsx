import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { featuredProjects } from '../data/projects';
import { containerVariants, itemVariants } from '../lib/animations';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div className="max-w-2xl">
            <motion.span variants={itemVariants} className="text-3xl font-hand text-accent-blue mb-4 block">Our Projects</motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black">
              Featured Projects and <br /> Success Stories
            </motion.h2>
          </div>
          <motion.div variants={itemVariants}>
            <Link to="/projects" className="text-sm font-bold text-premium-black flex items-center gap-2 group hover:text-accent-blue transition-colors">
              View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {featuredProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
