// 'use client';

// import React, { useState } from 'react';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Solutions from '../../pages/Solutions';
// import { Link } from 'react-router-dom';

// const HomeHeroText = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
//   const [isHovered, setIsHovered] = useState(false);

//   // 3D tilt on mouse move
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);
//   const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     mouseX.set(e.clientX - rect.left - rect.width / 2);
//     mouseY.set(e.clientY - rect.top - rect.height / 2);
//   };

//   return (
//     <div className="relative z-10 flex min-h-screen items-center justify-center px-6 overflow-hidden">
//       <motion.div
//         ref={ref}
//         className="text-center"
//         initial={{ opacity: 0, scale: 0.9, y: 40 }}
//         animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: 'easeOut' }}
//         onMouseMove={handleMouseMove}
//         style={{
//           perspective: 1000,
//         }}
//       >
//         {/* HOLOGRAPHIC TITLE */}
//         <motion.h1
//           className="relative font-bold tracking-tight"
//           style={{
//             fontSize: 'clamp(3.5rem, 11vw, 9rem)',
//             lineHeight: '1.1',
//           }}
//         >
//           {/* Orange "M" with Neon Pulse */}
//           <motion.span
//             className="inline-block font-[unbounded]"
//             style={{
//               background: 'linear-gradient(45deg, #FF6B35, #E65100, #FF8A65)',
//               backgroundSize: '200% 200%',
//               backgroundClip: 'text',
//               WebkitBackgroundClip: 'text',
              
//               color: 'transparent',
//               textShadow: '0 0 20px rgba(255, 107, 53, 0.6)',
//             }}
//             animate={{
//               backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: 'linear',
//             }}
//           >
//             M
//           </motion.span>

//           {/* Rest with Glitch + Holo Scan */}
//           <motion.span
//             className="text-white relative font-[unbounded]"
//             style={{
//               // textShadow: `
//               //   0 0 10px rgba(255,255,255,0.8),
//               //   0 0 20px rgba(0,255,255,0.4),
//               //   0 0 40px rgba(0,255,255,0.2)
//               // `,
//             }}
//           >
//             ARKETA.AI

//             {/* Holo Scan Line */}
//             <motion.span
//               className="absolute inset-x-0 top-0 h-1 bg-cyan-400 opacity-60 blur-sm"
//               animate={{ y: ['-100%', '200%'] }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             />
//           </motion.span>
//         </motion.h1>

//         {/* SUBTITLE – Digital Scan + Flicker */}
//         <motion.p
//           className="mt-3 text-[#B0B0B0] uppercase tracking-widest relative overflow-hidden"
//           style={{
//             fontSize: 'clamp(0.9rem, 2vw, 1.25rem)',
//             letterSpacing: '0.25em',
//           }}
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           Sign in to the future of marketing

//           {/* Scanline */}
//           <motion.span
//             className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
//             animate={{ y: ['-100%', '100%'] }}
//             transition={{
//               duration: 1.8,
//               repeat: Infinity,
//               ease: 'linear',
//             }}
//           />
//         </motion.p>

//        <Link to='/Solutions'>
//         <motion.button
//           className="group relative mt-10 rounded-full px-10 py-3.5 font-semibold text-white overflow-hidden"
//           style={{
//             background: 'linear-gradient(90deg, #FF6B35 0%, #E65100 100%)',
//             boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)',
//             rotateX,
//             rotateY,
//             transformStyle: 'preserve-3d',
//           }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.9 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onHoverStart={() => setIsHovered(true)}
//           onHoverEnd={() => setIsHovered(false)}
//           onTap={
//             ()=>{
//              <Link to='/Solutions'></Link>
//             }
//           }
//         >
          
//           {/* Inner Glow */}
//           <span className="relative z-10">GET STARTED</span>

//           {/* Neon Border Pulse */}
//           <motion.span
//             className="absolute inset-0 rounded-full border-2 border-transparent"
//             style={{
//               boxShadow: isHovered
//                 ? '0 0 30px #FF6B35, 0 0 50px #E65100'
//                 : '0 0 15px rgba(255, 107, 53, 0.4)',
//             }}
//             animate={{
//               boxShadow: isHovered
//                 ? [
//                     '0 0 30px #FF6B35, 0 0 50px #E65100',
//                     '0 0 40px #FF8A65, 0 0 70px #E65100',
//                     '0 0 30px #FF6B35, 0 0 50px #E65100',
//                   ]
//                 : '0 0 15px rgba(255, 107, 53, 0.4)',
//             }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           />

