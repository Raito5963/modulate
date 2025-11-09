'use client';

import { ReactNode } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function ClientLayout({ 
  children, 
  currentLang 
}: { 
  children: ReactNode;
  currentLang: string;
}) {
  return (
    <>
      <LanguageSwitcher currentLang={currentLang} />
      <ThemeSwitcher />
      {children}
    </>
  );
}
