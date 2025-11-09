'use client';

import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // マウント前は何も表示しない（ハイドレーションエラー防止）
  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={toggleTheme}
      className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50 p-3 sm:p-4 bg-gray-200/80 dark:bg-white/10 backdrop-blur-md rounded-full transition-all hover:bg-gray-300 dark:hover:bg-white/20 active:scale-95"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FiSun className="text-xl sm:text-2xl text-yellow-400" />
      ) : (
        <FiMoon className="text-xl sm:text-2xl text-blue-600" />
      )}
    </motion.button>
  );
}
