'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dictionary } from '@/lib/dictionaries';

export default function SolutionSection({ dict }: { dict: Dictionary }) {
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
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 whitespace-pre-line leading-tight">
            {dict.solution.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-black max-w-3xl mx-auto px-4">
            {dict.solution.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {dict.solution.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 sm:gap-10 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-emerald-500/20 dark:border-emerald-500/20 bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={`/images/${index === 0 ? 'ergonomics.jpg' : index === 1 ? 'module.jpg' : 'wireless.png'}`}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-black dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{feature.title}</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-black leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
