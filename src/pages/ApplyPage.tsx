import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, User, Mail, Phone, Link as LinkIcon, FileText, Send, CheckCircle2, Upload, Loader2, AlertCircle } from 'lucide-react';
import axios from 'axios';
import Magnetic from '../components/Magnetic';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ApplyPage() {
  const { role } = useParams<{ role: string }>();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const formData = new FormData(e.currentTarget);
      // Normalize API URL to handle trailing slashes and ensure it points to the correct server
      let API_URL = import.meta.env.VITE_API_URL || 'https://x-logica-server.onrender.com';
      if (API_URL.endsWith('/')) {
        API_URL = API_URL.slice(0, -1);
      }
      
      const response = await axios.post(`${API_URL}/api/apply`, formData, {
        timeout: 60000 // 60s timeout (Render cold start + file upload)
      });

      if (response.data && response.data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(response.data.message || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      console.error('Application Form Error:', err);
      
      if (err.code === 'ECONNABORTED' || err.message?.includes('timeout')) {
        setErrorMsg('Request timed out. The server may be starting up — please wait a moment and try again.');
      } else if (err.response) {
        // Server responded with an error
        setErrorMsg(err.response.data?.message || `Server error: ${err.response.status}`);
      } else {
        setErrorMsg(`Network error: ${err.message}. Please check your connection and try again.`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] bg-accent-blue/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[35%] h-[35%] bg-accent-violet/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
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

        <AnimatePresence mode="wait">
          {status !== 'success' ? (
            <motion.div
              key="form"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.div variants={itemVariants} className="mb-12">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent-blue uppercase bg-accent-blue/5 rounded-full border border-accent-blue/10">
                  Application Form
                </span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-premium-black mb-6 leading-tight">
                  Applying for <br />
                  <span className="text-accent-blue">{decodeURIComponent(role || 'Position')}</span>
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                  We're excited to learn more about you. Please fill out the form below and attach your CV to get started.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-premium-white border border-gray-100 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-black/5"
              >
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
                  {/* Hidden field to identify the role */}
                  <input type="hidden" name="position" value={decodeURIComponent(role || 'General Application')} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-premium-black flex items-center gap-2 px-1">
                        <User size={16} className="text-accent-blue" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Sandalu Thushan"
                        className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-premium-black placeholder:text-gray-400 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/5 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-premium-black flex items-center gap-2 px-1">
                        <Mail size={16} className="text-accent-blue" /> Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="sandalu@example.com"
                        className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-premium-black placeholder:text-gray-400 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/5 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-premium-black flex items-center gap-2 px-1">
                        <Phone size={16} className="text-accent-blue" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+94 77 123 4567"
                        className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-premium-black placeholder:text-gray-400 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/5 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-premium-black flex items-center gap-2 px-1">
                        <LinkIcon size={16} className="text-accent-blue" /> Portfolio / LinkedIn
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        placeholder="https://yourportfolio.com"
                        className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-premium-black placeholder:text-gray-400 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/5 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-premium-black flex items-center gap-2 px-1">
                      <FileText size={16} className="text-accent-blue" /> Cover Letter (Optional)
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Tell us why you're a great fit for this role..."
                      className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-premium-black placeholder:text-gray-400 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/5 transition-all resize-none"
                    />
                  </div>

                  {/* CV Upload Section */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-premium-black flex items-center gap-2 px-1">
                      <Upload size={16} className="text-accent-blue" /> Upload CV / Resume
                    </label>
                    <div className="relative group">
                      <input
                        required
                        type="file"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className={`w-full border-2 border-dashed rounded-2xl px-6 py-10 flex flex-col items-center justify-center gap-3 transition-all ${fileName ? 'border-accent-blue bg-accent-blue/5' : 'border-gray-200 group-hover:border-accent-blue group-hover:bg-accent-blue/5'}`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${fileName ? 'bg-accent-blue text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-accent-blue group-hover:text-white transition-colors'}`}>
                          <Upload size={20} />
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-premium-black mb-1">
                            {fileName || 'Click to upload or drag and drop'}
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, DOCX (Max 10MB)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl px-5 py-4 text-sm text-red-600">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="pt-4">
                    <Magnetic strength={0.1}>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-premium-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-black/10 group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={18} className="animate-spin" /> Submitting…
                          </>
                        ) : (
                          <>
                            Submit Application <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white rounded-[40px] border border-gray-100 shadow-2xl shadow-black/5"
            >
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-premium-black mb-4">Application Received!</h2>
              <p className="text-lg text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
                Thank you for applying for the <strong>{decodeURIComponent(role || 'position')}</strong>. Our recruiting team will review your application and CV, then get back to you soon.
              </p>
              <Link to="/careers">
                <Magnetic strength={0.2}>
                  <span className="inline-block bg-premium-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all active:scale-95">
                    Back to Careers
                  </span>
                </Magnetic>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
