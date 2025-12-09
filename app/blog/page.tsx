import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import ViewCounter from '@/components/ViewCounter';

export const metadata = {
    title: 'Blog | Kalp Chaniyara',
    description: 'Thoughts, tutorials, and insights on web development and technology.',
};

export default function BlogPage() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen bg-transparent relative">
            <Navigation />

            <section className="pt-32 pb-20 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-2xl font-bold mb-2 text-gradient">
                            Blog
                        </h1>
                        <p className="text-white/60 text-base max-w-2xl mx-auto">
                            Exploring the passion and trying to go into depth of this technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allPostsData.map((post) => (
                            <Link href={`/blog/${post.id}`} key={post.id}>
                                <article className="glass glass-hover p-6 rounded-2xl h-full flex flex-col group cursor-pointer border border-white/5 hover:border-white/10 transition-all duration-300">
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
                                    <ViewCounter slug={post.id} increment={false} />
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <BackgroundAnimation />
        </main>
    );
}
