import { motion } from 'motion/react';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from '../components/Magnetic';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import { containerVariants, itemVariants } from '../lib/animations';

import { openPositions, perks } from '../data/careers';

// --- Page ---

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Join Our Team"
        badgeColor="blue"
        centered
        title={<>Build Your <span className="text-accent-blue">Career</span> With Us</>}
        description="Join a world-class team of engineers, designers, and strategists working on challenging problems that impact millions of users worldwide."
      />

      {/* Brand Illustration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false }}
            className="relative rounded-[48px] overflow-hidden border border-gray-100 shadow-2xl shadow-black/5"
          >
            <img
              src="/images/careers-illustration.png"
              alt="Team Culture Illustration"
              className="w-full h-auto rounded-[32px] pointer-events-none select-none"
            />
          </motion.div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.span variants={itemVariants} className="text-3xl font-hand text-accent-blue mb-4 block">Why Xlogica</motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-6">Perks & Benefits</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {perks.map((perk, i) => (
              <motion.div key={i} variants={itemVariants} className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{perk.emoji}</div>
                <h3 className="text-lg font-bold text-premium-black mb-2">{perk.title}</h3>
                <p className="text-gray-500 text-sm">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
            variants={containerVariants}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <motion.span variants={itemVariants} className="text-3xl font-hand text-accent-blue mb-4 block">Open Positions</motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black">Find Your Next Role</motion.h2>
            </div>
            <motion.p variants={itemVariants} className="text-gray-500 max-w-sm">
              We're always looking for talented people. Don't see a perfect fit? Send us your resume anyway.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
            variants={containerVariants}
            className="space-y-4"
          >
            {openPositions.map((position) => (
              <motion.div
                key={position.id}
                variants={itemVariants}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-black/5 hover:border-accent-blue/20 transition-all duration-300"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-premium-black group-hover:text-accent-blue transition-colors mb-2">{position.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5"><Briefcase size={14} /> {position.department}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {position.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {position.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Link to={`/careers/${position.slug}`} className="hidden sm:block">
                    <span className="text-sm font-bold text-gray-400 hover:text-accent-blue transition-colors">
                      View Details
                    </span>
                  </Link>
                  <Link to={`/careers/${position.slug}`}>
                    <Magnetic strength={0.15}>
                      <button className="bg-premium-black text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all active:scale-95 group-hover:bg-accent-blue">
                        Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Magnetic>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-premium-black rounded-[48px] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/20 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent-violet/20 blur-[120px] -z-10" />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
