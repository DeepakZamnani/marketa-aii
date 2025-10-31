'use client';

import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import { Zap, Brain, Target, Sparkles, ArrowRight } from 'lucide-react';

const features = [
  { icon: Brain, title: 'Neural Audience Engine', desc: 'AI maps behavior, intent, and emotion in real-time.' },
  { icon: Zap, title: 'Quantum Campaign Core', desc: 'Split-second optimization across 10+ platforms.' },
  { icon: Target, title: 'Hyper-Precision Targeting', desc: '1:1 personalization at scale — no waste.' },
  { icon: Sparkles, title: 'Creative Synth', desc: 'Generate 1000+ ad variants in seconds.' },
];

const stats = [
  { value: 98, suffix: '%', label: 'Accuracy' },
  { value: 3.2, suffix: 'x', label: 'ROAS Lift' },
  { value: 47, suffix: '%', label: 'Faster Launch' },
];

export default function Overview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(smoothProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-[#f8f9fa] to-white"
    >
      {/* ---------- Floating Orbs ---------- */}
      <FloatingOrbs />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-4">
            Engineered for Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Autonomous marketing intelligence that thinks, adapts, and scales with you.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {features.map((f, i) => (
            <TiltCard key={i} {...f} index={i} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <StatCounter key={i} {...s} delay={i * 0.2} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Launch Your Co-Pilot
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 3D Tilt Card ---------- */
function TiltCard({ icon: Icon, title, desc, index }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const inView = useInView(ref, { once: true });

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / 15;
    const y = (e.clientY - r.top - r.height / 2) / 15;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        rotateX: tilt.y,
        rotateY: -tilt.x,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl h-full">
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 mb-6">
          <Icon className="w-8 h-8 text-orange-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

/* ---------- Stat Counter ---------- */
function StatCounter({ value, suffix, label, delay }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const inc = value / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(cur);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
        {count.toFixed(value % 1 ? 1 : 0)}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

/* ---------- Floating Orbs ---------- */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              i % 2 === 0
                ? 'radial-gradient(circle, #FF6B35, transparent)'
                : 'radial-gradient(circle, #E65100, transparent)',
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}