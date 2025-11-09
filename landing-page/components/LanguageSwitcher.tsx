'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();

  // ページロード時にスクロール位置を復元
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('scrollPosition');
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY));
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    if (lang === currentLang) return;
    
    // 現在のスクロール位置を保存
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    
    // 言語を変更
    router.push(`/${lang}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 flex gap-1 sm:gap-2 bg-gray-200/80 dark:bg-white/10 backdrop-blur-md rounded-full p-1"
    >
      <button
        onClick={() => handleLanguageChange('ja')}
        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all text-sm sm:text-base active:scale-95 ${
          currentLang === 'ja' 
            ? 'bg-white dark:bg-white text-black dark:text-black' 
            : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/20'
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all text-sm sm:text-base active:scale-95 ${
          currentLang === 'en' 
            ? 'bg-white dark:bg-white text-black dark:text-black' 
            : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/20'
        }`}
      >
        English
      </button>
    </motion.div>
  );
}
