// import React, { useEffect, useRef, useState } from 'react';
// import { Brain, Zap, Target, BarChart3, Sparkles, Plus, ArrowUpRight } from 'lucide-react';

// const features = [
//   {
//     icon: Brain,
//     title: "Easily find and understand the information you need",
//     tags: ["Search", "Explore", "Onboard", "Analyze", "Curation", "3+"],
//     type: "main",
//     sphereCount: 5
//   },
//   {
//     icon: Sparkles,
//     title: "Create & summarize content",
//     type: "card",
//     sphereCount: 6
//   },
//   {
//     icon: Zap,
//     title: "Automate work",
//     type: "card",
//     sphereCount: 1
//   },
// ];

// export default function Features() {
//   const [gsapReady, setGsapReady] = useState(false);
//   const sectionRef = useRef(null);
//   const heroRef = useRef(null);
//   const mainCardRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
//     script.async = true;
    
//     script.onload = () => {
//       const gsapScript2 = document.createElement('script');
//       gsapScript2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
//       gsapScript2.async = true;
      
//       gsapScript2.onload = () => {
//         if (window.gsap && window.ScrollTrigger) {
//           window.gsap.registerPlugin(window.ScrollTrigger);
//           setGsapReady(true);
//         }
//       };
      
//       document.body.appendChild(gsapScript2);
//     };
    
//     document.body.appendChild(script);

//     return () => {
//       if (window.ScrollTrigger) {
//         window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       }
//       if (window.gsap) {
//         window.gsap.killTweensOf("*");
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!gsapReady || !window.gsap || !window.ScrollTrigger) return;

//     const { gsap } = window;
//     const { ScrollTrigger } = window;

//     const timer = setTimeout(() => {
//       // Hero animation
//       if (heroRef.current) {
//         gsap.from(heroRef.current.children, {
//           scrollTrigger: {
//             trigger: heroRef.current,
//             start: 'top 80%',
//             end: 'top 40%',
//             scrub: 1,
//           },
//           opacity: 0,
//           y: 60,
//           stagger: 0.15,
//         });
//       }

//       // Main card entrance
//       if (mainCardRef.current) {
//         gsap.from(mainCardRef.current, {
//           scrollTrigger: {
//             trigger: mainCardRef.current,
//             start: 'top 85%',
//             end: 'top 45%',
//             scrub: 1.5,
//           },
//           opacity: 0,
//           y: 100,
//           scale: 0.9,
//         });

//         // Animate spheres with different timings
//         const spheres = mainCardRef.current.querySelectorAll('.sphere');
//         spheres.forEach((sphere, i) => {
//           gsap.from(sphere, {
//             scrollTrigger: {
//               trigger: mainCardRef.current,
//               start: 'top 70%',
//               end: 'top 30%',
//               scrub: 2,
//             },
//             scale: 0,
//             opacity: 0,
//             delay: i * 0.1,
//           });

//           // Floating animation on scroll
//           gsap.to(sphere, {
//             scrollTrigger: {
//               trigger: mainCardRef.current,
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: 1 + (i * 0.2),
//             },
//             y: -30 - (i * 10),
//             x: (i % 2 === 0 ? 20 : -20),
//           });
//         });

//         // Animate tags
//         const tags = mainCardRef.current.querySelectorAll('.tag');
//         tags.forEach((tag, i) => {
//           gsap.from(tag, {
//             scrollTrigger: {
//               trigger: mainCardRef.current,
//               start: 'top 70%',
//               end: 'top 40%',
//               scrub: 1,
//             },
//             opacity: 0,
//             y: 20,
//             delay: i * 0.05,
//           });
//         });
//       }

//       // Card 1 animation
//       if (card1Ref.current) {
//         gsap.from(card1Ref.current, {
//           scrollTrigger: {
//             trigger: card1Ref.current,
//             start: 'top 85%',
//             end: 'top 45%',
//             scrub: 1.5,
//           },
//           opacity: 0,
//           x: -80,
//           y: 50,
//           scale: 0.9,
//         });

//         // Spheres in card 1
//         const spheres = card1Ref.current.querySelectorAll('.sphere');
//         spheres.forEach((sphere, i) => {
//           gsap.from(sphere, {
//             scrollTrigger: {
//               trigger: card1Ref.current,
//               start: 'top 70%',
//               end: 'top 40%',
//               scrub: 1.5,
//             },
//             scale: 0,
//             opacity: 0,
//             delay: i * 0.1,
//           });

//           gsap.to(sphere, {
//             scrollTrigger: {
//               trigger: card1Ref.current,
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: 1.5,
//             },
//             y: -20 - (i * 5),
//             rotation: 45,
//           });
//         });
//       }

//       // Card 2 animation
//       if (card2Ref.current) {
//         gsap.from(card2Ref.current, {
//           scrollTrigger: {
//             trigger: card2Ref.current,
//             start: 'top 85%',
//             end: 'top 45%',
//             scrub: 1.5,
//           },
//           opacity: 0,
//           x: 80,
//           y: 50,
//           scale: 0.9,
//         });

