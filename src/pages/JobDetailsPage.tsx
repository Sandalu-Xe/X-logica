import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Briefcase, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { openPositions } from '../data/careers';
import Magnetic from '../components/Magnetic';
import { containerVariants, itemVariants } from '../lib/animations';

export default function JobDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const position = openPositions.find(p => p.slug === slug);

  if (!position) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Position Not Found</h1>
          <Link to="/careers" className="text-accent-violet hover:underline">Back to Careers</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] bg-accent-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[35%] h-[35%] bg-accent-violet/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-accent-blue transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Careers
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 text-xs font-bold tracking-widest text-accent-blue uppercase bg-accent-blue/5 rounded-full border border-accent-blue/10">
                {position.department}
              </span>
              <span className="px-4 py-1.5 text-xs font-bold tracking-widest text-gray-500 uppercase bg-gray-50 rounded-full border border-gray-100">
                {position.type}
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-hand text-premium-black mb-8 leading-tight -rotate-0 origin-left inline-block"
            >
              {position.title}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                  <MapPin size={18} className="text-accent-blue" />
                </div>
                <span className="font-medium">{position.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                  <Briefcase size={18} className="text-accent-blue" />
                </div>
                <span className="font-medium">{position.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                  <Clock size={18} className="text-accent-blue" />
                </div>
                <span className="font-medium">{position.type}</span>
              </div>
            </div>

            <div className="h-px w-full bg-gray-100 mb-12" />
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-premium-black mb-6">About the Role</h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {position.description}
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-premium-black mb-6">Responsibilities</h2>
                <ul className="space-y-4">
                  {position.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-500 leading-relaxed">
                      <div className="mt-1.5 shrink-0">
                        <CheckCircle2 size={18} className="text-accent-blue" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-premium-black mb-6">Requirements</h2>
                <ul className="space-y-4">
                  {position.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-500 leading-relaxed">
                      <div className="mt-1.5 shrink-0">
                        <CheckCircle2 size={18} className="text-accent-blue" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>

            <div className="space-y-8">
              {/* Position Illustration */}
              {position.image && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-12"
                >
                  <motion.img
                    src={position.image}
                    alt={`${position.title} Illustration`}
                    className="w-full h-auto object-contain pointer-events-none select-none scale-90 md:scale-125 drop-shadow-sm mix-blend-multiply"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              )}

              <motion.div
                variants={itemVariants}
                className="sticky top-32 p-8 bg-premium-white border border-gray-100 rounded-[32px] shadow-2xl shadow-black/5"
              >
                <h3 className="text-xl font-bold text-premium-black mb-4">Interested in this role?</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                  Join our mission to build the future of digital experiences. We'd love to hear from you.
                </p>
                <Link to={`/apply/${position.slug}`}>
                  <Magnetic strength={0.1}>
                    <button className="w-full bg-premium-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 group">
                      Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Magnetic>
                </Link>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-xs text-gray-400 text-center">
                    Share this position with someone who might be a great fit.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
