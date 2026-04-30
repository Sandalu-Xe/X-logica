import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexus transformed our legacy systems into a modern, cloud-native powerhouse. Their attention to detail and technical expertise is unmatched.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "Acme Global",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "The product design team at Nexus is world-class. They didn't just build what we asked for—they built what our users actually needed.",
    author: "Michael Chen",
    role: "Product Director",
    company: "Vortex Tech",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    quote: "Working with Nexus was a seamless experience. They delivered our AI-driven analytics platform ahead of schedule and under budget.",
    author: "Elena Rodriguez",
    role: "CEO",
    company: "Lumina AI",
    avatar: "https://i.pravatar.cc/150?u=elena",
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

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-4 block">Testimonials</motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-premium-black mb-6">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We've helped hundreds of companies scale their digital presence and achieve their business goals.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-10 bg-premium-white border border-gray-100 rounded-3xl relative group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-accent-blue/10 group-hover:text-accent-blue/20 transition-colors" />
              
              <p className="text-lg text-gray-700 italic leading-relaxed mb-10 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-premium-black">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
