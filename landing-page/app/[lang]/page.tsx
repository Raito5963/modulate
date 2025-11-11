import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import SpecsSection from '@/components/SpecsSection';
import TeamSection from '@/components/TeamSection';
import AdvisorsSection from '@/components/AdvisorsSection';
import PreOrderForm from '@/components/PreOrderForm';
import Footer from '@/components/Footer';
import { getDictionary } from '@/lib/dictionaries';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Modulate Ergonomic Modular Keyboard",
    "alternateName": ["モジュレート", "Modulate Keyboard", "TOMOL Modulate"],
    "description": lang === 'ja' 
      ? "モジュールとエルゴノミクスが生み出す次世代キーボード。人間工学に基づいた分割型設計で、健康と効率を両立。TOMOLプロジェクトが開発するモジュラー式の自作キーボード。腱鞘炎・肩こり対策、プログラマー・エンジニア・デザイナーに最適。"
      : "Next-generation keyboard combining modular design and ergonomic excellence. Split design based on ergonomics for health and efficiency. Modular custom keyboard developed by TOMOL Project. Perfect for programmers, engineers, and designers to prevent RSI and shoulder pain.",
    "brand": {
      "@type": "Brand",
      "name": "Modulate by TOMOL"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "TOMOL Project",
      "alternateName": ["トモルプロジェクト", "TOMOL"],
      "description": lang === 'ja'
        ? "日本発のスタートアップ。エルゴノミクスとテクノロジーを融合したガジェット開発。学生起業家による革新的なキーボードプロジェクト。"
        : "Japanese startup developing gadgets that combine ergonomics and technology. Innovative keyboard project by student entrepreneurs.",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "JP",
          "addressRegion": "Japan"
        }
      }
    },
    "category": "Computer Keyboards",
    "additionalType": [
      "Ergonomic Keyboard",
      "Split Keyboard",
      "Modular Keyboard",
      "Mechanical Keyboard",
      "Wireless Keyboard",
      "Custom Keyboard"
    ],
    "keywords": lang === 'ja'
      ? "Modulate,モジュレート,TOMOLプロジェクト,キーボード,分割キーボード,スプリットキーボード,エルゴノミクス,エルゴノミクスキーボード,人間工学,モジュール,モジュラーキーボード,自作キーボード,キーボード沼,メカニカルキーボード,ホットスワップ,ガジェット,PCガジェット,スタートアップ,日本スタートアップ,学生起業,ワイヤレスキーボード,Bluetooth,プログラマー,エンジニア,デザイナー,腱鞘炎対策,肩こり予防,RSI,健康キーボード,リモートワーク,在宅勤務,テレワーク,クラウドファンディング,先行予約"
      : "Modulate,TOMOL Project,Ergonomic keyboard,Split keyboard,Modular keyboard,Custom keyboard,Mechanical keyboard,Hot-swappable,Gadget,Tech gadget,Startup,Japanese startup,Student startup,Wireless keyboard,Bluetooth,Programmer,Engineer,Designer,RSI prevention,Shoulder pain,Health keyboard,Remote work,Work from home,Crowdfunding,Pre-order,Ergonomics,Human engineering",
    "audience": {
      "@type": "Audience",
      "audienceType": lang === 'ja'
        ? "プログラマー、エンジニア、デザイナー、ライター、クリエイター、自作キーボード愛好家、キーボード沼の方、リモートワーカー、腱鞘炎に悩む方"
        : "Programmers, Engineers, Designers, Writers, Creators, Custom keyboard enthusiasts, Remote workers, People with RSI"
    },
    "material": "プラスチック、金属、電子部品",
    "features": lang === 'ja'
      ? [
          "エルゴノミクス設計で手首の負担軽減",
          "モジュール式でカスタマイズ自由",
          "ホットスワップ対応でキースイッチ交換可能",
          "Bluetoothワイヤレス接続",
          "最大3ヶ月のバッテリー駆動",
          "複数デバイス切り替え対応",
          "プログラマブルキーマップ",
          "分割型デザインで姿勢改善"
        ]
      : [
          "Ergonomic design reduces wrist strain",
          "Modular system for free customization",
          "Hot-swappable key switches",
          "Bluetooth wireless connectivity",
          "Up to 3 months battery life",
          "Multi-device switching",
          "Programmable keymaps",
          "Split design improves posture"
        ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "availabilityStarts": "2025-01-01",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "JPY"
      },
      "seller": {
        "@type": "Organization",
        "name": "TOMOL Project"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1",
      "bestRating": "5",
      "worstRating": "1"
    },
    "isRelatedTo": [
      { "@type": "Product", "name": "ErgoDox" },
      { "@type": "Product", "name": "Kinesis Advantage" },
      { "@type": "Product", "name": "ZSA Moonlander" },
      { "@type": "Product", "name": "Corne Keyboard" },
      { "@type": "Product", "name": "Lily58" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        <HeroSection dict={dict} />
        <ProblemSection dict={dict} />
        <SolutionSection dict={dict} />
        <FeaturesSection dict={dict} />
        <SpecsSection dict={dict} />
        <TeamSection dict={dict} />
        <AdvisorsSection dict={dict} />
        <PreOrderForm dict={dict} />
        <Footer dict={dict} />
      </main>
    </>
  );
}
