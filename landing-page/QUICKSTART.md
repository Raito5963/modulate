# 🚀 クイックスタートガイド

このガイドに従って、5分でランディングページを起動できます。

## ステップ1: 環境変数の設定 (2分)

### 1-1. ファイルをコピー
```bash
cd landing-page
cp .env.local.example .env.local
```

### 1-2. Gmailアプリパスワードの取得

1. [Googleアカウント](https://myaccount.google.com)にアクセス
2. 「セキュリティ」→「2段階認証プロセス」を有効化
3. [アプリパスワード](https://myaccount.google.com/apppasswords)にアクセス
4. 「その他（カスタム名）」を選択
5. 「Modulate Landing Page」と入力して生成
6. 16文字のパスワードをコピー

### 1-3. 環境変数ファイルを編集
`.env.local`を開いて、パスワードを貼り付け:
```env
EMAIL_USER=raito.5963.co@gmail.com
EMAIL_PASS=ここに16文字のアプリパスワードを貼り付け
```

## ステップ2: 開発サーバー起動 (1分)

```bash
cd landing-page
npm install  # 初回のみ
npm run dev
```

ブラウザで http://localhost:3000 を開く

## ステップ3: 確認 (2分)

### ページの確認
- ✅ 日本語版: http://localhost:3000/ja
- ✅ 英語版: http://localhost:3000/en
- ✅ 言語切り替えボタンが動作するか

### フォームの確認
1. 一番下までスクロール
2. 名前とメールアドレスを入力
3. 「予約する」ボタンをクリック
4. `raito.5963.co@gmail.com`にメールが届くか確認

## トラブルシューティング

### メールが送信されない
```bash
# 環境変数を確認
cat .env.local

# サーバーを再起動
npm run dev
```

### ポート3000が使用中
```bash
# 別のポートで起動
PORT=3001 npm run dev
```

### 依存関係のエラー
```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

## 次のステップ

1. **画像を追加**: `public/images/README.md`を参照
2. **テキストを編集**: `lib/dictionaries.ts`を編集
3. **デザインを調整**: 各コンポーネントを編集
4. **デプロイ**: `DEPLOYMENT.md`を参照

---

## 📚 ドキュメント一覧

- `README.md` - 詳細なプロジェクトドキュメント
- `DEPLOYMENT.md` - Vercelデプロイガイド
- `PROJECT_COMPLETE.md` - プロジェクト完成サマリー
- `public/images/README.md` - 画像配置ガイド
- `components/ImageImplementationExample.tsx` - 画像実装例

## 💬 質問や問題

何か問題がありましたら、以下を確認してください:

1. Node.jsのバージョン: `node -v` (v18以上推奨)
2. npmのバージョン: `npm -v` (v9以上推奨)
3. ターミナルのエラーメッセージ
4. ブラウザのコンソール（F12キー）

---

**🎉 準備完了!素晴らしいランディングページを作成しましょう!**
