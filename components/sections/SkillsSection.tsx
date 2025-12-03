'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      'C',
      'C++',
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'Go',
      'SQL',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'pgAdmin',
      'VS Code',
      'Cursor',
      'Jupyter Notebook',
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      'Next.js',
      'Node.js',
      'Express.js',
      'React',
      'Vite',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Machine Learning/Data Science',
    skills: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
    ],
  },
  {
    title: 'Cloud/Databases',
    skills: [
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Vercel',
      'Railway',
      'Render',
      'Cloudinary',
    ],
  },
  {
    title: 'Coursework',
    skills: [
      'Database Management System',
      'Object Oriented Programming',
      'Data Structures',
      'Design and Analysis of Algorithms',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
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
            A comprehensive list of my technical expertise
          </p>

          <div className="glass p-8 md:p-12 rounded-2xl space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white/90">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="glass px-6 py-3 rounded-lg text-sm md:text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

