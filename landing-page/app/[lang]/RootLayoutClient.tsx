'use client';

import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from '@/components/Header';

export default function RootLayoutClient({
  children,
  currentLang,
}: {
  children: React.ReactNode;
  currentLang: string;
}) {
  return (
    <ThemeProvider>
      <Header currentLang={currentLang} />
      <div className="pt-24">
        {children}
      </div>
    </ThemeProvider>
  );
}
