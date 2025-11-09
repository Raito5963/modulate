import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import RootLayoutClient from "./RootLayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modulate - Ergonomic Modular Keyboard",
  description: "Experience the future of typing with our customizable modular keyboard",
};

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <RootLayoutClient currentLang={lang}>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