//         // Sphere in card 2
//         const sphere = card2Ref.current.querySelector('.sphere');
//         if (sphere) {
//           gsap.from(sphere, {
//             scrollTrigger: {
//               trigger: card2Ref.current,
//               start: 'top 70%',
//               end: 'top 40%',
//               scrub: 1.5,
//             },
//             scale: 0,
//             opacity: 0,
//           });

//           gsap.to(sphere, {
//             scrollTrigger: {
//               trigger: card2Ref.current,
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: 1,
//             },
//             y: -40,
//             scale: 1.1,
//             rotation: 180,
//           });
//         }
//       }

//       ScrollTrigger.refresh();
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [gsapReady]);

//   return (
//     <section ref={sectionRef} className="relative min-h-screen py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      
//       <div className="max-w-[1400px] mx-auto">
        
//         {/* Hero */}
//         <div ref={heroRef} className="mb-16 max-w-4xl">
//           <div className="inline-block mb-8">
//             <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Features</span>
//           </div>
//           <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight">
//             The Marketing AI platform for{' '}
//             <span className="font-normal">quickly & securely</span> bringing{' '}
//             <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
//               AI into the enterprise.
//             </span>
//           </h1>
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* Main Feature Card - Dark */}
//           <div 
//             ref={mainCardRef}
//             className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[32px] p-10 lg:p-12 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
//           >
//             {/* Icon */}
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-8 shadow-lg">
//               <Brain className="w-6 h-6 text-white" />
//             </div>

//             {/* Title */}
//             <h3 className="text-3xl lg:text-4xl font-light text-white mb-10 max-w-md leading-tight">
//               {features[0].title}
//             </h3>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-3 mb-12">
//               {features[0].tags.map((tag, i) => (
//                 <button 
//                   key={i}
//                   className="tag px-5 py-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
//                 >
//                   {tag}
//                 </button>
//               ))}
//             </div>

//             {/* 3D Spheres scattered */}
//             <div className="absolute bottom-8 right-8 w-64 h-64 pointer-events-none">
//               <div className="sphere absolute top-12 left-8 w-20 h-20 rounded-full bg-gradient-to-br from-orange-400/40 to-orange-600/30 blur-md"></div>
//               <div className="sphere absolute top-4 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-gray-400/30 to-gray-600/20 blur-sm"></div>
//               <div className="sphere absolute bottom-16 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-orange-300/50 to-orange-500/40 blur-lg"></div>
//               <div className="sphere absolute bottom-8 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-gray-500/30 to-gray-700/20 blur-md"></div>
//               <div className="sphere absolute top-20 right-24 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/40 to-orange-700/30 blur-sm"></div>
//             </div>

//             {/* Expand indicator */}
//             <div className="absolute bottom-8 left-10 flex items-center gap-2 text-white/60 text-sm">
//               <span>Find & understand information</span>
//               <ArrowUpRight className="w-4 h-4" />
//             </div>
//           </div>

//           {/* Side Card 1 - Light with spheres */}
//           <div 
//             ref={card1Ref}
//             className="bg-gradient-to-br from-gray-100 to-white rounded-[32px] p-10 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500"
//           >
//             {/* Icon */}
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-8 shadow-lg">
//               <Sparkles className="w-6 h-6 text-white" />
//             </div>

//             {/* Title */}
//             <h3 className="text-2xl font-light text-gray-900 mb-8 leading-tight">
//               {features[1].title}
//             </h3>

//             {/* Plus button */}
//             <button className="absolute bottom-8 right-8 w-12 h-12 bg-gray-900 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
//               <Plus className="w-6 h-6 text-white" />
//             </button>

//             {/* Multiple 3D spheres */}
//             <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none">
//               <div className="sphere absolute top-8 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-orange-300/50 to-orange-500/40 blur-md"></div>
//               <div className="sphere absolute top-16 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-gray-300/40 to-gray-400/30 blur-sm"></div>
//               <div className="sphere absolute bottom-4 left-12 w-20 h-20 rounded-full bg-gradient-to-br from-orange-400/60 to-orange-600/50 blur-lg"></div>
//               <div className="sphere absolute bottom-8 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-gray-400/40 to-gray-500/30 blur-md"></div>
//               <div className="sphere absolute top-4 left-20 w-10 h-10 rounded-full bg-gradient-to-br from-orange-200/40 to-orange-400/30 blur-sm"></div>
//               <div className="sphere absolute bottom-16 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-gray-300/50 to-gray-400/40 blur-md"></div>
//             </div>
//           </div>

//           {/* Side Card 2 - Light with single large sphere */}
//           <div 
//             ref={card2Ref}
//             className="lg:col-start-3 bg-gradient-to-br from-gray-100 to-white rounded-[32px] p-10 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500"
//           >
//             {/* Icon */}
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-8 shadow-lg">
//               <Zap className="w-6 h-6 text-white" />
//             </div>

