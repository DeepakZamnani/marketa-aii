import React, { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [gsapReady, setGsapReady] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linkRefs = useRef([]);
  const ctaRef = useRef(null);
  const indicatorRef = useRef(null);
  const bgRef = useRef(null);

  const navLinks = ['Overview', 'Features', 'Pricing', 'About'];

  // Track ScrollTriggers and entrance timeline for cleanup
  const scrollTriggers = useRef([]);
  const entranceTimeline = useRef(null);

  // Load GSAP scripts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const gsapScript2 = document.createElement('script');
      gsapScript2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      gsapScript2.async = true;
      
      gsapScript2.onload = () => {
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          setGsapReady(true);
        }
      };
      
      document.body.appendChild(gsapScript2);
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      scrollTriggers.current.forEach(trigger => trigger?.kill());
      scrollTriggers.current = [];
      if (entranceTimeline.current) {
        entranceTimeline.current.kill();
      }
      if (window.gsap) {
        window.gsap.killTweensOf("*");
      }
    };
  }, []);

  // Scroll detection (for CSS fallback only)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize entrance and scroll animations after GSAP is ready
  useEffect(() => {
    if (!gsapReady || !window.gsap || !window.ScrollTrigger) return;

    const { gsap } = window;
    const { ScrollTrigger } = window;

    // Kill any existing triggers/timelines
    scrollTriggers.current.forEach(trigger => trigger?.kill());
    scrollTriggers.current = [];
    if (entranceTimeline.current) {
      entranceTimeline.current.kill();
    }

    const timer = setTimeout(() => {
      // Set pre-entrance states (invisible)
      gsap.set([logoRef.current, ctaRef.current, ...linkRefs.current], { 
        opacity: 0 
      });
      gsap.set(bgRef.current, { opacity: 0 });
      gsap.set(indicatorRef.current, { scaleX: 0 });

      // Entrance Timeline: Simple staggered fade-in on load
      entranceTimeline.current = gsap.timeline({ paused: false });
      entranceTimeline.current
        .to(logoRef.current, { 
          opacity: 1, 
          duration: 0.4, 
          ease: 'power2.out' 
        })
        .to(linkRefs.current, { 
          opacity: 1, 
          duration: 0.3, 
          stagger: 0.08, 
          ease: 'power2.out' 
        }, '-=0.2')  // Overlap with logo
        .to(ctaRef.current, { 
          opacity: 1, 
          duration: 0.3, 
          ease: 'power2.out' 
        }, '-=0.4')  // Slight delay after links
        .to(bgRef.current, { opacity: 0 }, 0)  // Bg starts transparent
        .to(indicatorRef.current, { scaleX: 0 }, 0);  // Indicator starts at 0

      // Wait for entrance to complete, then setup scroll
      entranceTimeline.current.eventCallback('onComplete', () => {
        // Now set scroll-ready states (post-entrance)
        gsap.set([logoRef.current, ctaRef.current, ...linkRefs.current], { 
          opacity: 1 
        });

        // Common ScrollTrigger config for full-page scrubbing
        const stConfig = {
          trigger: document.body,
          start: 'top top',
          end: 'bottom top',  // Full page for reliable reverse
          scrub: 1,
        };

        // Navbar background (fade in over first 200px scroll)
        if (bgRef.current) {
          const tween = gsap.to(bgRef.current, { 
            opacity: 1, 
            duration: 0.5, 
            ease: 'none' 
          });
          const st = ScrollTrigger.create({ 
            ...stConfig, 
            end: '+=200',
            scrub: 0.5,
            animation: tween 
          });
          scrollTriggers.current.push(st);
        }

        // Logo scale down on scroll
        if (logoRef.current) {
          const tween = gsap.to(logoRef.current, { 
            scale: 0.95, 
            ease: 'none' 
          });
          const st = ScrollTrigger.create({ ...stConfig, animation: tween });
          scrollTriggers.current.push(st);
        }

        // Links position change with stagger on scroll (no fade, separate staggered movement up to hide)
        if (linkRefs.current.length > 0) {
          const tween = gsap.to(linkRefs.current, {
            y: -100,
            stagger: 0.05,
            ease: 'none'
          });
          const st = ScrollTrigger.create({ ...stConfig, animation: tween });
          scrollTriggers.current.push(st);
        }

        // CTA scale on scroll
        if (ctaRef.current) {
          const tween = gsap.to(ctaRef.current, { 
            scale: 0.95, 
            ease: 'none' 
          });
          const st = ScrollTrigger.create({ ...stConfig, animation: tween });
          scrollTriggers.current.push(st);
        }

        // Progress indicator (full page)
        if (indicatorRef.current) {
          const tween = gsap.to(indicatorRef.current, {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: 'none'
          });
          const st = ScrollTrigger.create({
            ...stConfig,
            scrub: 0.5,
            animation: tween
          });
          scrollTriggers.current.push(st);
        }

        ScrollTrigger.refresh();
      });

    }, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup on re-run
      scrollTriggers.current.forEach(trigger => trigger?.kill());
      scrollTriggers.current = [];
      if (entranceTimeline.current) {
        entranceTimeline.current.kill();
      }
    };
  }, [gsapReady]);  // Still no isScrolled dep

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Transparent Background with blur */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-white/10 backdrop-blur-xl border-b border-white/10 opacity-0 transition-opacity duration-500"
      />
      
      {/* Progress Indicator */}
      <div 
        ref={indicatorRef}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 origin-left scale-x-0"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            ref={logoRef}
            href="#home" 
            className="relative group flex items-center gap-1 opacity-0"  // Initial CSS hide for safety
          >
            <span className="text-2xl font-bold text-[#FF6B35] tracking-tight">Marketa</span>
            <span className="text-2xl font-bold text-white tracking-tight">Ai</span>
            <sup className="text-xs text-gray-400 ml-1">TM</sup>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link}
                ref={el => linkRefs.current[index] = el}
                href={`#${link.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 opacity-0"  // Initial CSS hide
              >
                <span className="relative z-10">{link}</span>
                
                {/* Hover accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-8 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Right Side - Login + CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#login"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Login
            </a>

            {/* CTA Button */}
            <div ref={ctaRef} className="opacity-0">  {/* Initial CSS hide */}
              <a
                href="#get-started"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#E65100] text-white rounded-full font-semibold text-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#E65100] to-[#C43C00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Get Started</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group">
            <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-7" />
            <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300" />
            <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-7" />
          </button>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute -bottom-px left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      </div>
    </nav>
  );
}