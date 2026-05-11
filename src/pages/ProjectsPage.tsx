import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { containerVariants } from '../lib/animations';

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        badge="Our Projects"
        title={<>Featured Portfolio &{' '}<span className="text-accent-blue">Success</span> Stories</>}
        description="Explore how we've helped leading companies across industries achieve their digital transformation goals with measurable impact and lasting results."
        image="/images/projects-illustration.png"
      />

      {/* Projects Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
