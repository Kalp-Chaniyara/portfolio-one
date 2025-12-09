import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Kalp Chaniyara',
  description: 'A stunning glassmorphism portfolio showcasing my work and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundAnimation />
        <Navigation />
        <main className="relative min-h-screen">
          {children}
        </main>
        <footer className="text-center py-8 text-white/40 text-sm relative z-10">
          <p>© 2025 Kalp Chaniyara. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
