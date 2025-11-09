'use client';

import { Dictionary } from '@/lib/dictionaries';

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 dark:text-gray-400 light:text-black mb-3 sm:mb-4 text-sm sm:text-base">
          {dict.footer.tagline}
        </p>
        <p className="text-gray-600 dark:text-gray-600 light:text-black text-xs sm:text-sm">
          {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
