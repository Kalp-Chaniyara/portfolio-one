// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const sections = [
//   { name: 'About', icon: '👤', color: 'from-blue-500 to-cyan-500' },
//   { name: 'Skills', icon: '⚡', color: 'from-purple-500 to-pink-500' },
//   { name: 'Projects', icon: '🚀', color: 'from-green-500 to-emerald-500' },
//   { name: 'Blog', icon: '📝', color: 'from-orange-500 to-red-500' },
//   { name: 'Contact', icon: '📧', color: 'from-yellow-500 to-orange-500' },
// ];

// export default function ScrollIndicator() {
//   const [activeSection, setActiveSection] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const sectionElements = sections.map(section =>
//   //       document.getElementById(section.name.toLowerCase())
//   //     );

//   //     const scrollPosition = window.scrollY + window.innerHeight / 3; // Changed from /2 to /3 for better detection
//   //     const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//   //     const progress = Math.min(window.scrollY / totalHeight, 1);
//   //     setScrollProgress(progress);

//   //     // Find the current section based on scroll position
//   //     let currentSection = 0;
//   //     sectionElements.forEach((element, index) => {
//   //       if (element) {
//   //         const rect = element.getBoundingClientRect();
//   //         const elementTop = rect.top + window.scrollY;
//   //         const elementBottom = elementTop + rect.height;
          
//   //         // Check if we're in the middle portion of a section
//   //         if (scrollPosition >= elementTop + rect.height * 0.2 && scrollPosition <= elementBottom - rect.height * 0.2) {
//   //           currentSection = index;
//   //         }
//   //       }
//   //     });

//   //     setActiveSection(currentSection);
//   //   };

//   //   // Initial call
//   //   handleScroll();
    
//   //   window.addEventListener('scroll', handleScroll, { passive: true });
//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + window.innerHeight / 2; // center of viewport
  
//       let current = 0;
  
//       sections.forEach((section, index) => {
//         const element = document.getElementById(section.name.toLowerCase());
//         if (element) {
//           const top = element.offsetTop;
//           const bottom = top + element.offsetHeight;
  
//           if (scrollPos >= top && scrollPos < bottom) {
//             current = index;
//           }
//         }
//       });
  
//       setActiveSection(current);
  
//       // Update scroll progress (optional)
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       setScrollProgress(Math.min(window.scrollY / totalHeight, 1));
//     };
  
//     handleScroll(); // initial
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  

//   return (
//     <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
//       <div className="relative">
//         {/* Progress line */}
//         <motion.div
//           className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-white/20 to-white/60"
//           style={{
//             height: '200px',
//             transform: 'translateX(-50%)',
//           }}
//           initial={{ scaleY: 0 }}
//           animate={{ scaleY: scrollProgress }}
//           transition={{ duration: 0.3 }}
//         />

//         {/* Section indicators */}
//         <div className="flex flex-col space-y-8">
//           {sections.map((section, index) => (
//             <motion.button
//               key={section.name}
//               onClick={() => {
//                 document.getElementById(section.name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
//               }}
//               className="group relative flex items-center"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {/* Active section indicator */}
//               <motion.div
//                 className={`absolute left-1/2 top-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${section.color} opacity-20`}
//                 style={{
//                   transform: 'translate(-50%, -50%)',
//                 }}
//                 animate={{
//                   scale: activeSection === index ? 1.5 : 0,
//                   opacity: activeSection === index ? 0.3 : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//               />

//               {/* Section icon */}
//               <motion.div
//                 className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
//                   activeSection === index 
//                     ? 'bg-white text-black shadow-lg' 
//                     : 'bg-white/10 text-white/60 hover:bg-white/20'
//                 }`}
//                 animate={{
//                   scale: activeSection === index ? 1.2 : 1,
//                   rotate: activeSection === index ? 360 : 0,
//                 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {section.icon}
//               </motion.div>

