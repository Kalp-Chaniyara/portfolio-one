// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// export default function CursorGlow() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const updatePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       setTimeout(() => {
//         setTrailPosition({ x: e.clientX, y: e.clientY });
//       }, 100);
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);

//     // Add hover detection for interactive elements
//     const interactiveElements = document.querySelectorAll('button, a, [role="button"], .glass-hover');
//     interactiveElements.forEach(el => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     window.addEventListener('mousemove', updatePosition);
//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       interactiveElements.forEach(el => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Light trail effect */}
//       <motion.div
//         className="cursor-glow-trail"
//         style={{
//           left: `${trailPosition.x}px`,
//           top: `${trailPosition.y}px`,
//           transform: 'translate(-50%, -50%)',
//         }}
//         animate={{
//           scale: isHovering ? 1.5 : 1,
//           opacity: isHovering ? 0.8 : 0.3,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: 'easeOut',
//         }}
//       />
      
//       {/* Main cursor glow */}
//       <motion.div
//         className="cursor-glow"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: 'translate(-50%, -50%)',
//         }}
//         animate={{
//           scale: isHovering ? 1.2 : 1,
//           opacity: isHovering ? 0.9 : 0.5,
//         }}
//         transition={{
//           duration: 0.2,
//           ease: 'easeOut',
//         }}
//       />

//       {/* Spiral energy effect */}
//       <motion.div
//         className="absolute pointer-events-none"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: 'translate(-50%, -50%)',
//         }}
//         animate={{
//           opacity: isHovering ? 0.8 : 0.3,
//           scale: isHovering ? 1.5 : 1,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: 'easeOut',
//         }}
//       >
//         {/* Spiral arms */}
//         {[...Array(3)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent"
//             style={{
//               left: '-40px',
//               top: '50%',
//               transform: `rotate(${i * 120}deg) translateY(-50%)`,
//               boxShadow: '0 0 8px rgba(255,255,255,0.6)',
//             }}
//             animate={{
//               opacity: [0.2, 0.8, 0.2],
//               scaleX: [0.5, 1, 0.5],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               ease: 'easeInOut',
//               delay: i * 0.3,
//             }}
//           />
//         ))}
//       </motion.div>

//       {/* Orbiting energy rings */}
//       <motion.div
//         className="absolute pointer-events-none"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: 'translate(-50%, -50%)',
//         }}
//         animate={{
//           opacity: isHovering ? 0.7 : 0.2,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: 'easeOut',
//         }}
//       >
//         {[...Array(3)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute border border-white/40 rounded-full"
//             style={{
//               width: `${20 + i * 15}px`,
//               height: `${20 + i * 15}px`,
//               left: '50%',
//               top: '50%',
//               transform: 'translate(-50%, -50%)',
//               boxShadow: `0 0 ${10 + i * 5}px rgba(255,255,255,0.3)`,
//             }}
//             animate={{
//               rotate: 360,
//               opacity: [0.3, 0.8, 0.3],
//             }}
//             transition={{
//               duration: 3 + i,
//               repeat: Infinity,
//               ease: 'linear',
//               delay: i * 0.5,
//             }}
//           />
//         ))}
//       </motion.div>

//       {/* Energy particles with wave motion */}
//       <motion.div
//         className="absolute pointer-events-none"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: 'translate(-50%, -50%)',
//         }}
//         animate={{
//           opacity: isHovering ? 0.9 : 0.4,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: 'easeOut',
//         }}
//       >
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full"
//             style={{
//               left: `${Math.cos((i * 45) * Math.PI / 180) * (15 + i * 2)}px`,
//               top: `${Math.sin((i * 45) * Math.PI / 180) * (15 + i * 2)}px`,
//               transform: 'translate(-50%, -50%)',
//               boxShadow: '0 0 8px rgba(255,255,255,0.9)',
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               scale: [0.3, 1.2, 0.3],
//               y: [0, -10, 0],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: 'easeInOut',
//               delay: i * 0.15,
//             }}
//           />
//         ))}
//       </motion.div>

//       {/* Energy pulse waves */}
//       <motion.div
//         className="absolute pointer-events-none"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: 'translate(-50%, -50%)',
//         }}
//         animate={{
//           opacity: isHovering ? 0.6 : 0.2,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: 'easeOut',
//         }}
//       >
//         {[...Array(2)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-8 h-8 border border-white/30 rounded-full"
//             style={{
//               left: '50%',
//               top: '50%',
//               transform: 'translate(-50%, -50%)',
//             }}
//             animate={{
//               scale: [0.5, 2, 0.5],
//               opacity: [0.8, 0, 0.8],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: 'easeOut',
//               delay: i * 1,
//             }}
//           />
//         ))}
//       </motion.div>
//     </>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setTrail({ x: e.clientX, y: e.clientY }), 100);
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    const els = document.querySelectorAll('button, a, [role="button"], .glass-hover');
    els.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      els.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      {/* soft trail */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: trail.x,
          top: trail.y,
          transform: 'translate(-50%, -50%)',
          width: 60,
          height: 60,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
        }}
        animate={{
          scale: hover ? 1.3 : 1,
          opacity: hover ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* main glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: 'white',
          boxShadow: '0 0 15px rgba(255,255,255,0.8)',
        }}
        animate={{
          scale: hover ? 1.3 : 1,
          opacity: hover ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  );
}
