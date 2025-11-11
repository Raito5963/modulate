'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { Dictionary } from '@/lib/dictionaries';

export default function HeroSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background hero image */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-black">
        <img 
          src="/images/hero.jpg" 
          alt="Modulate Keyboard" 
          className="w-full h-full object-cover opacity-50 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-black dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 whitespace-pre-line leading-tight">
            {dict.hero.title}
          </h1>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 dark:text-gray-300 light:text-black mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {dict.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#preorder"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            {dict.hero.cta}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 whitespace-pre-line"
        >
          {dict.hero.disclaimer}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <span className="hidden sm:inline">{dict.hero.scrollDown}</span>
        <FiArrowDown className="text-xl sm:text-2xl" />
      </motion.div>
    </section>
  );
}
