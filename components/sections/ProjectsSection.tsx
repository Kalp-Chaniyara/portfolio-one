'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Next.js portfolio built with TypeScript, Tailwind CSS, and Framer Motion, featuring glassmorphism design with SSR, dynamic routing and responsive design.',
    image: '/images/projects/port.png',
    tech: ['Next.js', 'TypeScript', 'Nodemailer', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/Kalp-Chaniyara/portfolio-one',
    demo: 'https://portfolio-kalpchaniyara.vercel.app/',
    details: 'Developed a modern, interactive portfolio using Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed with a glassmorphism aesthetic, animated sections, custom cursor effects, and responsive layouts. Implemented modular components, accessible Radix UI primitives, optimized images, and a server-powered contact form using Nodemailer. Built for performance, scalability, and an immersive user experience.',
  },
  {
    id: 2,
    title: 'Ifest25 Website',
    description: 'A full-stack, production-grade platform built for iFest, featuring a high-performance React + TypeScript frontend and a scalable microservices backend. The system powers event browsing, user authentication, registrations, payments, and notifications with modern architecture.',
    image: '/images/projects/Ifest25.png',
    tech: ['React', 'Typescript', 'Node.js', 'Phonepay Payment Gateway', 'API-Gateway', 'PostgreSQL (Neon)'],
    demo: 'https://ifest25.vercel.app/',
    details: 'Built a complete event-management platform for iFest using a React 18 + TypeScript frontend, React Query, Tailwind, and advanced UI animations. Developed a microservices backend with Node.js, Express, PostgreSQL (Neon), JWT auth, payment processing, and an API Gateway for secure routing. Features include authentication, event listings, merch store, payment flows, dashboards, and email notifications. Demonstrates strong skills in scalable architecture, state management, and secure backend development.',
  },
  {
    id: 3,
    title: 'Linkify',
    description: 'URL manager built with React and Node.js that solves the “forgotten bookmark” problem by saving, organizing and reminding user by mail.',
    image: '/images/projects/Linkify.png',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Google OAuth', 'passport.js', 'Nodemailer'],
    github: 'https://github.com/Kalp-Chaniyara/LinkNest',
    details: 'Developed a production-grade link management app using React (Vite), Redux Toolkit, React Query, Tailwind, and Shadcn UI with Framer Motion animations. Implemented a secure Node.js + Express API with MongoDB, JWT-based auth, Google OAuth, OTP verification, and HTTP-only cookie sessions. Integrated Google Calendar, Web Push notifications, Nodemailer, and cron jobs for automation. Features include link organization, grouping, reminders, responsive dashboards.',
  },
  {
    id: 4,
    title: 'Chat App',
    description: 'A full-stack real-time chat application built with the MERN stack, featuring instant messaging, secure authentication, online user status, and a modern responsive UI. Powered by Socket.io for seamless, bi-directional communication.',
    image: '/images/projects/Chatbot.png',
    tech: ['React', 'Zusatnd', 'Node.js', 'MongoDB', 'Socket.io', 'WebSocket', 'Cloudinary', 'JWT'],
    github: 'https://github.com/Kalp-Chaniyara/Chatty',
    details: 'Developed a real-time chat platform using React, Zustand for global state, Tailwind + DaisyUI for a polished UI, and Socket.io-client for instant messaging. Built a secure Node.js + Express backend with MongoDB, Socket.io, JWT authentication using HTTP-only cookies, and Cloudinary for media uploads. Features include real-time messaging, online/offline indicators, user profiles, responsive layouts, skeleton loaders, and robust session management. Designed with clean architecture, modular code, and best practices.',
  },
  {
    id: 5,
    title: 'Database Management System',
    description: 'A Trip Management System built with Node.js and PostgreSQL, featuring a rich relational database design for managing trips, users, bookings, payments, and reviews. Having proper ERD and Relational schema. Implemented as a CLI application but architected to support full-scale web integration.',
    image: '/images/projects/DBMS.png',
    tech: ['Node.js', 'PostgreSQL', 'SQL', 'ERD', 'Relational Schema', 'CLI', 'Faker'],
    github: 'https://github.com/Kalp-Chaniyara/trip_managment',
    details: 'Designed a robust backend and database system using Node.js and PostgreSQL with a well-structured relational schema of ~10 interconnected tables. Implemented functional modules for analytics, trip operations, payments, and review management. Built raw SQL-powered logic for complex joins, aggregations, and reporting. Created a sophisticated data-generation pipeline using Faker to populate relational data consistently. The architecture forms the core foundation of a scalable travel booking platform, ready for extension into a full web application.',
  },
  {
    id: 6,
    title: 'OOP Project',
    description: 'A Java-based console game inspired by “Kaun Banega Crorepati,” featuring user login, level-based quizzes, lifelines, score tracking, and CSV-based question storage. Designed using clean OOP principles such as encapsulation, inheritance, and polymorphism.',
    image: '/images/projects/OOPs.png',
    tech: ['Java', 'OOP', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction', 'Game Logic'],
    github: 'https://github.com/Kalp-Chaniyara/kbc-oops',
    details: 'Built a structured Java console application that simulates the KBC quiz format with user authentication, sequential difficulty-based questions, and lifelines such as 50:50, Audience Poll, and Flip Question. Implemented CSV parsing for questions and persistent high-score storage, with in-memory user management. The project follows strong OOP practices using encapsulated models, utility managers, and separate classes for lifeline strategies, demonstrating solid understanding of Java, file I/O, and game logic.',
  },
];

export default function ProjectsSection() {

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
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col h-full"
              >
                {/* <div className="text-6xl mb-4">{project.image}</div> */}
                <div className="relative h-40 sm:h-48 overflow-hidden rounded-xl mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover/card:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="relative mb-4 flex-grow">
                  <h3
                    className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm glass px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 glass glass-hover px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-sm hover:bg-white/10 transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 glass glass-hover px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-sm hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>





    </section>
  );
}
