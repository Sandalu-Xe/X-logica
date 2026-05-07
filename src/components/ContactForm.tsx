import { Mail, User, MessageSquare, ArrowRight } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/info.xlogica@gmail.com';

interface ContactFormProps {
  title?: React.ReactNode;
  subtitle?: string;
}

export default function ContactForm({
  title = <>Ready to Build <br /> Something Great?</>,
  subtitle = "Let's discuss your next project and how Xlogica can help you scale your business with premium web & AI solutions.",
}: ContactFormProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto bg-white text-premium-black px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all active:scale-95 group">
            Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-transparent text-white border border-white/20 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-all active:scale-95">
            Book a Demo
          </button>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[32px]">
        <form action={FORMSPREE_URL} method="POST" className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
              <User size={16} /> Full Name
            </label>
            <input
              type="text"
              name="name"
              required
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
              name="email"
              required
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
              name="message"
              required
              placeholder="Tell us about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-blue transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-accent-blue/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
