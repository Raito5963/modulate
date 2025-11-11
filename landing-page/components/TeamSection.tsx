'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dictionary } from '@/lib/dictionaries';

export default function TeamSection({ dict }: { dict: Dictionary }) {
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
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {dict.team.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-black max-w-3xl mx-auto px-4">
            {dict.team.subtitle}
          </p>
        </motion.div>

        {/* Team members grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dict.team.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              {/* Member photo */}
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-emerald-500/20 dark:border-emerald-500/20 mb-4 sm:mb-6 bg-gray-100 dark:bg-gray-800">
                {index === 0 && (
                  <img 
                    src="/images/raito.jpg" 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                )}
                {index !== 0 && (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-900/30 to-teal-900/30 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center">
                    <div className="text-center text-gray-500 dark:text-gray-500 px-4">
                      <p className="text-xs sm:text-sm">Member Photo</p>
                      <p className="text-xs hidden sm:block">400x400px</p>
                      <p className="text-xs">{member.name}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Member info */}
              <div className="p-4 sm:p-6 bg-gray-50 dark:bg-white/5 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-white/10">
                <h3 className="text-black dark:text-white text-xl sm:text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-emerald-400 mb-2 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-500 light:text-black text-base sm:text-lg">{member.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
