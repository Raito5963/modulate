/**
 * 画像を実際に使用する際の実装例
 * 
 * このファイルは、プレースホルダーを実際の画像に置き換える方法を示すサンプルです。
 * 実際のコンポーネントファイルでこれらのパターンを適用してください。
 */

import Image from 'next/image';

// ================================================
// 例1: ヒーローセクション - 背景画像
// ================================================
export function HeroSectionWithImage() {
  return (
    <section className="relative h-screen">
      {/* プレースホルダーを削除して、以下のように置き換える */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Modulate Keyboard Hero"
          fill
          className="object-cover"
          priority // 最初の画面なので優先読み込み
          quality={90}
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      {/* コンテンツはそのまま */}
      <div className="relative z-10">
        {/* ... */}
      </div>
    </section>
  );
}

// ================================================
// 例2: 問題セクション - インライン画像
// ================================================
export function ProblemSectionWithImage() {
  return (
    <section>
      <div className="max-w-4xl mx-auto">
        {/* プレースホルダーのdivを削除して以下に置き換え */}
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src="/images/problem-illustration.jpg"
            alt="Typing pain illustration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}

// ================================================
// 例3: ソリューションセクション - 複数画像
// ================================================
export function SolutionSectionWithImages() {
  const solutions = [
    {
      image: '/images/solution-ergonomic.jpg',
      alt: 'Ergonomic split keyboard design',
      title: 'エルゴノミクスデザイン',
      description: '...'
    },
    {
      image: '/images/solution-modular.jpg',
      alt: 'Modular keyboard components',
      title: 'モジュラー設計',
      description: '...'
    },
    {
      image: '/images/solution-wireless.jpg',
      alt: 'Wireless keyboard lifestyle',
      title: 'ワイヤレス接続',
      description: '...'
    }
  ];

  return (
    <section>
      {solutions.map((solution, index) => (
        <div key={index} className="flex gap-12 items-center">
          <div className="flex-1">
            {/* プレースホルダーを画像に置き換え */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={solution.image}
                alt={solution.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

// ================================================
// 例4: 固定サイズの画像（ロゴなど）
// ================================================
export function LogoExample() {
  return (
    <div className="relative w-64 h-16">
      <Image
        src="/images/modulate-logo.svg"
        alt="Modulate Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

// ================================================
// 例5: レスポンシブ画像（サイズ指定）
// ================================================
export function ResponsiveImageExample() {
  return (
    <div className="w-full">
      <Image
        src="/images/keyboard-feature.jpg"
        alt="Keyboard Feature"
        width={1400}
        height={788}
        className="w-full h-auto rounded-xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
      />
    </div>
  );
}

// ================================================
// 画像最適化のベストプラクティス
// ================================================

/**
 * 1. priority属性
 * - ファーストビューの画像には priority を追加
 * - 例: ヒーローセクションの背景画像
 * 
 * 2. sizes属性
 * - レスポンシブ画像には必ずsizesを指定
 * - ビューポートサイズに応じた適切な画像サイズを読み込む
 * 
 * 3. quality属性
 * - デフォルト: 75
 * - 重要な画像: 80-90
 * - 背景画像: 60-70
 * 
 * 4. loading属性
 * - デフォルト: "lazy"（遅延読み込み）
 * - priority指定時は自動的に "eager"
 * 
 * 5. fill vs width/height
 * - fill: 親要素のサイズに合わせる（親にposition: relativeが必要）
 * - width/height: 固定サイズまたはアスペクト比を維持
 */

// ================================================
// 画像配置チェックリスト
// ================================================
/**
 * □ 画像を public/images/ に配置
 * □ 推奨サイズ・フォーマットを確認
 * □ 画像を圧縮（TinyPNG、Squooshなど）
 * □ プレースホルダーのdivを削除
 * □ Image コンポーネントを追加
 * □ alt属性を適切に設定（SEO・アクセシビリティ）
 * □ sizes属性を設定（レスポンシブ画像）
 * □ priority属性を設定（重要な画像）
 * □ ローカルでテスト: npm run dev
 * □ ビルドでテスト: npm run build
 */
