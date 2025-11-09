# Vercel デプロイガイド

## 📦 Vercelへのデプロイ手順

### 1. GitHubリポジトリの準備

```bash
git add .
git commit -m "Add landing page"
git push origin main
```

### 2. Vercelにインポート

1. [Vercel](https://vercel.com)にアクセスしてログイン
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. 「modulate」リポジトリをインポート

### 3. プロジェクト設定

#### Root Directory
- `landing-page`を指定

#### Framework Preset
- Next.jsを選択（自動検出される）

#### Build & Output Settings
- Build Command: `npm run build`（デフォルト）
- Output Directory: `.next`（デフォルト）
- Install Command: `npm install`（デフォルト）

### 4. 環境変数の設定

Vercelのプロジェクト設定で以下の環境変数を追加:

```
EMAIL_USER=raito.5963.co@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**重要**: 
- Gmailの2段階認証を有効にする
- [アプリパスワード](https://myaccount.google.com/apppasswords)を生成
- 生成されたパスワードを`EMAIL_PASS`に設定

### 5. デプロイ

「Deploy」ボタンをクリックすると、自動的にビルドとデプロイが開始されます。

## 🌐 カスタムドメインの設定

デプロイ後、Vercelのプロジェクト設定から:

1. 「Domains」タブを開く
2. カスタムドメインを追加
3. DNS設定を更新

推奨ドメイン例:
- `modulate-keyboard.com`
- `getmodulate.com`
- `modulate.tech`

## 🔄 自動デプロイ

Vercelは以下のように自動デプロイされます:

- **mainブランチ**: 本番環境に自動デプロイ
- **その他のブランチ**: プレビュー環境に自動デプロイ
- **Pull Request**: プレビューリンクが自動生成

## 📊 パフォーマンス最適化

Vercelは以下を自動的に最適化:

- ✅ 画像の自動最適化
- ✅ エッジキャッシュ
- ✅ 自動SSL証明書
- ✅ グローバルCDN
- ✅ Serverless Functions

## 🐛 トラブルシューティング

### ビルドエラーが発生する場合

```bash
# ローカルで確認
npm run build

# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
```

### メール送信が失敗する場合

1. 環境変数が正しく設定されているか確認
2. Gmailのアプリパスワードを再生成
3. Gmailの「安全性の低いアプリのアクセス」設定を確認

### 多言語ルーティングの問題

- `/ja`と`/en`のルートが正しく動作するか確認
- `generateStaticParams`が正しく実装されているか確認

## 📈 分析とモニタリング

Vercel Analyticsを有効化:

```bash
npm install @vercel/analytics
```

`app/[lang]/layout.tsx`に追加:

```tsx
import { Analytics } from '@vercel/analytics/react';

// <body>の中に
<Analytics />
```

## 🔐 セキュリティ

- 環境変数は必ず暗号化して保存
- APIルートにレート制限を追加することを推奨
- CORSポリシーを適切に設定

## 📝 次のステップ

1. カスタムドメインを設定
2. Google AnalyticsやVercel Analyticsを追加
3. メールテンプレートをカスタマイズ
4. SEO最適化（メタタグ、OGP画像など）
5. 画像を実際のものに置き換え
