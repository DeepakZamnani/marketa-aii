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
    const titleText = 'MARKETA AI';
    const titleElement = titleRef.current;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    // Clear and create letter spans with improved styling
    titleElement.innerHTML = '';
    lettersRef.current = [];
    
    titleText.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.className = 'font-[unbounded] text-[8vw] sm:text-[4.5vw]';
      span.style.transformOrigin = 'center center';
      titleElement.appendChild(span);
      lettersRef.current.push(span);
      
      // Highlight first letter
      if (index === 0) {
        span.style.color = '#FF6B35';
      } else {
        span.style.color = '#ffffff';
      }
    });

    // Set initial state with smooth appearance
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

    // Responsive animation parameters
    const animationConfig = {
      glitchIntensity: isMobile ? 3 : 5,
      blurAmount: isMobile ? '1.5px' : '2px',
      baseDistance: isMobile ? 180 : isTablet ? 300 : 400,
      maxDistance: isMobile ? 350 : isTablet ? 500 : 600,
      particleCount: isMobile ? 10 : isTablet ? 15 : 20,
      subtitleOffsetY: isMobile ? 50 : isTablet ? 80 : 100,
      subtitleOffsetX: isMobile ? 60 : isTablet ? 100 : 150,
    };

    // Create main scroll timeline with smoother scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '+=500',
        scrub: 0.8,
        pin: false,
      }
    });

    // Phase 1: Gentle glitch effect
    lettersRef.current.forEach((letter, index) => {
      tl.to(letter, {
        x: () => gsap.utils.random(-animationConfig.glitchIntensity, animationConfig.glitchIntensity),
        y: () => gsap.utils.random(-animationConfig.glitchIntensity, animationConfig.glitchIntensity),
        filter: animationConfig.blurAmount,
        duration: 0.1,
      }, index * 0.01);
    });

    // Phase 2: Explosive letter animation
    lettersRef.current.forEach((letter, index) => {
      const angle = (index / lettersRef.current.length) * Math.PI * 2;
      const distance = gsap.utils.random(animationConfig.baseDistance, animationConfig.maxDistance);
      const randomX = Math.cos(angle) * distance + gsap.utils.random(-30, 30);
      const randomY = Math.sin(angle) * distance + gsap.utils.random(-30, 30);
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

    // Subtitle animations with responsive values
    tl.to(subtitleRef.current, {
      opacity: 0,
      y: -animationConfig.subtitleOffsetY,
      x: -animationConfig.subtitleOffsetX,
      rotation: -12,
      scale: 0.7,
      filter: 'blur(6px)',
      ease: 'power2.in',
    }, 0.4);

    tl.to(subtitle2Ref.current, {
      opacity: 0,
      y: animationConfig.subtitleOffsetY * 1.2,
      x: animationConfig.subtitleOffsetX * 1.2,
      rotation: 15,
      scale: 0.6,
      filter: 'blur(6px)',
      ease: 'power2.in',
    }, 0.45);

    // Particle system
    const particles = [];
    const particleSize = isMobile ? '2px' : '3px';
    
    for (let i = 0; i < animationConfig.particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = particleSize;
      particle.style.height = particleSize;
      particle.style.backgroundColor = 'currentColor';
      particle.style.borderRadius = '50%';
      particle.style.top = '50%';
      particle.style.left = '50%';
      particle.style.pointerEvents = 'none';
      containerRef.current.appendChild(particle);
      particles.push(particle);
      
      gsap.set(particle, { opacity: 0, scale: 0 });
    }

    // Animate particles with stagger
    particles.forEach((particle, index) => {
      const angle = (index / particles.length) * Math.PI * 2;
      const distance = gsap.utils.random(
        animationConfig.baseDistance * 0.75, 
        animationConfig.maxDistance * 0.75
      );
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

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-screen w-screen flex items-center justify-center text-center relative overflow-hidden px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl w-full">
        {/* Main Title */}
        <div 
          ref={titleRef}
          className="font-bold text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5vw] xl:text-[5.5vw] uppercase leading-none relative mb-4 sm:mb-6"
          style={{ 
            letterSpacing: '0.05em',
            fontWeight: '800'
          }}
        />
        
        {/* Subtitle 1 */}
        <div 
          ref={subtitleRef}
          className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] uppercase tracking-wider font-semibold text-gray-200 mb-2 sm:mb-3"
          style={{ 
            letterSpacing: '0.1em'
          }}
        >
          Your AI Based
        </div>
        
        {/* Subtitle 2 */}
        <div 
          ref={subtitle2Ref}
          className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.8vw] xl:text-[1.5vw] uppercase tracking-widest font-light text-gray-300"
          style={{ 
            letterSpacing: '0.15em'
          }}
        >
          Marketing Co-Pilot
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;