//             {/* Title */}
//             <h3 className="text-2xl font-light text-gray-900 mb-8 leading-tight">
//               {features[2].title}
//             </h3>

//             {/* Plus button */}
//             <button className="absolute bottom-8 right-8 w-12 h-12 bg-gray-900 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
//               <Plus className="w-6 h-6 text-white" />
//             </button>

//             {/* Large single 3D sphere with glow */}
//             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-32 pointer-events-none">
//               <div className="sphere absolute inset-0 rounded-full bg-gradient-to-br from-green-300/70 to-green-500/60 blur-2xl animate-pulse"></div>
//               <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-200 to-green-400 shadow-2xl"></div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useRef, useState } from 'react';
// import { CreditCard, Sparkles, MessageSquare, Image, TrendingUp, Bot, ArrowUpRight } from 'lucide-react';

// const features = [
//   {
//     icon: Bot,
//     title: "AI Chatbot for All Your Marketing & CRM Solutions",
//     description: "Get instant answers, strategies, and insights 24/7. Your intelligent copilot for every business decision.",
//     tags: ["24/7 Support", "Smart Insights", "Strategy", "Automation"],
//   },
//   {
//     icon: CreditCard,
//     title: "Smart Billing Management",
//     description: "Complete billing software built right in. Manage invoices, payments, and financial tracking effortlessly.",
//   },
//   {
//     icon: Sparkles,
//     title: "AI-Powered Offer Generation",
//     description: "Create compelling offers that convert. AI analyzes your customers and generates personalized deals.",
//   },
//   {
//     icon: MessageSquare,
//     title: "Intelligent Customer Messaging",
//     description: "Automate conversations while keeping the personal touch. Engage customers at the perfect moment.",
//   },
//   {
//     icon: Image,
//     title: "AI Poster & Visual Generation",
//     description: "Design stunning marketing materials in seconds. From social posts to promotional banners.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Business Analytics with AI",
//     description: "Transform data into actionable insights. Understand trends, predict outcomes, grow smarter.",
//   },
// ];

// export default function Features() {
//   const [gsapReady, setGsapReady] = useState(false);
//   const sectionRef = useRef(null);
//   const heroRef = useRef(null);
//   const mainFeatureRef = useRef(null);
//   const feature1Ref = useRef(null);
//   const feature2Ref = useRef(null);
//   const feature3Ref = useRef(null);
//   const feature4Ref = useRef(null);
//   const feature5Ref = useRef(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
//     script.async = true;
    
//     script.onload = () => {
//       const gsapScript2 = document.createElement('script');
//       gsapScript2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
//       gsapScript2.async = true;
      
//       gsapScript2.onload = () => {
//         if (window.gsap && window.ScrollTrigger) {
//           window.gsap.registerPlugin(window.ScrollTrigger);
//           setGsapReady(true);
//         }
//       };
      
//       document.body.appendChild(gsapScript2);
//     };
    
//     document.body.appendChild(script);

//     return () => {
//       if (window.ScrollTrigger) {
//         window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       }
//       if (window.gsap) {
//         window.gsap.killTweensOf("*");
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!gsapReady || !window.gsap || !window.ScrollTrigger) return;

//     const { gsap } = window;
//     const { ScrollTrigger } = window;

//     const timer = setTimeout(() => {
//       // Hero animation
//       if (heroRef.current) {
//         gsap.from(heroRef.current.children, {
//           scrollTrigger: {
//             trigger: heroRef.current,
//             start: 'top 80%',
//             end: 'top 40%',
//             scrub: 1,
//           },
//           opacity: 0,
//           y: 60,
//           stagger: 0.15,
//         });
//       }

//       // Main feature animation
//       if (mainFeatureRef.current) {
//         gsap.from(mainFeatureRef.current.querySelector('.feature-content'), {
//           scrollTrigger: {
//             trigger: mainFeatureRef.current,
//             start: 'top 85%',
//             end: 'top 45%',
//             scrub: 1.5,
//           },
//           opacity: 0,
//           y: 80,
//         });

//         const spheres = mainFeatureRef.current.querySelectorAll('.sphere');
//         spheres.forEach((sphere, i) => {
//           gsap.from(sphere, {
//             scrollTrigger: {
//               trigger: mainFeatureRef.current,
//               start: 'top 70%',
//               end: 'top 30%',
//               scrub: 2,
//             },
//             scale: 0,
//             opacity: 0,
//           });

//           gsap.to(sphere, {
//             scrollTrigger: {
//               trigger: mainFeatureRef.current,
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: 1,
//             },
//             y: -30,
//           });
//         });
//       }

//       // Feature 1 animation
//       if (feature1Ref.current) {
//         gsap.from(feature1Ref.current, {
//           scrollTrigger: {
//             trigger: feature1Ref.current,
//             start: 'top 85%',
//             end: 'top 50%',
//             scrub: 1.5,
//           },
//           opacity: 0,
//           x: -60,
//         });
//       }