//           {/* Glitch on Hover */}
//           {isHovered && (
//             <>
//               <motion.span
//                 className="absolute inset-0 text-cyan-400 mix-blend-screen"
//                 animate={{ x: [-2, 2, -1, 0], opacity: [0.7, 0.7, 0] }}
//                 transition={{ duration: 0.2, repeat: 2 }}
//               >
//                 GET STARTED
//               </motion.span>
//               <motion.span
//                 className="absolute inset-0 text-pink-400 mix-blend-screen"
//                 animate={{ x: [2, -2, 1, 0], opacity: [0.7, 0.7, 0] }}
//                 transition={{ duration: 0.25, delay: 0.1 }}
//               >
//                GET STARTED
//               </motion.span>
//             </>
//           )}
//         </motion.button>
//         </Link>
//       </motion.div>

//       {/* Background Holo Grid (optional) */}
//       <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage: `
//               linear-gradient(cyan 1px, transparent 1px),
//               linear-gradient(90deg, cyan 1px, transparent 1px)
//             `,
//             backgroundSize: '50px 50px',
//             animation: 'grid-move 20s linear infinite',
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomeHeroText;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeHeroText = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const lettersRef = useRef([]);
  const subtitleRef = useRef(null);
  const subtitle2Ref = useRef(null);

  useEffect(() => {
    // Split title into individual letters
    const titleText = 'MARKETA AI';
    const titleElement = titleRef.current;
    
    // Clear and create letter spans
    titleElement.innerHTML = '';
    lettersRef.current = [];
    
    titleText.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.className='font-[unbounded] leading-[3vw]';
      span.style.transformOrigin = 'center center';
      titleElement.appendChild(span);
      lettersRef.current.push(span);
       if (index === 0) {
        span.style.color = '#FF6B35';
      } else {
        span.style.color = '#ffffff';
      }
    });

    // Set initial state for all elements
    gsap.set(lettersRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)'
    });
    
    gsap.set([subtitleRef.current, subtitle2Ref.current], {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    });

    // Create main scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '+=500',
        scrub: 0.5,
        pin: false,
      }
    });

    // Phase 1: Letters start glitching and vibrating (0-0.3)
    lettersRef.current.forEach((letter, index) => {
      tl.to(letter, {
        x: () => gsap.utils.random(-5, 5),
        y: () => gsap.utils.random(-5, 5),
        filter: 'blur(2px)',
        duration: 0.1,
      }, index * 0.01);
    });

    // Phase 2: Letters explode in different directions with trails (0.3-1)
    lettersRef.current.forEach((letter, index) => {
      // Calculate position based on index for more controlled chaos
      const angle = (index / lettersRef.current.length) * Math.PI * 2;
      const distance = gsap.utils.random(300, 600);
      const randomX = Math.cos(angle) * distance + gsap.utils.random(-100, 100);
      const randomY = Math.sin(angle) * distance + gsap.utils.random(-100, 100);
      const randomRotation = gsap.utils.random(-720, 720);
      const randomScale = gsap.utils.random(0.1, 0.4);
      
      tl.to(letter, {
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        scale: randomScale,
        opacity: 0,
        filter: 'blur(8px)',
        ease: 'power2.in',
        duration: 0.6,
      }, 0.3 + index * 0.015);
    });

    // Subtitles: Glitch and split apart
    tl.to(subtitleRef.current, {
      opacity: 0,
      y: -80,
      x: -150,
      rotation: -15,
      scale: 0.7,
      filter: 'blur(6px)',
      ease: 'power2.in',
    }, 0.4);

    tl.to(subtitle2Ref.current, {
      opacity: 0,
      y: 120,
      x: 180,
      rotation: 20,
      scale: 0.6,
      filter: 'blur(6px)',
      ease: 'power2.in',
    }, 0.45);

    // Add particle effect simulation with additional elements
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.backgroundColor = 'currentColor';
      particle.style.borderRadius = '50%';
      particle.style.top = '50%';
      particle.style.left = '50%';
      particle.style.pointerEvents = 'none';
      containerRef.current.appendChild(particle);
      particles.push(particle);
      
      gsap.set(particle, { opacity: 0, scale: 0 });
    }

    // Animate particles
    particles.forEach((particle, index) => {
      const angle = (index / particles.length) * Math.PI * 2;
      const distance = gsap.utils.random(200, 400);
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      tl.to(particle, {
        opacity: 1,
        scale: gsap.utils.random(1, 2),
        x: x,
        y: y,
        ease: 'power2.out',
      }, 0.4 + index * 0.01);
      
      tl.to(particle, {
        opacity: 0,
        scale: 0,
        ease: 'power2.in',
      }, 0.7 + index * 0.01);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-screen flex items-center justify-center text-center relative overflow-hidden">
      <div>
        <div 
          ref={titleRef}
          className="font-[ccc] text-[6.5vw] uppercase leading-[9vw] relative"
        >
        </div>
        <div 
          ref={subtitleRef}
          className="text-[2.5vw] uppercase "
        >
          Your AI Based
        </div>
        <div 
          ref={subtitle2Ref}
          className="text-[1.25vw] uppercase "
        >
          Marketing Co-Pilot
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;