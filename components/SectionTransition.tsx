'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SectionTransitionProps {
  isVisible: boolean;
  section: string;
  onComplete: () => void;
}

const sectionAnimations = {
  about: {
    emoji: '👋',
    text: 'Welcome to my world',
    color: 'from-blue-500 to-purple-600'
  },
  skills: {
    emoji: '⚡',
    text: 'Powering up skills',
    color: 'from-yellow-500 to-orange-600'
  },
  projects: {
    emoji: '🚀',
    text: 'Launching projects',
    color: 'from-red-500 to-pink-600'
  },
  blog: {
    emoji: '📝',
    text: 'Writing thoughts',
    color: 'from-green-500 to-teal-600'
  },
  contact: {
    emoji: '📧',
    text: 'Let\'s connect',
    color: 'from-purple-500 to-indigo-600'
  }
};

export default function SectionTransition({ isVisible, section, onComplete }: SectionTransitionProps) {
  const [animationPhase, setAnimationPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    if (isVisible) {
      setAnimationPhase('enter');
      
      // Hold phase
      const holdTimer = setTimeout(() => {
        setAnimationPhase('hold');
      }, 200);

      // Exit phase
      const exitTimer = setTimeout(() => {
        setAnimationPhase('exit');
      }, 1500);

      // Complete transition
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1800);

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isVisible, onComplete]);

  const currentAnimation = sectionAnimations[section as keyof typeof sectionAnimations];

  if (!currentAnimation) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        >
          {/* Full background overlay to hide all content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
          />

          {/* Main animation container */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Big emoji with rocket-like animation */}
            <motion.div
              initial={{ 
                scale: 0,
                rotate: -180,
                y: 100
              }}
              animate={animationPhase === 'enter' ? {
                scale: [0, 1.5, 1],
                rotate: [180, 0],
                y: [100, -50, 0]
              } : animationPhase === 'hold' ? {
                scale: 1,
                rotate: 0,
                y: 0
              } : {
                scale: [1, 0.5, 0],
                rotate: [0, 180],
                y: [0, -100, -200]
              }}
              transition={{
                duration: animationPhase === 'enter' ? 0.4 : animationPhase === 'exit' ? 0.3 : 0.2,
                ease: "easeInOut"
              }}
              className="text-9xl mb-8"
            >
              {currentAnimation.emoji}
            </motion.div>

            {/* Text with gradient */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={animationPhase === 'enter' ? {
                opacity: 1,
                y: 0
              } : animationPhase === 'exit' ? {
                opacity: 0,
                y: -50
              } : {
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.3,
                delay: animationPhase === 'enter' ? 0.15 : 0
              }}
              className={`text-4xl font-bold bg-gradient-to-r ${currentAnimation.color} bg-clip-text text-transparent`}
            >
              {currentAnimation.text}
            </motion.div>

            {/* Particle effects */}
            {animationPhase === 'enter' && (
              <>
                {/* Left particles */}
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [0, 100],
                        y: [0, Math.random() * 50 - 25]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 0.3 + i * 0.1,
                        repeat: 0
                      }}
                      className="w-2 h-2 bg-white rounded-full mb-2"
                    />
                  ))}
                </motion.div>

                {/* Right particles */}
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [0, -100],
                        y: [0, Math.random() * 50 - 25]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 0.3 + i * 0.1,
                        repeat: 0
                      }}
                      className="w-2 h-2 bg-white rounded-full mb-2"
                    />
                  ))}
                </motion.div>
              </>
            )}

            {/* Glow effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={animationPhase === 'enter' ? {
                scale: [0, 2, 1.5],
                opacity: [0, 0.8, 0.3]
              } : animationPhase === 'exit' ? {
                scale: [1.5, 0],
                opacity: [0.3, 0]
              } : {
                scale: 1.5,
                opacity: 0.3
              }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 bg-gradient-to-r ${currentAnimation.color} opacity-30 blur-3xl -z-10`}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