//       // Feature 2 animation
//       if (feature2Ref.current) {
//         gsap.from(feature2Ref.current, {
//           scrollTrigger: {
//             trigger: feature2Ref.current,
//             start: 'top 85%',
//             end: 'top 50%',
//             scrub: 1.5,
//           },
//           opacity: 0,
//           x: 60,
//         });
//       }

//       // Feature 3 animation
//       if (feature3Ref.current) {
//         gsap.from(feature3Ref.current, {
//           scrollTrigger: {
//             trigger: feature3Ref.current,
//             start: 'top 85%',
//             end: 'top 50%',
//             scrub: 1.5,
//           },
//           opacity: 0,
//           y: 60,
//         });
//       }

//       // Feature 4 animation
//       if (feature4Ref.current) {
//         gsap.from(feature4Ref.current, {
//           scrollTrigger: {
//             trigger: feature4Ref.current,
//             start: 'top 85%',
//             end: 'top 50%',
//             scrub: 1.5,
//           },
//           opacity: 0,
//           scale: 0.9,
//         });
//       }

//       // Feature 5 animation
//       if (feature5Ref.current) {
//         gsap.from(feature5Ref.current, {
//           scrollTrigger: {
//             trigger: feature5Ref.current,
//             start: 'top 85%',
//             end: 'top 50%',
//             scrub: 1.5,
//           },
//           opacity: 0,
//           y: 60,
//         });
//       }

//       ScrollTrigger.refresh();
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [gsapReady]);

//   return (
//     <section ref={sectionRef} className="relative min-h-screen py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-300/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-[1400px] mx-auto relative z-10">
        
//         {/* Hero */}
//         <div ref={heroRef} className="mb-32 max-w-4xl">
//           <div className="inline-block mb-8">
//             <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Features</span>
//           </div>
//           <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight mb-8">
//             The Marketing AI platform for{' '}
//             <span className="font-normal">quickly & securely</span> bringing{' '}
//             <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
//               AI into your business.
//             </span>
//           </h1>
//         </div>

//         {/* Main Feature - AI Chatbot - Cinematic Section */}
//         <div ref={mainFeatureRef} className="mb-48 relative">
//           <div className="feature-content grid lg:grid-cols-12 gap-12 items-center">
//             {/* Left Content */}
//             <div className="lg:col-span-7">
//               <div className="inline-flex items-center gap-4 mb-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
//                   <Bot className="w-10 h-10 text-white" />
//                 </div>
//                 <div className="h-px flex-1 bg-gradient-to-r from-orange-400 to-transparent"></div>
//               </div>

//               <h2 className="text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
//                 {features[0].title}
//               </h2>

//               <p className="text-2xl text-gray-600 mb-10 leading-relaxed font-light">
//                 {features[0].description}
//               </p>

//               <div className="flex flex-wrap gap-3 mb-10">
//                 {features[0].tags.map((tag, i) => (
//                   <span 
//                     key={i}
//                     className="px-6 py-3 text-orange-600 text-sm font-medium border-2 border-orange-400 hover:bg-orange-50 transition-colors"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <button className="inline-flex items-center gap-3 text-lg font-medium text-gray-900 group">
//                 Explore AI Chatbot
//                 <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
//                   <ArrowUpRight className="w-6 h-6 text-white" />
//                 </div>
//               </button>
//             </div>

//             {/* Right Visual */}
//             <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
//               <div className="sphere absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400/50 to-orange-600/40 blur-2xl"></div>
//               <div className="sphere absolute top-10 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-gray-400/40 to-gray-600/30 blur-xl"></div>
//               <div className="sphere absolute bottom-32 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-orange-300/60 to-orange-500/50 blur-3xl"></div>
//               <div className="sphere absolute bottom-20 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-gray-500/40 to-gray-700/30 blur-xl"></div>
//               <div className="sphere absolute top-40 right-32 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/50 to-orange-700/40 blur-lg"></div>
//             </div>
//           </div>

//           {/* Decorative Line */}
//           <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
//         </div>

//         {/* Feature 1 & 2 - Side by Side Text Blocks */}
//         <div className="mb-40 grid lg:grid-cols-2 gap-20 items-start">
//           <div ref={feature1Ref} className="border-l-4 border-orange-500 pl-8">
//             <div className="mb-6">
//               <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6">
//                 <CreditCard className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-4xl font-light text-gray-900">{features[1].title}</h3>
//             </div>
//             <p className="text-xl text-gray-600 leading-relaxed font-light">{features[1].description}</p>
//           </div>

//           <div ref={feature2Ref} className="border-l-4 border-orange-500 pl-8">
//             <div className="mb-6">
//               <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6">
//                 <Sparkles className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-4xl font-light text-gray-900">{features[2].title}</h3>
//             </div>
//             <p className="text-xl text-gray-600 leading-relaxed font-light">{features[2].description}</p>
//           </div>
//         </div>

