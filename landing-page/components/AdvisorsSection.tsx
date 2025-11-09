'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dictionary } from '@/lib/dictionaries';
import { FiAward } from 'react-icons/fi';

export default function AdvisorsSection({ dict }: { dict: Dictionary }) {
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
          <div className="flex justify-center mb-4 sm:mb-6">
            <FiAward className="text-4xl sm:text-5xl md:text-6xl text-emerald-400" />
          </div>
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {dict.advisors.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-black max-w-3xl mx-auto px-4">
            {dict.advisors.subtitle}
          </p>
        </motion.div>

        {/* Advisors grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {dict.advisors.members.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center flex flex-col"
            >
              {/* Advisor photo placeholder */}
              <div className="aspect-square bg-gradient-to-br from-emerald-900/30 to-teal-900/30 dark:from-emerald-900/30 dark:to-teal-900/30 light:bg-emerald-50 rounded-xl sm:rounded-2xl flex items-center justify-center border border-emerald-500/20 dark:border-emerald-500/20 light:border-emerald-300/40 mb-4 sm:mb-6">
                {/* Placeholder for advisor photo
                    Recommended: 400x400px, professional portrait */}
                <div className="text-center text-gray-500 dark:text-gray-500 light:text-black px-4">
                  <FiAward className="text-4xl sm:text-5xl md:text-6xl text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm">Advisor Photo</p>
                  <p className="text-xs hidden sm:block">400x400px</p>
                  <p className="text-xs">{advisor.name}</p>
                </div>
              </div>
              
              {/* Advisor comment */}
              <div className="mb-4 sm:mb-6 p-4 sm:p-5 bg-emerald-100/50 dark:bg-emerald-900/10 rounded-xl border border-emerald-300/40 dark:border-emerald-500/20 flex-grow flex items-center">
                <p className="text-black dark:text-gray-300 text-sm sm:text-base leading-relaxed italic">
                  "{advisor.comment}"
                </p>
              </div>
              
              {/* Advisor info */}
              <div className="p-4 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-white/10">
                <h3 className="text-black dark:text-white text-xl sm:text-2xl font-bold mb-2 whitespace-pre-line">{advisor.name}</h3>
                <p className="text-emerald-400 mb-2 text-sm sm:text-base">{advisor.title}</p>
                <p className="text-gray-400 dark:text-gray-400 light:text-black text-xs sm:text-sm leading-relaxed">{advisor.affiliation}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center px-4"
        >
          <p className="text-gray-500 dark:text-gray-500 light:text-black text-xs sm:text-sm max-w-2xl mx-auto">
            {dict.advisors.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
