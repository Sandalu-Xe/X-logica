import React, { useState, useRef } from 'react';
import { Mail, User, MessageSquare, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  title?: React.ReactNode;
  subtitle?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm({
  title = <>Ready to Build <br /> Something Great?</>,
  subtitle = "Let's discuss your next project and how Xlogica can help you scale your business with premium web & AI solutions.",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        setStatus('error');
        setErrorMsg(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

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
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
            <p className="text-gray-400 max-w-xs">
              Thanks for reaching out. We'll get back to you at <strong className="text-white">info.xlogica@gmail.com</strong> very soon.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm text-accent-blue underline underline-offset-2 hover:text-blue-400 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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

            {status === 'error' && (
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-accent-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-accent-blue/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending…
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