//         {/* Feature 3 - Full Width Centered Statement */}
//         <div ref={feature3Ref} className="mb-40 text-center max-w-5xl mx-auto py-20 border-y-2 border-orange-300">
//           <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-10 shadow-2xl">
//             <MessageSquare className="w-12 h-12 text-white" />
//           </div>
//           <h3 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">{features[3].title}</h3>
//           <p className="text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">{features[3].description}</p>
//         </div>

//         {/* Feature 4 - Diagonal Layout */}
//         <div ref={feature4Ref} className="mb-40 relative py-20">
//           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
          
//           <div className="grid lg:grid-cols-3 gap-12 items-start">
//             <div className="flex justify-start">
//               <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
//                 <Image className="w-16 h-16 text-white" />
//               </div>
//             </div>
//             <div className="lg:col-span-2">
//               <h3 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">{features[4].title}</h3>
//               <p className="text-xl text-gray-600 leading-relaxed font-light">{features[4].description}</p>
//             </div>
//           </div>

//           <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-orange-400 to-transparent"></div>
//         </div>

//         {/* Feature 5 - Magazine Style */}
//         <div ref={feature5Ref} className="mb-20">
//           <div className="grid lg:grid-cols-5 gap-12 items-start">
//             <div className="lg:col-span-1 flex justify-start">
//               <div className="w-40 h-40 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl">
//                 <TrendingUp className="w-20 h-20 text-white" />
//               </div>
//             </div>
//             <div className="lg:col-span-4 border-t-4 border-orange-500 pt-10">
//               <h3 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">{features[5].title}</h3>
//               <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl">{features[5].description}</p>
//               <button className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-orange-600 hover:text-orange-700 group">
//                 View Analytics Dashboard
//                 <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useRef, useState } from 'react';
// import { CreditCard, Sparkles, MessageSquare, Image, TrendingUp, Bot, ArrowUpRight } from 'lucide-react';

// const features = [
//   {
//     icon: Bot,
//     title: "AI Chatbot for All Your Marketing & CRM Solutions",
//     description: "Get instant answers, strategies, and insights 24/7. Your intelligent copilot for every business decision.",
//     tags: ["24/7 Support", "Smart Insights", "Strategy", "Automation"],
//   },
//   {
//     icon: CreditCard,
//     title: "Smart Billing Management",
//     description: "Complete billing software built right in. Manage invoices, payments, and financial tracking effortlessly.",
//   },
//   {
//     icon: Sparkles,
//     title: "AI-Powered Offer Generation",
//     description: "Create compelling offers that convert. AI analyzes your customers and generates personalized deals.",
//   },
//   {
//     icon: MessageSquare,
//     title: "Intelligent Customer Messaging",
//     description: "Automate conversations while keeping the personal touch. Engage customers at the perfect moment.",
//   },
//   {
//     icon: Image,
//     title: "AI Poster & Visual Generation",
//     description: "Design stunning marketing materials in seconds. From social posts to promotional banners.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Business Analytics with AI",
//     description: "Transform data into actionable insights. Understand trends, predict outcomes, grow smarter.",
//   },
// ];

// export default function Features() {
//   const [gsapReady, setGsapReady] = useState(false);
//   const sectionRef = useRef(null);
//   const heroRef = useRef(null);
//   const mainFeatureRef = useRef(null);
//   const feature1Ref = useRef(null);
//   const feature2Ref = useRef(null);
//   const feature3Ref = useRef(null);
//   const feature4Ref = useRef(null);
//   const feature5Ref = useRef(null);
//   const orbRef = useRef(null);
//   const orb2Ref = useRef(null);
//   const progressRef = useRef(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
//     script.async = true;
    
//     script.onload = () => {
//       const gsapScript2 = document.createElement('script');
//       gsapScript2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
//       gsapScript2.async = true;
      
//       gsapScript2.onload = () => {
//         if (window.gsap && window.ScrollTrigger) {
//           window.gsap.registerPlugin(window.ScrollTrigger);
//           setGsapReady(true);
//         }
//       };
      
//       document.body.appendChild(gsapScript2);
//     };
    
//     document.body.appendChild(script);

//     return () => {
//       if (window.ScrollTrigger) {
//         window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       }
//       if (window.gsap) {
//         window.gsap.killTweensOf("*");
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!gsapReady || !window.gsap || !window.ScrollTrigger) return;

//     const { gsap } = window;
//     const { ScrollTrigger } = window;

//     // Kill any existing animations first
//     gsap.killTweensOf("*");

//     // Hero animation - simpler onEnter
//     if (heroRef.current) {
//       ScrollTrigger.create({
//         trigger: heroRef.current,
//         start: 'top 90%',
//         onEnter: () => gsap.fromTo(heroRef.current.children, 
//           { opacity: 0, y: 60 }, 
//           { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
//         ),
//       });
//     }

