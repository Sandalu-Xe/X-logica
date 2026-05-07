import { motion } from 'motion/react';
import ContactForm from './ContactForm';

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-premium-black rounded-[48px] p-12 md:p-24 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/10 blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent-violet/10 blur-[120px] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
