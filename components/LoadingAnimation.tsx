'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="loader-bars">
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  );
}

