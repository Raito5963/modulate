import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import RootLayoutClient from "./RootLayoutClient";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isJapanese = lang === 'ja';

  return {
    title: isJapanese
      ? "Modulate | エルゴノミクス分割キーボード"
      : "Modulate | Ergonomic Split Keyboard",
    description: isJapanese
      ? "Modulateは人間工学に基づいた次世代の分割キーボード。モジュール式設計で自作キーボード愛好家やキーボード沼の方にも最適。"
      : "Modulate is a next-generation split keyboard based on ergonomics. Perfect for custom keyboard enthusiasts with modular design.",
    keywords: [
    // ブランド・プロジェクト名
    "Modulate",
    "モジュレート",
    "TOMOLプロジェクト",
    "TOMOL",
    "TOMOL Project",
    "トモルプロジェクト",
    
    // 基本キーワード
    "キーボード",
    "分割キーボード",
    "スプリットキーボード",
    "左右分離キーボード",
    "セパレートキーボード",
    
    // エルゴノミクス関連
    "エルゴノミクス",
    "エルゴノミクスキーボード",
    "人間工学",
    "人間工学キーボード",
    "ergonomics",
    "ergonomic keyboard",
    "肩こり解消",
    "手首の痛み",
    "腱鞘炎",
    "RSI",
    "反復性ストレス障害",
    "CTS",
    "手根管症候群",
    "姿勢改善",
    "健康キーボード",
    
    // モジュール関連
    "モジュール",
    "モジュラー",
    "モジュラーキーボード",
    "modular keyboard",
    "カスタマイズ",
    "カスタマイズ可能",
    "拡張性",
    
    // 自作キーボード関連
    "自作キーボード",
    "自作キーボードキット",
    "DIYキーボード",
    "キーボード自作",
    "キーボード沼",
    "メカニカルキーボード",
    "mechanical keyboard",
    "ホットスワップ",
    "hot swap",
    "キースイッチ",
    "Cherry MX",
    "キーキャップ",
    "keycaps",
    
    // テクノロジー・機能
    "ワイヤレスキーボード",
    "Bluetoothキーボード",
    "Bluetooth keyboard",
    "無線キーボード",
    "コードレスキーボード",
    "USB-C",
    "バッテリー駆動",
    "マルチデバイス",
    "複数デバイス対応",
    
    // ターゲットユーザー
    "プログラマー",
    "プログラマー向け",
    "エンジニア向け",
    "開発者向け",
    "デザイナー向け",
    "ライター向け",
    "クリエイター向け",
    "リモートワーク",
    "在宅勤務",
    "テレワーク",
    
    // ガジェット・製品カテゴリ
    "ガジェット",
    "PCガジェット",
    "デスクガジェット",
    "テックガジェット",
    "最新ガジェット",
    "便利グッズ",
    "PC周辺機器",
    "入力デバイス",
    
    // スタートアップ・ビジネス
    "スタートアップ",
    "日本スタートアップ",
    "学生起業",
    "クラウドファンディング",
    "先行予約",
    "予約販売",
    "新製品",
    
    // 比較・競合
    "ErgoDox",
    "Kinesis",
    "Moonlander",
    "Corne",
    "Lily58",
    "split keyboard japan",
    "日本製キーボード",
    
    // 英語キーワード
    "Ergonomic keyboard",
    "Split keyboard",
    "Modular keyboard",
    "Custom keyboard",
    "Mechanical keyboard",
    "Programmable keyboard",
    "Ortholinear keyboard",
    "Columnar stagger",
    "Vertical split",
    "Tenting keyboard",
    
    // 長尾キーワード
    "キーボード 腱鞘炎 対策",
    "キーボード 肩こり 予防",
    "分割キーボード おすすめ",
    "エルゴノミクスキーボード 日本",
    "プログラマー キーボード 分割",
    "自作キーボード 初心者",
    "ワイヤレス 分割キーボード",
    "モジュール式 キーボード",
    "キーボード カスタマイズ 自由",
    "健康 キーボード おすすめ",
    ],
    authors: [{ name: "Modulate Team" }],
    creator: "Raito Mochiduki",
    publisher: "Modulate",
    openGraph: {
      title: isJapanese
        ? "Modulate | 健康と効率を再定義するエルゴノミクス分割キーボード"
        : "Modulate | Ergonomic Split Keyboard Redefining Health & Efficiency",
      description: isJapanese
        ? "モジュールとエルゴノミクスが生み出す次世代キーボード。長時間タイピングする人にとって最適なキーボード。"
        : "Next-generation keyboard combining modular design and ergonomics. It is perfect for people who type for long hours.",
      url: "https://modulate.aokiju.com",
      siteName: "Modulate | Ergonomic Split Keyboard",
      locale: isJapanese ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isJapanese
        ? "Modulate | エルゴノミクス分割キーボード"
        : "Modulate | Ergonomic Split Keyboard",
      description: isJapanese
        ? "健康と効率を再定義する次世代モジュールキーボード"
        : "Next-generation modular keyboard redefining health & efficiency",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "Bp-hw0NkDuQqAU3SUb34lLqK9W21R0VQXKnz1K4rJX0",
    },
    alternates: {
      canonical: `https://modulate.tomol.jp/${lang}`,
      languages: {
        "ja": "https://modulate.tomol.jp/ja",
        "en": "https://modulate.tomol.jp/en",
      },
    },
  };
}

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
