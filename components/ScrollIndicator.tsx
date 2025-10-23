'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = ['About', 'Skills', 'Projects', 'Blog', 'Contact'];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section =>
        document.getElementById(section.toLowerCase())
      );

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((element, index) => {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => {
              document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative"
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === index ? 'bg-white scale-125' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.5 }}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm glass px-3 py-1 rounded">
              {section}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
