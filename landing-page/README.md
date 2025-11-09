# Modulate Landing Page

モジュラー・エルゴノミックキーボード「Modulate」のランディングページです。

## 特徴

- 🌍 **多言語対応**: 日本語と英語に対応
- 🎨 **モダンなデザイン**: Framer Motionを使用した滑らかなアニメーション
- 📱 **レスポンシブ**: モバイルからデスクトップまで完全対応
- 📧 **先行予約フォーム**: メール送信機能付き
- ⚡ **高速**: Next.js 15 + Tailwind CSS

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local.example`を`.env.local`にコピーして、メール設定を追加します:

```bash
cp .env.local.example .env.local
```

`.env.local`を編集:

```env
EMAIL_USER=raito.5963.co@gmail.com
EMAIL_PASS=your-app-password-here
```

**重要**: Gmailを使用する場合:
1. Googleアカウントで2段階認証を有効にする
2. [アプリパスワード](https://myaccount.google.com/apppasswords)を生成
3. 生成されたパスワードを`EMAIL_PASS`に設定

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## プロジェクト構造

```
landing-page/
├── app/
│   ├── [lang]/          # 多言語ルーティング
│   │   ├── page.tsx     # メインページ
│   │   └── layout.tsx   # レイアウト
│   ├── api/
│   │   └── preorder/    # 予約フォームAPI
│   └── globals.css      # グローバルスタイル
├── components/          # Reactコンポーネント
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── FeaturesSection.tsx
│   ├── SpecsSection.tsx
│   ├── TeamSection.tsx
│   ├── PreOrderForm.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
└── lib/
    └── dictionaries.ts  # 多言語辞書
```

## 画像の追加

各セクションに画像プレースホルダーが設定されています。以下の画像を準備して`public/images/`フォルダに配置してください:

### 推奨画像一覧

1. **ヒーローセクション背景**
   - サイズ: 1920x1080px
   - 内容: キーボードのライフスタイルショット/製品写真

2. **問題セクション**
   - サイズ: 1200x675px
   - 内容: 手首の痛み/悪い姿勢のイラスト

3. **ソリューションセクション** (3枚)
   - サイズ: 各800x600px
   - 内容:
     - エルゴノミック分割デザインのクローズアップ
     - モジュール交換の様子
     - ワイヤレス使用のライフスタイルショット

4. **機能セクション**
   - サイズ: 1400x788px
   - 内容: RGBライト/カスタマイズ機能のショーケース

5. **仕様セクション**
   - サイズ: 800x800px
   - 内容: 分解図/技術図面

6. **チームセクション**
   - サイズ: 1200x675px
   - 内容: チームメンバーの協働写真

### 画像の配置方法

画像を配置したら、各コンポーネントのプレースホルダーを実際の画像に置き換えます:

```tsx
// Before (placeholder)
<div className="aspect-video bg-gradient-to-br ...">
  <div className="text-center text-gray-500">...</div>
</div>

// After (actual image)
<Image
  src="/images/hero-background.jpg"
  alt="Modulate Keyboard"
  fill
  className="object-cover"
/>
```

## 言語の切り替え

- 日本語: [http://localhost:3000/ja](http://localhost:3000/ja)
- 英語: [http://localhost:3000/en](http://localhost:3000/en)

デフォルトでは日本語ページにリダイレクトされます。

## ビルド

本番用ビルド:

```bash
npm run build
npm start
```

## デプロイ

### Vercelにデプロイ

1. GitHubにプッシュ
2. [Vercel](https://vercel.com)でインポート
3. 環境変数を設定
4. デプロイ

## 技術スタック

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Nodemailer
- **Language**: TypeScript

## ライセンス

© 2025 Modulate. All rights reserved.
