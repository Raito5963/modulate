'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Dictionary } from '@/lib/dictionaries';

export default function FeaturesSection({ dict }: { dict: Dictionary }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-white dark:bg-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 whitespace-pre-line leading-tight">
            {dict.features.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-black max-w-3xl mx-auto px-4">
            {dict.features.subtitle}
          </p>
        </motion.div>

        {/* Feature showcase image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16 md:mb-20 mx-auto max-w-5xl"
        >
          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-teal-500/20 dark:border-teal-500/20 bg-gray-100 dark:bg-gray-800">
            <img 
              src="/images/features.jpg" 
              alt="Modulate keyboard features" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {dict.features.items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-emerald-500/50 transition-all hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 active:scale-95"
            >
              <FiCheckCircle className="text-emerald-400 text-xl sm:text-2xl flex-shrink-0 mt-0.5 sm:mt-1" />
              <span className="text-sm sm:text-base md:text-lg">{feature.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
