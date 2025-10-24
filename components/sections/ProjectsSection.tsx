'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration',
    image: '🛒',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    details: 'Built a complete e-commerce platform with user authentication, product management, shopping cart, and secure payment processing. Implemented real-time inventory tracking and order management system.',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: '📊',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    details: 'Created a comprehensive analytics dashboard that aggregates data from multiple social media platforms. Features include real-time metrics, custom reports, and scheduled post management.',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool',
    image: '🤖',
    tech: ['React', 'Python', 'OpenAI', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    details: 'Developed an AI-powered tool for generating marketing content, blog posts, and social media captions. Integrated with OpenAI API and built custom prompt engineering templates.',
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'Collaborative project management tool',
    image: '✅',
    tech: ['Vue.js', 'Firebase', 'Tailwind', 'WebSocket'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    details: 'Built a real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and automated workflow triggers.',
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    description: 'Real-time weather tracking application',
    image: '🌤️',
    tech: ['React Native', 'Redux', 'Weather API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    details: 'Developed a cross-platform mobile app providing accurate weather forecasts, severe weather alerts, and interactive weather maps with location-based services.',
  },
  {
    id: 6,
    title: 'Portfolio Builder',
    description: 'No-code portfolio website builder',
    image: '🎨',
    tech: ['Next.js', 'Supabase', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    details: 'Created a drag-and-drop portfolio builder allowing users to create professional portfolios without coding. Features custom themes, templates, and one-click deployment.',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-center text-white/60 mb-16">
            Some of my recent work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs glass px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass p-8 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-6xl mb-4">{selectedProject.image}</div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="glass p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-white/60">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass glass-hover px-6 py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass glass-hover px-6 py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
