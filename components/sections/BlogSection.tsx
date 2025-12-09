import { PostData } from '@/lib/posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogSectionProps {
  posts: PostData[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
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
            {posts.map((post, index) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass glass-hover p-6 rounded-2xl h-full flex flex-col group cursor-pointer border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4 text-sm text-white/50">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <div className="mb-4">
                    {post.tags && post.tags.map((tag) => (
                      <span key={tag} className="inline-block glass px-2 py-1 rounded-md text-xs mr-2 mb-2 text-primary/80">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-white/60 mb-4 line-clamp-3 flex-grow">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-auto group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