//     // Main feature animation
//     if (mainFeatureRef.current) {
//       ScrollTrigger.create({
//         trigger: mainFeatureRef.current,
//         start: 'top 90%',
//         onEnter: () => gsap.fromTo(mainFeatureRef.current.querySelector('.feature-content'), 
//           { opacity: 0, y: 80 }, 
//           { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
//         ),
//       });
//     }

//     // Feature 1 animation
//     if (feature1Ref.current) {
//       ScrollTrigger.create({
//         trigger: feature1Ref.current,
//         start: 'top 90%',
//         onEnter: () => gsap.fromTo(feature1Ref.current, 
//           { opacity: 0, x: -60 }, 
//           { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
//         ),
//       });
//     }

//     // Feature 2 animation
//     if (feature2Ref.current) {
//       ScrollTrigger.create({
//         trigger: feature2Ref.current,
//         start: 'top 90%',
//         onEnter: () => gsap.fromTo(feature2Ref.current, 
//           { opacity: 0, x: 60 }, 
//           { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
//         ),
//       });
//     }

//     // Feature 3 animation
//     if (feature3Ref.current) {
//       ScrollTrigger.create({
//         trigger: feature3Ref.current,
//         start: 'top 90%',
//         onEnter: () => gsap.fromTo(feature3Ref.current, 
//           { opacity: 0, y: 60 }, 
//           { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
//         ),
//       });
//     }

//     // Feature 4 animation
//     if (feature4Ref.current) {
//       ScrollTrigger.create({
//         trigger: feature4Ref.current,
//         start: 'top 90%',
//         onEnter: () => gsap.fromTo(feature4Ref.current, 
//           { opacity: 0, scale: 0.9 }, 
//           { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
//         ),
//       });
//     }

//     // Feature 5 animation
//     if (feature5Ref.current) {
//       ScrollTrigger.create({
//         trigger: feature5Ref.current,
//         start: 'top 90%',
//         onEnter: () => gsap.fromTo(feature5Ref.current, 
//           { opacity: 0, y: 60 }, 
//           { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
//         ),
//       });
//     }

//     // Floating orbs with parallax
//     if (orbRef.current && sectionRef.current) {
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: 1.5,
//         onUpdate: (self) => {
//           gsap.set(orbRef.current, { 
//             y: -300 * self.progress, 
//             x: 100 * self.progress, 
//             rotation: 180 * self.progress 
//           });
//         },
//       });
//     }

//     if (orb2Ref.current && sectionRef.current) {
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: 2,
//         onUpdate: (self) => {
//           gsap.set(orb2Ref.current, { 
//             y: 400 * self.progress, 
//             x: -150 * self.progress, 
//             rotation: -180 * self.progress 
//           });
//         },
//       });
//     }

//     // Progress bar
//     if (progressRef.current && sectionRef.current) {
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: 0.5,
//         onUpdate: (self) => {
//           gsap.set(progressRef.current, { scaleY: self.progress });
//         },
//       });
//     }

//     ScrollTrigger.refresh();
//   }, [gsapReady]);
// const openApp = () => {
//     window.open('https://app.marketa.space', '_blank', 'noopener,noreferrer');
//   };
//   return (
//     <section ref={sectionRef} className="relative py-24 px-6 lg:px-12 bg-gray-50 overflow-hidden">
      
//       {/* Progress Bar */}
//       <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
//         <div className="w-1 h-64 bg-gray-200 rounded-full overflow-hidden">
//           <div ref={progressRef} className="w-full h-full bg-orange-600 origin-top scale-y-0" />
//         </div>
//       </div>

//       {/* Floating Orbs with Parallax */}
//       <div ref={orbRef} className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-orange-400/30 rounded-full blur-3xl pointer-events-none" />
//       <div ref={orb2Ref} className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-tr from-gray-200/50 to-gray-300/30 rounded-full blur-3xl pointer-events-none" />

//       {/* Subtle Grid Background */}
//       <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
//            style={{
//              backgroundImage: `
//                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
//                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
//              `,
//              backgroundSize: '80px 80px'
//            }}
//       />

//       <div className="max-w-6xl mx-auto relative z-10">
        
//         {/* Hero */}
//         <div ref={heroRef} className="mb-20 text-center lg:text-left max-w-4xl">
//           <span className="inline-block mb-6 px-4 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Features
//           </span>
//           <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
//             The Marketing AI platform for{' '}
//             <span className="font-normal text-orange-600">quickly & securely</span>{' '}
//             bringing{' '}
//             <span className="font-normal">AI into your business.</span>
//           </h1>
//         </div>

