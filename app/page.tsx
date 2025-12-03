'use client';

import { useState, useEffect } from 'react';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Navigation from '@/components/Navigation';
import ScrollIndicator from '@/components/ScrollIndicator';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="relative">
      <BackgroundAnimation />
      <Navigation />
      {/* <ScrollIndicator /> */}

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <BlogSection /> */}
      <ContactSection />

      <footer className="text-center py-8 text-white/40 text-sm">
        <p>© 2025 Kalp Chaniyara. All rights reserved.</p>
      </footer>
    </main>
  );
}
