'use client';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Header({ currentLang }: { currentLang: string }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-24">
          {/* Left side - Theme Switcher */}
          <div className="flex items-center z-10">
            <ThemeSwitcher />
          </div>
          
          {/* Center - Modulate logo/text */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={scrollToTop}
              className="text-4xl font-bold text-black dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
            >
              Modulate
            </button>
          </div>
          
          {/* Right side - Language Switcher */}
          <div className="flex items-center z-10">
            <LanguageSwitcher currentLang={currentLang} />
          </div>
        </div>
      </div>
    </header>
  );
}
