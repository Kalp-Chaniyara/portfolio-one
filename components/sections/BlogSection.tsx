'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for structuring large-scale React applications with maintainable architecture.',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'React',
    image: '⚛️',
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends in web development including AI integration and Web3 technologies.',
    date: '2024-03-10',
    readTime: '6 min read',
    category: 'Web Dev',
    image: '🚀',
  },
  {
    id: 3,
    title: 'Mastering TypeScript',
    excerpt: 'Deep dive into advanced TypeScript patterns and how to leverage them in your projects.',
    date: '2024-03-05',
    readTime: '10 min read',
    category: 'TypeScript',
    image: '📘',
  },
  {
    id: 4,
    title: 'Performance Optimization Tips',
    excerpt: 'Practical techniques to improve your web application performance and user experience.',
    date: '2024-02-28',
    readTime: '7 min read',
    category: 'Performance',
    image: '⚡',
  },
  {
    id: 5,
    title: 'CSS Grid vs Flexbox',
    excerpt: 'Understanding when to use CSS Grid and when to use Flexbox for optimal layouts.',
    date: '2024-02-20',
    readTime: '5 min read',
    category: 'CSS',
    image: '🎨',
  },
  {
    id: 6,
    title: 'Building REST APIs with Node.js',
    excerpt: 'A comprehensive guide to creating robust and secure REST APIs using Node.js and Express.',
    date: '2024-02-15',
    readTime: '12 min read',
    category: 'Backend',
    image: '🟢',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Latest Blog Posts
          </h2>
          <p className="text-center text-white/60 mb-16">
            Thoughts, tutorials, and insights
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass glass-hover p-6 rounded-2xl glow group cursor-pointer"
              >
                <div className="text-5xl mb-4">{post.image}</div>

                <div className="flex items-center gap-4 mb-4 text-sm text-white/50">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                <span className="inline-block glass px-3 py-1 rounded-full text-xs mb-3">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {post.title}
                </h3>

                <p className="text-white/60 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-white/80 group-hover:gap-4 transition-all">
                  <span className="text-sm font-semibold">Read More</span>
                  <ArrowRight size={16} />
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="glass glass-hover px-8 py-4 rounded-xl text-lg font-semibold">
              View All Posts
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
