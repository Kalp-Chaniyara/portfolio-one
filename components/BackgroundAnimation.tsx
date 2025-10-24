// 'use client';

// import { motion } from 'framer-motion';

// export default function BackgroundAnimation() {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       <div className="absolute inset-0 bg-black" />

//       {/* Light Ray Effects */}
//       <div className="absolute inset-0">
//         {/* Diagonal light rays */}
//         <motion.div
//           className="absolute top-0 left-0 w-full h-full"
//           style={{
//             background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.02) 25%, transparent 50%, rgba(255,255,255,0.02) 75%, transparent 100%)',
//             transform: 'translateX(-100%)',
//           }}
//           animate={{
//             x: ['-100%', '100%'],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         />
        
//         <motion.div
//           className="absolute top-0 left-0 w-full h-full"
//           style={{
//             background: 'linear-gradient(-45deg, transparent 0%, rgba(255,255,255,0.015) 25%, transparent 50%, rgba(255,255,255,0.015) 75%, transparent 100%)',
//             transform: 'translateX(-100%)',
//           }}
//           animate={{
//             x: ['-100%', '100%'],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: 'linear',
//             delay: 2,
//           }}
//         />

//         {/* Vertical light rays */}
//         <motion.div
//           className="absolute top-0 left-1/4 w-px h-full"
//           style={{
//             background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.05) 50%, transparent 100%)',
//           }}
//           animate={{
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//         />

//         <motion.div
//           className="absolute top-0 right-1/3 w-px h-full"
//           style={{
//             background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.04) 60%, transparent 100%)',
//           }}
//           animate={{
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: 1,
//           }}
//         />

//         {/* Horizontal light rays */}
//         <motion.div
//           className="absolute top-1/3 left-0 w-full h-px"
//           style={{
//             background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.03) 70%, transparent 100%)',
//           }}
//           animate={{
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: 0.5,
//           }}
//         />
//       </div>

//       {/* Enhanced floating orbs with light effects */}
//       <motion.div
//         className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
//         style={{
//           background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)',
//           filter: 'blur(60px)',
//           boxShadow: '0 0 100px rgba(255,255,255,0.1)',
//         }}
//         animate={{
//           x: [0, 100, 0],
//           y: [0, -100, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: 'linear',
//         }}
//       />

//       <motion.div
//         className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full opacity-20"
//         style={{
//           background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)',
//           filter: 'blur(60px)',
//           boxShadow: '0 0 120px rgba(255,255,255,0.08)',
//         }}
//         animate={{
//           x: [0, -100, 0],
//           y: [0, 100, 0],
//           scale: [1, 1.3, 1],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: 'linear',
//         }}
//       />

//       <motion.div
//         className="absolute bottom-1/4 left-1/2 w-96 h-96 rounded-full opacity-20"
//         style={{
//           background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 50%, transparent 70%)',
//           filter: 'blur(60px)',
//           boxShadow: '0 0 80px rgba(255,255,255,0.06)',
//         }}
//         animate={{
//           x: [0, 50, 0],
//           y: [0, -50, 0],
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: 'linear',
//         }}
//       />

//       {/* Additional light particles */}
//       <motion.div
//         className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full"
//         style={{
//           background: 'rgba(255,255,255,0.8)',
//           boxShadow: '0 0 20px rgba(255,255,255,0.6)',
//         }}
//         animate={{
//           opacity: [0, 1, 0],
//           scale: [0.5, 1, 0.5],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       />

//       <motion.div
//         className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full"
//         style={{
//           background: 'rgba(255,255,255,0.9)',
//           boxShadow: '0 0 15px rgba(255,255,255,0.7)',
//         }}
//         animate={{
//           opacity: [0, 1, 0],
//           scale: [0.3, 1, 0.3],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: 'easeInOut',
//           delay: 1,
//         }}
//       />

//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

const BackgroundAnimation = () => {
  const [elements, setElements] = useState<
    Array<{
      left: number;
      top: number;
      delay: number;
      width: number;
      height: number;
    }>
  >([]);

  useEffect(() => {
    const newElements = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),rgba(0,0,0,0.9))]" />
      <div className="absolute inset-0">
        {elements.map((element, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDelay: `${element.delay}s`,
              width: `${element.width}px`,
              height: `${element.height}px`,
              background:
                "linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              borderRadius: "20%",
              filter: "blur(5px)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;