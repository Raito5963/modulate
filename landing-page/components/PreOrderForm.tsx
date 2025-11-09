'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Dictionary } from '@/lib/dictionaries';

export default function PreOrderForm({ dict }: { dict: Dictionary }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/preorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="preorder" ref={ref} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black light:bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {dict.preorder.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-black px-4">
            {dict.preorder.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={dict.preorder.namePlaceholder}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl focus:outline-none focus:border-emerald-500 transition-all text-sm sm:text-base"
              />
            </div>

            <div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={dict.preorder.emailPlaceholder}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl focus:outline-none focus:border-emerald-500 transition-all text-sm sm:text-base"
              />
            </div>

            <div>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={dict.preorder.messagePlaceholder}
                rows={4}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl focus:outline-none focus:border-emerald-500 transition-all resize-none text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-emerald-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {status === 'loading' ? '送信中...' : dict.preorder.submit}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center"
              >
                {dict.preorder.success}
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center"
              >
                {dict.preorder.error}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
