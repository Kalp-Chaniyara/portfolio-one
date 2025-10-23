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

'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  const particles = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Moving diagonal light rays */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(60deg, transparent 0%, rgba(255,255,255,0.03) 40%, transparent 80%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 200%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(-60deg, transparent 0%, rgba(255,255,255,0.02) 40%, transparent 80%)',
        }}
        animate={{
          backgroundPosition: ['200% 0%', '0% 200%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating light dots */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: 'white',
            opacity: 0.6,
            filter: 'blur(1px)',
          }}
          animate={{
            y: ['0%', '-20%', '0%'],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Gentle gradient fade to make it soft */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
    </div>
  );
}
