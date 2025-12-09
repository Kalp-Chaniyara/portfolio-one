import { getPostData, getSortedPostsData, PostData } from '@/lib/posts';
import ViewCounter from '@/components/ViewCounter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const post = getPostData(params.slug);
        return {
            title: `${post.title} | Kalp Chaniyara`,
            description: post.description,
        };
    } catch (e) {
        return {
            title: 'Blog Post Not Found',
        };
    }
}

export default function Post({ params }: { params: { slug: string } }) {
    let post: PostData | undefined;
    try {
        post = getPostData(params.slug);
    } catch (e) {
        notFound();
    }

    if (!post) {
        notFound();
    }


    return (
        <main className="min-h-screen bg-transparent relative">
            <Navigation />

            <article className="pt-32 pb-20 px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Blog
                    </Link>


                    <header className="mb-12">
                        <div className="flex gap-2 mb-6 flex-wrap">
                            {post.tags && post.tags.map((tag) => (
                                <span key={tag} className="glass px-3 py-1 rounded-full text-sm text-primary">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-white/50 text-sm border-b border-white/10 pb-8">
                            <span className="flex items-center gap-2">
                                <Calendar size={16} />
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} />
                                10 min read
                            </span>
                            <ViewCounter slug={params.slug} />
                        </div>
                    </header>

                    <div className="prose prose-invert max-w-none prose-headings:text-white/90 prose-p:text-white/70 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-primary prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10 prose-li:text-white/70">
                        <MDXRemote source={post.content || ''} />
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                        <Link
                            href="/blog"
                            className="text-white/60 hover:text-white transition-colors"
                        >
                            ← Read more articles
                        </Link>
                    </div>
                </div>

            </article>

            {/* <BackgroundAnimation /> */}
        </main>
    );
}
