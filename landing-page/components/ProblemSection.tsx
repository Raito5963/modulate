'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dictionary } from '@/lib/dictionaries';

export default function ProblemSection({ dict }: { dict: Dictionary }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 whitespace-pre-line leading-tight">
            {dict.problem.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-black max-w-3xl mx-auto px-4">
            {dict.problem.subtitle}
          </p>
        </motion.div>

        {/* Problem illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16 md:mb-20 mx-auto max-w-4xl"
        >
          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-red-500/20 dark:border-red-500/20">
            <img 
              src="/images/wristpain.jpg" 
              alt="Wrist pain from poor typing posture" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {dict.problem.statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 sm:p-8 bg-gray-50 dark:bg-white/5 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-white/10"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 light:text-black">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
