import { motion } from 'motion/react';
import { ArrowRight, Mail, User, MessageSquare } from 'lucide-react';

export default function CTA() {
  return (
    <section id="careers" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-premium-black rounded-[48px] p-12 md:p-24 relative overflow-hidden">
          {/* Background Decoration */}
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
  );
}
