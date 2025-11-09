'use client';

import { ThemeProvider } from "@/contexts/ThemeContext";
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';

function Switchers({ currentLang }: { currentLang: string }) {
  return (
    <>
      <LanguageSwitcher currentLang={currentLang} />
      <ThemeSwitcher />
    </>
  );
}

export default function RootLayoutClient({
  children,
  currentLang,
}: {
  children: React.ReactNode;
  currentLang: string;
}) {
  return (
    <ThemeProvider>
      <Switchers currentLang={currentLang} />
      {children}
    </ThemeProvider>
  );
}
