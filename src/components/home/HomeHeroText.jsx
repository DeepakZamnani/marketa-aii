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
      span.className = 'font-[unbounded]';
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
        end: '+=400',
        scrub: 0.5,
        pin: false,
      }
    });

    // Phase 1: Letters start glitching and vibrating
    lettersRef.current.forEach((letter, index) => {
      tl.to(letter, {
        x: () => gsap.utils.random(-5, 5),
        y: () => gsap.utils.random(-5, 5),
        filter: 'blur(2px)',
        duration: 0.1,
      }, index * 0.01);
    });

    // Phase 2: Letters explode with responsive distances
    const isMobile = window.innerWidth < 768;
    const baseDistance = isMobile ? 200 : 400;
    const maxDistance = isMobile ? 400 : 600;
    
    lettersRef.current.forEach((letter, index) => {
      const angle = (index / lettersRef.current.length) * Math.PI * 2;
      const distance = gsap.utils.random(baseDistance, maxDistance);
      const randomX = Math.cos(angle) * distance + gsap.utils.random(-50, 50);
      const randomY = Math.sin(angle) * distance + gsap.utils.random(-50, 50);
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

    // Subtitles: Glitch and split apart with responsive values
    const subtitleOffset = isMobile ? 80 : 150;
    
    tl.to(subtitleRef.current, {
      opacity: 0,
      y: isMobile ? -50 : -80,
      x: isMobile ? -80 : -150,
      rotation: -15,
      scale: 0.7,
      filter: 'blur(6px)',
      ease: 'power2.in',
    }, 0.4);

    tl.to(subtitle2Ref.current, {
      opacity: 0,
      y: isMobile ? 80 : 120,
      x: isMobile ? 100 : 180,
      rotation: 20,
      scale: 0.6,
      filter: 'blur(6px)',
      ease: 'power2.in',
    }, 0.45);

    // Add particle effect
    const particleCount = isMobile ? 12 : 20;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = isMobile ? '3px' : '4px';
      particle.style.height = isMobile ? '3px' : '4px';
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
      const distance = gsap.utils.random(isMobile ? 150 : 200, isMobile ? 300 : 400);
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
    <div ref={containerRef} className="h-screen w-screen flex items-center justify-center text-center relative overflow-hidden px-4">
      <div className="max-w-full">
        <div 
          ref={titleRef}
          className="font-bold text-[10vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[5.5vw] uppercase leading-tight relative"
          style={{ letterSpacing: '0.02em' }}
        >
        </div>
        <div 
          ref={subtitleRef}
          className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[2.5vw] uppercase mt-2 sm:mt-3"
        >
          Your AI Based
        </div>
        <div 
          ref={subtitle2Ref}
          className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.25vw] uppercase mt-1 sm:mt-2"
        >
          Marketing Co-Pilot
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;