//               {/* Section name tooltip */}
//               <motion.div
//                 className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
//                 initial={{ x: 10, opacity: 0 }}
//                 whileHover={{ x: 0, opacity: 1 }}
//               >
//                 <div className={`glass px-4 py-2 rounded-lg bg-gradient-to-r ${section.color} bg-opacity-20 backdrop-blur-sm`}>
//                   <span className="text-sm font-medium text-white whitespace-nowrap">
//                     {section.name}
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Connection line to next section */}
//               {index < sections.length - 1 && (
//                 <motion.div
//                   className="absolute left-1/2 top-8 w-0.5 h-8 bg-gradient-to-b from-white/40 to-white/20"
//                   style={{ transform: 'translateX(-50%)' }}
//                   animate={{
//                     opacity: activeSection === index ? 1 : 0.3,
//                   }}
//                 />
//               )}
//             </motion.button>
//           ))}
//         </div>

//         {/* Floating energy particles */}
//         <motion.div
//           className="absolute inset-0 pointer-events-none"
//           animate={{
//             opacity: [0.3, 0.8, 0.3],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//         >
//           {[...Array(5)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full"
//               style={{
//                 left: `${20 + i * 15}px`,
//                 top: `${30 + i * 20}px`,
//                 boxShadow: '0 0 6px rgba(255,255,255,0.8)',
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 opacity: [0, 1, 0],
//                 scale: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//                 delay: i * 0.4,
//               }}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { name: 'About', icon: '👤', color: 'from-blue-500 to-cyan-500' },
  { name: 'Skills', icon: '⚡', color: 'from-purple-500 to-pink-500' },
  { name: 'Projects', icon: '🚀', color: 'from-green-500 to-emerald-500' },
  { name: 'Blog', icon: '📝', color: 'from-orange-500 to-red-500' },
  { name: 'Contact', icon: '📧', color: 'from-yellow-500 to-orange-500' },
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section =>
        document.getElementById(section.name.toLowerCase())
      );

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);

      // Find the current section - use a more robust approach
      let currentSection = 0;
      let closestSection = 0;
      let minDistance = Infinity;
      
      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if the center of viewport is within this section
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSection = i;
            break; // Exit loop once we find the current section
          }
          
          // Calculate distance to section center for fallback
          const sectionCenter = elementTop + rect.height / 2;
          const distance = Math.abs(scrollPosition - sectionCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = i;
          }
        }
      }
      
      // If no section is found, use the closest one
      if (currentSection === 0 && scrollPosition > 0) {
        currentSection = closestSection;
      }
      
      setActiveSection(currentSection);
    };

    // Initial call to set correct initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Progress line */}
        <motion.div
          className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-white/20 to-white/60"
          style={{
            height: '200px',
            transform: 'translateX(-50%)',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: scrollProgress }}
          transition={{ duration: 0.3 }}
        />

        {/* Section indicators */}
        <div className="flex flex-col space-y-8">
          {sections.map((section, index) => (
            <motion.button
              key={section.name}
              onClick={() => {
                document.getElementById(section.name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative flex items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active section indicator */}
              <motion.div
                className={`absolute left-1/2 top-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${section.color} opacity-20`}
                style={{
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: activeSection === index ? 1.5 : 0,
                  opacity: activeSection === index ? 0.3 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Section icon */}
              <motion.div
                className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                  activeSection === index 
                    ? 'bg-white text-black shadow-lg' 
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
                animate={{
                  scale: activeSection === index ? 1.2 : 1,
                  rotate: activeSection === index ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                {section.icon}
              </motion.div>

              {/* Section name tooltip */}
              <motion.div
                className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <div className={`glass px-4 py-2 rounded-lg bg-gradient-to-r ${section.color} bg-opacity-20 backdrop-blur-sm`}>
                  <span className="text-sm font-medium text-white whitespace-nowrap">
                    {section.name}
                  </span>
                </div>
              </motion.div>

              {/* Connection line to next section */}
              {index < sections.length - 1 && (
                <motion.div
                  className="absolute left-1/2 top-8 w-0.5 h-8 bg-gradient-to-b from-white/40 to-white/20"
                  style={{ transform: 'translateX(-50%)' }}
                  animate={{
                    opacity: activeSection === index ? 1 : 0.3,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Floating energy particles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${20 + i * 15}px`,
                top: `${30 + i * 20}px`,
                boxShadow: '0 0 6px rgba(255,255,255,0.8)',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}