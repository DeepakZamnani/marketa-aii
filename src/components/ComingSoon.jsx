import React, { useEffect, useRef, useState } from 'react';

export default function ComingSoon() {
  const [gsapReady, setGsapReady] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const loadingRef = useRef(null);
  const orbRef = useRef(null);
  const orb2Ref = useRef(null);
  const progressRef = useRef(null);

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
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      if (window.gsap) {
        window.gsap.killTweensOf("*");
      }
    };
  }, []);

  // Initialize animations after GSAP is ready
  useEffect(() => {
    if (!gsapReady || !window.gsap || !window.ScrollTrigger) return;

    const { gsap } = window;
    const { ScrollTrigger } = window;

    const timer = setTimeout(() => {
      // Title animation with stagger
      if (titleRef.current && titleRef.current.children.length > 0) {
        gsap.fromTo(titleRef.current.children, 
          {
            opacity: 0,
            y: 100,
          },
          {
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 1,
            },
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: 'power3.out'
          }
        );
      }

      // Subtitle fade and blur
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current,
          {
            opacity: 0,
            filter: 'blur(10px)',
            y: 30
          },
          {
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            ease: 'power2.out'
          }
        );
      }

      // Loading bar container fade in
      if (loadingRef.current) {
        const container = loadingRef.current.parentElement.parentElement;
        gsap.fromTo(container,
          {
            opacity: 0,
            y: 30,
          },
          {
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
            opacity: 1,
            y: 0,
            ease: 'power2.out'
          }
        );

        // Smooth infinite loading animation
        const tl = gsap.timeline({ repeat: -1 });
        tl.fromTo(loadingRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 2.5,
            ease: 'power1.inOut',
          }
        )
        .to(loadingRef.current, {
          scaleX: 0,
          duration: 0.8,
          ease: 'power2.in',
        })
        .set(loadingRef.current, { scaleX: 0 });
      }

      // Floating orbs with parallax
      if (orbRef.current && sectionRef.current) {
        gsap.fromTo(orbRef.current,
          { y: 0, x: 0, rotation: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
            y: -300,
            x: 100,
            rotation: 180,
            ease: 'none',
          }
        );
      }

      if (orb2Ref.current && sectionRef.current) {
        gsap.fromTo(orb2Ref.current,
          { y: 0, x: 0, rotation: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2,
            },
            y: 400,
            x: -150,
            rotation: -180,
            ease: 'none',
          }
        );
      }

      // Progress bar
      if (progressRef.current && sectionRef.current) {
        gsap.fromTo(progressRef.current,
          { scaleY: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.5,
            },
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
          }
        );
      }

      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [gsapReady]);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 px-6 bg-white overflow-hidden">
      
      {/* Progress Bar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="w-1 h-64 bg-gray-200 rounded-full overflow-hidden">
          <div ref={progressRef} className="w-full h-full bg-gradient-to-b from-orange-500 to-orange-600 origin-top scale-y-0" />
        </div>
      </div>

      {/* Floating Orbs with Parallax */}
      <div ref={orbRef} className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-orange-400/30 rounded-full blur-3xl pointer-events-none" />
      <div ref={orb2Ref} className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-tr from-gray-200/50 to-gray-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col justify-center min-h-screen">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-8">
            <span className="text-sm font-medium tracking-widest text-orange-600 uppercase">Stay Tuned</span>
          </div>
          <div ref={titleRef}>
            <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight leading-none">
              Coming
            </h2>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Soon</span>
            </h2>
          </div>
          <p ref={subtitleRef} className="text-xl text-gray-500 max-w-xl mx-auto font-light mt-8">
            Exciting things are on the way. Get ready for something extraordinary.
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mt-16">
          <div className="flex justify-center items-center flex-col gap-4">
            <p className="text-lg font-medium text-gray-600">Preparing...</p>
            <div className="w-96 max-w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                ref={loadingRef} 
                className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-full origin-left scale-x-0"
                style={{ backgroundSize: '200% 100%' }}
              />
            </div>
            <div className="flex gap-2 mt-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '1.5s' }}></span>
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '300ms', animationDuration: '1.5s' }}></span>
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '600ms', animationDuration: '1.5s' }}></span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
           style={{
             backgroundImage: `
               linear-gradient(to right, #000 1px, transparent 1px),
               linear-gradient(to bottom, #000 1px, transparent 1px)
             `,
             backgroundSize: '80px 80px'
           }}
      />
    </section>
  );
}