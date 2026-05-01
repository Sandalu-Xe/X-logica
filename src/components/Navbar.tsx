import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Magnetic from './Magnetic';
import Logo from './Logo';

const navLinks = [
  { name: 'Products', to: '/products' },
  { name: 'Solutions', to: '/solutions' },
  { name: 'About', to: '/about' },
  { name: 'Our Works', to: '/blog' },
  { name: 'Careers', to: '/careers' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-blue origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={0.1}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors relative group px-2 py-1 ${
                  location.pathname === link.to
                    ? 'text-accent-blue'
                    : 'text-gray-600 hover:text-accent-blue'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-blue transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            </Magnetic>
          ))}
        </div>

        <div className="hidden md:block">
          <Magnetic strength={0.15}>
            <Link to="/careers" className="bg-premium-black text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all active:scale-95 inline-block">
              Book a Demo
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-lg font-medium ${
                    location.pathname === link.to
                      ? 'text-accent-blue'
                      : 'text-gray-800 hover:text-accent-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100 my-2" />
              <Link to="/careers" className="bg-accent-blue text-white w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
