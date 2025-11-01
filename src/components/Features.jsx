import React, { useEffect, useRef, useState } from 'react';
import { Brain, Zap, Target, BarChart3, Sparkles, Plus, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Easily find and understand the information you need",
    tags: ["Search", "Explore", "Onboard", "Analyze", "Curation", "3+"],
    type: "main",
    sphereCount: 5
  },
  {
    icon: Sparkles,
    title: "Create & summarize content",
    type: "card",
    sphereCount: 6
  },
  {
    icon: Zap,
    title: "Automate work",
    type: "card",
    sphereCount: 1
  },
];

export default function Features() {
  const [gsapReady, setGsapReady] = useState(false);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const mainCardRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

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

  useEffect(() => {
    if (!gsapReady || !window.gsap || !window.ScrollTrigger) return;

    const { gsap } = window;
    const { ScrollTrigger } = window;

    const timer = setTimeout(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.from(heroRef.current.children, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
          opacity: 0,
          y: 60,
          stagger: 0.15,
        });
      }

      // Main card entrance
      if (mainCardRef.current) {
        gsap.from(mainCardRef.current, {
          scrollTrigger: {
            trigger: mainCardRef.current,
            start: 'top 85%',
            end: 'top 45%',
            scrub: 1.5,
          },
          opacity: 0,
          y: 100,
          scale: 0.9,
        });

        // Animate spheres with different timings
        const spheres = mainCardRef.current.querySelectorAll('.sphere');
        spheres.forEach((sphere, i) => {
          gsap.from(sphere, {
            scrollTrigger: {
              trigger: mainCardRef.current,
              start: 'top 70%',
              end: 'top 30%',
              scrub: 2,
            },
            scale: 0,
            opacity: 0,
            delay: i * 0.1,
          });

          // Floating animation on scroll
          gsap.to(sphere, {
            scrollTrigger: {
              trigger: mainCardRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1 + (i * 0.2),
            },
            y: -30 - (i * 10),
            x: (i % 2 === 0 ? 20 : -20),
          });
        });

        // Animate tags
        const tags = mainCardRef.current.querySelectorAll('.tag');
        tags.forEach((tag, i) => {
          gsap.from(tag, {
            scrollTrigger: {
              trigger: mainCardRef.current,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 1,
            },
            opacity: 0,
            y: 20,
            delay: i * 0.05,
          });
        });
      }

      // Card 1 animation
      if (card1Ref.current) {
        gsap.from(card1Ref.current, {
          scrollTrigger: {
            trigger: card1Ref.current,
            start: 'top 85%',
            end: 'top 45%',
            scrub: 1.5,
          },
          opacity: 0,
          x: -80,
          y: 50,
          scale: 0.9,
        });

        // Spheres in card 1
        const spheres = card1Ref.current.querySelectorAll('.sphere');
        spheres.forEach((sphere, i) => {
          gsap.from(sphere, {
            scrollTrigger: {
              trigger: card1Ref.current,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 1.5,
            },
            scale: 0,
            opacity: 0,
            delay: i * 0.1,
          });

          gsap.to(sphere, {
            scrollTrigger: {
              trigger: card1Ref.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
            y: -20 - (i * 5),
            rotation: 45,
          });
        });
      }

      // Card 2 animation
      if (card2Ref.current) {
        gsap.from(card2Ref.current, {
          scrollTrigger: {
            trigger: card2Ref.current,
            start: 'top 85%',
            end: 'top 45%',
            scrub: 1.5,
          },
          opacity: 0,
          x: 80,
          y: 50,
          scale: 0.9,
        });

        // Sphere in card 2
        const sphere = card2Ref.current.querySelector('.sphere');
        if (sphere) {
          gsap.from(sphere, {
            scrollTrigger: {
              trigger: card2Ref.current,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 1.5,
            },
            scale: 0,
            opacity: 0,
          });

          gsap.to(sphere, {
            scrollTrigger: {
              trigger: card2Ref.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
            y: -40,
            scale: 1.1,
            rotation: 180,
          });
        }
      }

      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [gsapReady]);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* Hero */}
        <div ref={heroRef} className="mb-16 max-w-4xl">
          <div className="inline-block mb-8">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Features</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight">
            The Marketing AI platform for{' '}
            <span className="font-normal">quickly & securely</span> bringing{' '}
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              AI into the enterprise.
            </span>
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Feature Card - Dark */}
          <div 
            ref={mainCardRef}
            className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[32px] p-10 lg:p-12 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-8 shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-10 max-w-md leading-tight">
              {features[0].title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {features[0].tags.map((tag, i) => (
                <button 
                  key={i}
                  className="tag px-5 py-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* 3D Spheres scattered */}
            <div className="absolute bottom-8 right-8 w-64 h-64 pointer-events-none">
              <div className="sphere absolute top-12 left-8 w-20 h-20 rounded-full bg-gradient-to-br from-orange-400/40 to-orange-600/30 blur-md"></div>
              <div className="sphere absolute top-4 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-gray-400/30 to-gray-600/20 blur-sm"></div>
              <div className="sphere absolute bottom-16 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-orange-300/50 to-orange-500/40 blur-lg"></div>
              <div className="sphere absolute bottom-8 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-gray-500/30 to-gray-700/20 blur-md"></div>
              <div className="sphere absolute top-20 right-24 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/40 to-orange-700/30 blur-sm"></div>
            </div>

            {/* Expand indicator */}
            <div className="absolute bottom-8 left-10 flex items-center gap-2 text-white/60 text-sm">
              <span>Find & understand information</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Side Card 1 - Light with spheres */}
          <div 
            ref={card1Ref}
            className="bg-gradient-to-br from-gray-100 to-white rounded-[32px] p-10 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-8 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-light text-gray-900 mb-8 leading-tight">
              {features[1].title}
            </h3>

            {/* Plus button */}
            <button className="absolute bottom-8 right-8 w-12 h-12 bg-gray-900 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
              <Plus className="w-6 h-6 text-white" />
            </button>

            {/* Multiple 3D spheres */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none">
              <div className="sphere absolute top-8 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-orange-300/50 to-orange-500/40 blur-md"></div>
              <div className="sphere absolute top-16 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-gray-300/40 to-gray-400/30 blur-sm"></div>
              <div className="sphere absolute bottom-4 left-12 w-20 h-20 rounded-full bg-gradient-to-br from-orange-400/60 to-orange-600/50 blur-lg"></div>
              <div className="sphere absolute bottom-8 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-gray-400/40 to-gray-500/30 blur-md"></div>
              <div className="sphere absolute top-4 left-20 w-10 h-10 rounded-full bg-gradient-to-br from-orange-200/40 to-orange-400/30 blur-sm"></div>
              <div className="sphere absolute bottom-16 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-gray-300/50 to-gray-400/40 blur-md"></div>
            </div>
          </div>

          {/* Side Card 2 - Light with single large sphere */}
          <div 
            ref={card2Ref}
            className="lg:col-start-3 bg-gradient-to-br from-gray-100 to-white rounded-[32px] p-10 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-8 shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-light text-gray-900 mb-8 leading-tight">
              {features[2].title}
            </h3>

            {/* Plus button */}
            <button className="absolute bottom-8 right-8 w-12 h-12 bg-gray-900 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
              <Plus className="w-6 h-6 text-white" />
            </button>

            {/* Large single 3D sphere with glow */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-32 pointer-events-none">
              <div className="sphere absolute inset-0 rounded-full bg-gradient-to-br from-green-300/70 to-green-500/60 blur-2xl animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-200 to-green-400 shadow-2xl"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}