//         {/* Main Feature */}
//         <div ref={mainFeatureRef} className="mb-20">
//           <div className="feature-content grid lg:grid-cols-2 gap-12 items-start">
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <Bot className="w-8 h-8 text-orange-600" />
//                 <div className="flex-1 h-px bg-gray-200"></div>
//               </div>
//               <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
//                 {features[0].title}
//               </h2>
//               <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
//                 {features[0].description}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {features[0].tags.map((tag, i) => (
//                   <span 
//                     key={i}
//                     className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <button onClick={openApp} className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:text-orange-600 transition-colors">
//                 Explore AI Chatbot
//                 <ArrowUpRight className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="relative h-48 lg:h-64 rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-500">
//               <img 
//                 src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
//                 alt="AI Chatbot Interface" 
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
//               <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-md">
//                 Demo
//               </div>
//             </div>
//           </div>
//           <hr className="my-12 h-px bg-gray-200" />
//         </div>

//         {/* Features 1 & 2 */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           <div ref={feature1Ref} className="space-y-4">
//             <CreditCard className="w-6 h-6 text-orange-600" />
//             <h3 className="text-2xl font-light text-gray-900 leading-tight">{features[1].title}</h3>
//             <p className="text-gray-600 leading-relaxed">{features[1].description}</p>
//           </div>
//           <div ref={feature2Ref} className="space-y-4">
//             <Sparkles className="w-6 h-6 text-orange-600" />
//             <h3 className="text-2xl font-light text-gray-900 leading-tight">{features[2].title}</h3>
//             <p className="text-gray-600 leading-relaxed">{features[2].description}</p>
//           </div>
//         </div>
//         <hr className="my-12 h-px bg-gray-200" />

//         {/* Features 3, 4, 5 - List-like arrangement aligned with upper */}
//         <div className="space-y-12 max-w-4xl mx-auto">
//           <div ref={feature3Ref} className="space-y-4">
//             <MessageSquare className="w-6 h-6 text-orange-600" />
//             <h3 className="text-2xl font-light text-gray-900 leading-tight">{features[3].title}</h3>
//             <p className="text-gray-600 leading-relaxed">{features[3].description}</p>
//           </div>

//           <div ref={feature4Ref} className="space-y-4">
//             <Image className="w-6 h-6 text-orange-600" />
//             <h3 className="text-2xl font-light text-gray-900 leading-tight">{features[4].title}</h3>
//             <p className="text-gray-600 leading-relaxed">{features[4].description}</p>
//           </div>

//           <div ref={feature5Ref} className="space-y-4" >
//             <TrendingUp className="w-6 h-6 text-orange-600" />
//             <h3 className="text-2xl font-light text-gray-900 leading-tight">{features[5].title}</h3>
//             <p className="text-gray-600 leading-relaxed">{features[5].description}</p>
//             <button onClick={openApp} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-900 border border-gray-300 rounded-md hover:border-orange-300 hover:text-orange-600 transition-colors mt-4">
//               View Analytics Dashboard
//               <ArrowUpRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef, useState } from 'react';
import { CreditCard, Sparkles, MessageSquare, Image, TrendingUp, Bot, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "AI CHATBOT",
    subtitle: "Marketing & CRM",
    description: "Get instant answers, strategies, and insights 24/7. Your intelligent copilot.",
  },
  {
    icon: CreditCard,
    title: "SMART BILLING",
    subtitle: "Management System",
    description: "Complete billing software. Manage invoices and payments effortlessly.",
  },
  {
    icon: Sparkles,
    title: "AI OFFERS",
    subtitle: "Generation Engine",
    description: "Create compelling offers that convert with personalized deals.",
  },
  {
    icon: MessageSquare,
    title: "SMART MESSAGING",
    subtitle: "Customer Engagement",
    description: "Automate conversations while keeping the personal touch.",
  },
  {
    icon: Image,
    title: "AI VISUALS",
    subtitle: "Poster Generation",
    description: "Design stunning marketing materials in seconds.",
  },
  {
    icon: TrendingUp,
    title: "ANALYTICS",
    subtitle: "Business Intelligence",
    description: "Transform data into actionable insights and predictions.",
  },
];

