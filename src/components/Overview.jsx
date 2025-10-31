import React, { useEffect, useRef } from 'react';
import { Brain, Zap, Target, BarChart3, Sparkles, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    desc: "Deep learning analyzes your audience, content, and performance in real time.",
    number: "01"
  },
  {
    icon: Zap,
    title: "Instant Campaign Optimization",
    desc: "Auto-adjust budgets, creatives, and targeting for maximum ROI.",
    number: "02"
  },
  {
    icon: Target,
    title: "Hyper-Personalized Ads",
    desc: "Generate thousands of ad variants tailored to each user segment.",
    number: "03"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    desc: "Forecast trends, churn, and revenue with 95%+ accuracy.",
    number: "04"
  },
  {
    icon: Sparkles,
    title: "Creative Automation",
    desc: "AI writes copy, designs visuals, and A/B tests — all in seconds.",
    number: "05"
  },
];

export default function Overview() {
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRefs = useRef([]);
  const iconRefs = useRef([]);
  const numberRefs = useRef([]);
  const orbRef = useRef(null);
  const orb2Ref = useRef(null);
  const ctaRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const gsapScript2 = document.createElement('script');
      gsapScript2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      gsapScript2.async = true;
      
      gsapScript2.onload = () => {
        const { gsap } = window;
        const { ScrollTrigger } = window;
        gsap.registerPlugin(ScrollTrigger);

        // Title animation with stagger
        gsap.from(titleRef.current?.children || [], {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
          opacity: 0,
          y: 100,
          stagger: 0.2,
          ease: 'power3.out'
        });

        // Subtitle fade and blur
        gsap.from(subtitleRef.current, {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
          opacity: 0,
          filter: 'blur(10px)',
          y: 30
        });

        // Features with complex animations
        featuresRef.current.forEach((feature, index) => {
          if (feature) {
            // Feature container scale and fade
            gsap.from(feature, {
              scrollTrigger: {
                trigger: feature,
                start: 'top 90%',
                end: 'top 40%',
                scrub: 1.5,
              },
              opacity: 0,
              scale: 0.8,
              x: index % 2 === 0 ? -100 : 100,
              rotation: index % 2 === 0 ? -5 : 5,
            });

            // Pin each feature while scrolling
            ScrollTrigger.create({
              trigger: feature,
              start: 'top 30%',
              end: 'bottom 20%',
              pin: false,
              onEnter: () => {
                gsap.to(feature, {
                  scale: 1.02,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              },
              onLeave: () => {
                gsap.to(feature, {
                  scale: 1,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              },
              onEnterBack: () => {
                gsap.to(feature, {
                  scale: 1.02,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              },
              onLeaveBack: () => {
                gsap.to(feature, {
                  scale: 1,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              }
            });
          }
        });

        // Numbers with rotation and scale
        numberRefs.current.forEach((num, index) => {
          if (num) {
            gsap.from(num, {
              scrollTrigger: {
                trigger: num,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 2,
              },
              rotation: 180,
              scale: 0,
              opacity: 0,
              ease: 'back.out'
            });
          }
        });

        // Icons with spring animation
        iconRefs.current.forEach((icon, index) => {
          if (icon) {
            gsap.from(icon, {
              scrollTrigger: {
                trigger: icon,
                start: 'top 80%',
                end: 'top 40%',
                scrub: 1,
              },
              scale: 0,
              rotation: -180,
              ease: 'elastic.out(1, 0.5)'
            });

            // Continuous rotation on scroll
            gsap.to(icon, {
              scrollTrigger: {
                trigger: icon,
                start: 'top 60%',
                end: 'bottom 20%',
                scrub: 2,
              },
              rotation: 360,
            });
          }
        });

        // Lines grow on scroll
        lineRefs.current.forEach((line, index) => {
          if (line) {
            gsap.from(line, {
              scrollTrigger: {
                trigger: line,
                start: 'top 85%',
                end: 'top 50%',
                scrub: 1.5,
              },
              scaleX: 0,
              transformOrigin: 'left center',
            });
          }
        });

        // Floating orbs with parallax
        if (orbRef.current) {
          gsap.to(orbRef.current, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
            y: -300,
            x: 100,
            rotation: 180,
            scale: 1.5,
          });
        }

        if (orb2Ref.current) {
          gsap.to(orb2Ref.current, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2,
            },
            y: 400,
            x: -150,
            rotation: -180,
            scale: 0.8,
          });
        }

        // Progress bar
        if (progressRef.current) {
          gsap.to(progressRef.current, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.5,
            },
            scaleY: 1,
            transformOrigin: 'top center',
          });
        }

        // CTA with reveal
        if (ctaRef.current) {
          gsap.from(ctaRef.current, {
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              end: 'top 50%',
              scrub: 1,
            },
            opacity: 0,
            y: 80,
            scale: 0.8,
          });
        }
      };
      
      document.body.appendChild(gsapScript2);
    };
    
    document.body.appendChild(script);

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-white overflow-hidden">
      
      {/* Progress Bar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="w-1 h-64 bg-gray-200 rounded-full overflow-hidden">
          <div ref={progressRef} className="w-full h-full bg-gradient-to-b from-orange-500 to-orange-600 origin-top scale-y-0" />
        </div>
      </div>

      {/* Floating Orbs with Parallax */}
      <div ref={orbRef} className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-orange-400/30 rounded-full blur-3xl pointer-events-none" />
      <div ref={orb2Ref} className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-tr from-gray-200/50 to-gray-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-40 text-center">
          <div className="inline-block mb-8">
            <span className="text-sm font-medium tracking-widest text-orange-600 uppercase">How It Works</span>
          </div>
          <div ref={titleRef}>
            <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight leading-none">
              Intelligence
            </h2>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Redefined</span>
            </h2>
          </div>
          <p ref={subtitleRef} className="text-xl text-gray-500 max-w-xl mx-auto font-light mt-8">
            Where cutting-edge AI meets human creativity
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featuresRef.current[index] = el}
              className={`flex flex-col md:flex-row items-start gap-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Number & Icon Side */}
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="flex items-center gap-8">
                  <span 
                    ref={el => numberRefs.current[index] = el}
                    className="text-9xl font-bold text-black leading-none"
                  >
                    {feature.number}
                  </span>
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full animate-pulse" />
                    <div 
                      ref={el => iconRefs.current[index] = el}
                      className="relative w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl"
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 pt-8">
                <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                  {feature.desc}
                </p>
                
                {/* Accent Line */}
                <div 
                  ref={el => lineRefs.current[index] = el}
                  className="h-1 w-32 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent origin-left rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="mt-40 text-center">
          <div className="inline-flex flex-col items-center gap-8">
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-orange-400 to-transparent" />
            <a
              href="#get-started"
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gray-900 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 hover:gap-5 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Start Free Trial</span>
              <ArrowRight className="relative w-6 h-6 transition-transform group-hover:translate-x-2" />
            </a>
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