import { motion } from 'motion/react';
import { ArrowRight, Mail, User, MessageSquare, MapPin, Briefcase, Clock } from 'lucide-react';
import Magnetic from '../components/Magnetic';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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

const openPositions = [
  {
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
  },
  {
    title: 'Product Designer (UX/UI)',
    department: 'Design',
    location: 'Remote / New York',
    type: 'Full-time',
  },
  {
    title: 'Machine Learning Engineer',
    department: 'AI & Data',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'DevOps / Cloud Architect',
    department: 'Infrastructure',
    location: 'Remote / London',
    type: 'Full-time',
  },
  {
    title: 'Technical Project Manager',
    department: 'Operations',
    location: 'San Francisco',
    type: 'Full-time',
  },
];

const perks = [
  { emoji: '🌍', title: 'Remote-First', desc: 'Work from anywhere in the world' },
  { emoji: '📈', title: 'Growth Budget', desc: '$3,000/year for learning & conferences' },
  { emoji: '🏖️', title: 'Unlimited PTO', desc: 'Take the time you need to recharge' },
  { emoji: '💰', title: 'Competitive Pay', desc: 'Top-of-market salary + equity' },
  { emoji: '🏥', title: 'Full Benefits', desc: 'Health, dental, vision & 401(k)' },
  { emoji: '🎯', title: 'Impactful Work', desc: 'Build products used by millions' },
];

export default function CareersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[5%] w-[40%] h-[40%] bg-accent-violet/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[5%] w-[40%] h-[40%] bg-accent-blue/5 rounded-full blur-[120px]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent-violet uppercase bg-accent-violet/5 rounded-full border border-accent-violet/10"
            >
              Join Our Team
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-premium-black mb-8 leading-[1.1]"
            >
              Build Your{' '}
              <span className="text-accent-blue">Career</span> With Us
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
            >
              Join a world-class team of engineers, designers, and strategists working on challenging
              problems that impact millions of users worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-24 md:py-32 bg-premium-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">Why X-LOGICA</motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-6">
              Perks & Benefits
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
              >
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">Open Positions</motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black">
                Find Your Next Role
              </motion.h2>
            </div>
            <motion.p variants={itemVariants} className="text-gray-500 max-w-sm">
              We're always looking for talented people. Don't see a perfect fit? Send us your resume anyway.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-4"
          >
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-premium-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-black/5 hover:border-accent-blue/20 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-premium-black group-hover:text-accent-blue transition-colors mb-2">{position.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5"><Briefcase size={14} /> {position.department}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {position.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {position.type}</span>
                  </div>
                </div>
                <Magnetic strength={0.15}>
                  <button className="bg-premium-black text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all active:scale-95 group-hover:bg-accent-blue">
                    Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Magnetic>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-24 md:py-32 bg-premium-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-premium-black rounded-[48px] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/10 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent-violet/10 blur-[120px] -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
                  Ready to Build <br /> Something Great?
                </h2>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md">
                  Let's discuss your next project and how X-Logica can help you scale your business with premium web & AI solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button className="w-full sm:w-auto bg-white text-premium-black px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all active:scale-95 group">
                    Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto bg-transparent text-white border border-white/20 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-all active:scale-95">
                    Book a Demo
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[32px]"
              >
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                      <User size={16} /> Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                      <Mail size={16} /> Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                      <MessageSquare size={16} /> Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                    />
                  </div>

                  <button className="w-full bg-accent-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-accent-blue/20">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
