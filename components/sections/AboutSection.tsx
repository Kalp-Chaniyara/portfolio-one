'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function AboutSection() {
  const [counts, setCounts] = useState({ projects: 0, experience: 0 });
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Creative Coder'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const projectTarget = 50;
    const experienceTarget = 5;
    const duration = 2000;
    const steps = 60;
    const projectIncrement = projectTarget / steps;
    const experienceIncrement = experienceTarget / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps) {
        setCounts({
          projects: Math.min(Math.floor(projectIncrement * currentStep), projectTarget),
          experience: Math.min(Math.floor(experienceIncrement * currentStep), experienceTarget),
        });
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              charIndex--;
              setDisplayText(currentRole.slice(0, charIndex));
            } else {
              clearInterval(deleteInterval);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 1 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full glass glow overflow-hidden animate-float">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-6xl">
                  👤
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white/10 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
          >
            Your Name
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-white/70 mb-8 h-12"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about creating beautiful and functional web experiences.
            Specializing in modern web technologies and bringing ideas to life through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-4 rounded-full glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-4 rounded-full glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-4 rounded-full glow"
            >
              <Twitter size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 gap-8 max-w-md mx-auto"
          >
            <div className="glass glow p-6 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">{counts.projects}+</div>
              <div className="text-white/60">Projects Completed</div>
            </div>
            <div className="glass glow p-6 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">{counts.experience}+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
