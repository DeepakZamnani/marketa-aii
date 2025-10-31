'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Overview', 'Pricing', 'Features', 'About'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        fixed inset-x-0 top-0 z-50 flex items-center justify-center
        transition-all duration-300
        ${scrolled ? 'bg-white/10 backdrop-blur-xl shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="w-full max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-1 text-2xl font-bold tracking-tight"
        >
          <span className="text-[#FF6B35] font-[unbounded]">Marketa</span>
          <span className="text-white font-[ranade]"> Ai</span>
          <sup className="ml-1 text-xs text-gray-400">TM</sup>
        </motion.div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((txt, i) => (
            <motion.a
              key={txt}
              href={`#${txt.toLowerCase()}`}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              {txt}
            </motion.a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4">
          <a
            href="#login"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
          >
            Login
          </a>

          {/* CTA BUTTON */}
          <motion.a
            href="#get-started"
            className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E65100] px-5 py-2.5 text-sm font-semibold text-white shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#E65100] to-[#C43C00] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center">
              Get Started
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden text-white p-2">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </motion.nav>
  );
}