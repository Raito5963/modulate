'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dictionary } from '@/lib/dictionaries';

export default function SpecsSection({ dict }: { dict: Dictionary }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black light:bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {dict.specs.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-black max-w-3xl mx-auto px-4">
            {dict.specs.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Specs image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square bg-gradient-to-br from-cyan-900/30 to-blue-900/30 dark:from-cyan-900/30 dark:to-blue-900/30 light:bg-cyan-50 rounded-xl sm:rounded-2xl flex items-center justify-center border border-cyan-500/20 dark:border-cyan-500/20 light:border-cyan-300/40">
              {/* Placeholder for technical specs visualization
                  Recommended: 800x800px, exploded view or technical diagram */}
              <div className="text-center text-gray-500 dark:text-gray-500 light:text-black px-4">
                <p className="text-xs sm:text-sm">Technical Specs Image</p>
                <p className="text-xs hidden sm:block">800x800px</p>
                <p className="text-xs">Exploded view / Technical diagram</p>
              </div>
            </div>
          </motion.div>

          {/* Specs list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            {dict.specs.items.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="border-b border-gray-200 dark:border-white/10 pb-3 sm:pb-4"
              >
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 light:text-black mb-1">{spec.label}</div>
                <div className="text-base sm:text-lg md:text-xl font-semibold">{spec.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
