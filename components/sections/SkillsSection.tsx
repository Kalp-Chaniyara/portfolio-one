'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📦' },
  { name: 'Figma', icon: '🎯' },
];

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-center text-white/60 mb-16">
            Tools and technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={index}
                  className="glass glass-hover p-8 rounded-2xl min-w-[200px] relative group"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl mb-4 text-center">{skill.icon}</div>
                  <div className="text-xl font-semibold text-center text-white">
                    {skill.name}
                  </div>

                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-12 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-lg whitespace-nowrap text-sm"
                    >
                      Proficient in {skill.name}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-2 text-gradient">Frontend</h3>
              <p className="text-white/60">
                Building responsive and interactive user interfaces with modern frameworks
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-2 text-gradient">Backend</h3>
              <p className="text-white/60">
                Creating robust APIs and server-side solutions with scalable architecture
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-2 text-gradient">DevOps</h3>
              <p className="text-white/60">
                Deploying and maintaining applications with modern cloud infrastructure
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
