'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  // { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, backdropFilter: 'blur(0px)', boxShadow: '0 0 0px rgba(255,255,255,0)' }}
        animate={{
          opacity: 1,
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 0 30px rgba(255,255,255,0.15)' : '0 0 0px rgba(255,255,255,0)'
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'glass glow' : ''}`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-gradient"
            >
              Portfolio
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-white/80 px-2 py-1 rounded transition-colors duration-300 group hover:text-white hover:bg-white/10"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-white via-white/70 to-transparent rounded transition-all duration-700 ease-out group-hover:w-full"></span>
                </motion.button>

              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden glass p-2 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 w-64 glass z-40 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6 mt-16">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>

              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