export default function Features() {
  const [gsapReady, setGsapReady] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const leftPanelRef = useRef(null);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    if (!gsapReady || !window.gsap || !window.ScrollTrigger || hasAnimated) return;

    const { gsap } = window;
    const { ScrollTrigger } = window;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => setHasAnimated(true),
      }
    });

    if (leftPanelRef.current) {
      const elements = leftPanelRef.current.querySelectorAll('.animate-element');
      
      gsap.set(elements, { opacity: 0, y: 30 });
      
      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }

  }, [gsapReady, hasAnimated]);

  useEffect(() => {
    let ticking = false;
    let lastFeature = currentFeature;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }
          
          const section = sectionRef.current;
          const rect = section.getBoundingClientRect();
          const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;
          
          const progress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)));
          const featureIndex = Math.min(Math.floor(progress * features.length), features.length - 1);
          
          if (featureIndex !== lastFeature) {
            lastFeature = featureIndex;
            setCurrentFeature(featureIndex);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openApp = () => {
    //  window.location.href = '/coming-soon';
    window.open('https://drive.google.com/drive/folders/1Q0anJmd4FJKEeI5SbdbWXLBUZnUH8k27', '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} className="relative bg-gray-50" style={{ height: `${features.length * 100}vh` }}>
      
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl" />
      </div>

      <div className="sticky top-0 h-screen flex items-start lg:items-center overflow-hidden pt-8 lg:pt-0" style={{ zIndex: 1 }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen lg:min-h-0">
            
            {/* Left Panel - Fixed Content */}
            <div ref={leftPanelRef} className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-1">
              <div className="animate-element inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 rounded-full">
                <span className="text-xs sm:text-xs font-bold tracking-widest text-orange-600 uppercase">
                  Solutions
                </span>
              </div>
              
              <h1 className="animate-element text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                THE FUTURE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  OF MARKETING
                </span>
              </h1>

              <p className="animate-element text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                The Marketing AI platform for <span className="text-orange-600 font-medium">quickly & securely</span> bringing AI into your business.
              </p>

              <div className="animate-element flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="space-y-2">
                  <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
                  <div className="text-sm text-gray-500 font-medium tracking-wider">
                    {String(currentFeature + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
                  </div>
                </div>
                
                <button 
                  onClick={openApp}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 group"
                >
                  Explore Features
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Panel - Animated Cards */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0">
              <div className="relative w-full h-full flex items-center justify-center">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isActive = currentFeature === index;
                  const distance = index - currentFeature;
                  
                  // Mobile: Simple vertical stack
                  // Desktop: Circular arrangement
                  let translateX = 0;
                  let translateY = 0;
                  let scale = 1;
                  let rotation = 0;
                  let opacity = 1;
                  let blurAmount = 0;
                  
                  if (isMobile) {
                    // Mobile: vertical stack with spacing
                    translateY = distance * 50;
                    scale = isActive ? 1 : 0.8;
                    opacity = isActive ? 1 : 0.3;
                    blurAmount = Math.abs(distance) === 0 ? 0 : Math.abs(distance) === 1 ? 3 : 8;
                  } else {
                    // Desktop: circular arrangement
                    const totalCards = features.length;
                    const anglePerCard = (Math.PI * 2) / totalCards;
                    const currentAngle = distance * anglePerCard;
                    
                    const radius = window.innerWidth < 1024 ? 180 : 260;
                    
                    translateX = Math.sin(currentAngle) * radius;
                    translateY = Math.cos(currentAngle) * radius * 0.3;
                    scale = isActive ? 1 : 0.6;
                    rotation = currentAngle * (180 / Math.PI) * 0.08;
                    opacity = Math.abs(distance) > 2 ? 0 : (isActive ? 1 : 0.25);
                    blurAmount = Math.abs(distance) === 0 ? 0 : Math.abs(distance) === 1 ? 8 : 15;
                  }
                  
                  return (
                    <div
                      key={index}
                      className="absolute flex items-center justify-center"
                      style={{
                        opacity: opacity,
                        transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
                        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.6s ease',
                        willChange: 'opacity, transform, filter',
                        pointerEvents: isActive ? 'auto' : 'none',
                        zIndex: isActive ? 10 : Math.max(1, 10 - Math.abs(distance)),
                        filter: `blur(${blurAmount}px)`,
                      }}
                    >
                      <div className="relative w-[260px] sm:w-[300px] lg:w-[320px] bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-7 shadow-2xl border border-gray-100 transform-gpu"
                           style={{
                             aspectRatio: '3/4',
                           }}>
                        
                        {/* Top accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-2xl lg:rounded-t-3xl" />
                        
                        {/* Icon */}
                        <div className="mb-3 lg:mb-5">
                          <div className="w-11 h-11 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                            <Icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-2.5 lg:space-y-4">
                          <div className="space-y-1">
                            <div className="font-bold inline-block px-2.5 py-0.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] tracking-widest rounded-full">
                              {feature.title}
                            </div>
                            <h3 className="text-base lg:text-xl font-semibold text-gray-900 leading-tight">
                              {feature.subtitle}
                            </h3>
                          </div>

                          <p className="text-xs lg:text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>

                        {/* Bottom section */}
                        <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 flex items-end justify-between">
                          <div className="text-3xl lg:text-5xl font-black text-orange-500/10 select-none">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <button 
                            onClick={openApp}
                            className="w-9 h-9 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group transform-gpu"
                          >
                            <ArrowUpRight className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                          </button>
                        </div>

                        {/* Decorative blurs */}
                        <div className="absolute -bottom-6 lg:-bottom-8 -right-6 lg:-right-8 w-20 lg:w-24 h-20 lg:h-24 bg-orange-300/20 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute top-1/2 -left-4 lg:-left-6 w-16 lg:w-20 h-16 lg:h-20 bg-orange-200/20 rounded-full blur-xl pointer-events-none" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}