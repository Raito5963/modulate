# コンテンツ管理ガイド

すべてのコンテンツは配列で管理されており、簡単に追加・編集・削除できます。

## 📝 編集方法

`lib/dictionaries.ts`ファイルを編集することで、日本語版と英語版のコンテンツを管理できます。

---

## 1️⃣ 統計情報の追加・編集

### 場所
`dict.problem.statistics`

### 追加方法
```typescript
statistics: [
  { value: "50%", description: "タイピング中に指・手首・腕に痛みを感じる人の割合" },
  { value: "12.5%", description: "作業効率が悪いと感じている人の割合" },
  { value: "増加中", description: "RSI・CTSなどの疾患リスク" },
  // ここに新しい統計を追加
  { value: "80%", description: "プログラマーの割合" },
],
```

### フィールド
- `value`: 統計の値（数字や文字列）
- `description`: 統計の説明

---

## 2️⃣ ソリューション機能の追加・編集

### 場所
`dict.solution.features`

### 追加方法
```typescript
features: [
  {
    title: "エルゴノミクスデザイン",
    description: "縦分割タイル型デザインで手首の負担を軽減し、自然な姿勢でのタイピングを実現",
    imagePlaceholder: "Ergonomic split design close-up",
  },
  {
    title: "モジュラー設計",
    description: "作業形態に合わせてモジュールを自由に交換。あなたの働き方に最適化",
    imagePlaceholder: "Modular components interchange",
  },
  // ここに新しいソリューションを追加
  {
    title: "AIパーソナライゼーション",
    description: "AIが個人の入力パターンを学習して最適化",
    imagePlaceholder: "AI personalization interface",
  },
],
```

### フィールド
- `title`: ソリューションのタイトル
- `description`: ソリューションの詳細説明
- `imagePlaceholder`: 画像のプレースホルダー説明（実際の画像を配置する際の参考）

---

## 3️⃣ 機能一覧の追加・編集

### 場所
`dict.features.items`

### 追加方法
```typescript
items: [
  { name: "カスタマイズ可能なキーマップ" },
  { name: "ホットスワップ対応スイッチ" },
  { name: "長時間駆動バッテリー" },
  { name: "複数デバイス切り替え" },
  // ここに新しい機能を追加
  { name: "タイピング音のカスタマイズ" },
  { name: "マクロ機能" },
],
```

### フィールド
- `name`: 機能名

---

## 4️⃣ 技術仕様の追加・編集

### 場所
`dict.specs.items`

### 追加方法
```typescript
items: [
  { label: "Connectivity", value: "Bluetooth 5.1 / USB-C" },
  { label: "Battery Life", value: "最大3ヶ月駆動" },
  { label: "Switches", value: "ホットスワップ対応" },
  // ここに新しい仕様を追加
  { label: "Material", value: "アルミニウム合金" },
  { label: "Colors", value: "ブラック、ホワイト、グレー" },
],
```

### フィールド
- `label`: 仕様の項目名
- `value`: 仕様の値

---

## 5️⃣ チームメンバーの追加・編集

### 場所
`dict.team.members`

### 追加方法
```typescript
members: [
  {
    name: "望月ライト",
    role: "創設者・リードデザイナー",
    country: "日本 🇯🇵",
  },
  {
    name: "Team Member",
    role: "Hardware Engineer",
    country: "アメリカ 🇺🇸",
  },
  // ここに新しいメンバーを追加
  {
    name: "新メンバー",
    role: "Software Engineer",
    country: "イギリス 🇬🇧",
  },
],
```

### フィールド
- `name`: メンバーの名前
- `role`: 役割・肩書き
- `country`: 国名（絵文字付き推奨）

### 画像の追加
新しいメンバーを追加したら、`public/images/team-member-X.jpg`（400x400px）を配置してください。

---

## 6️⃣ 監修者の追加・編集

### 場所
`dict.advisors.members`

### 追加方法
```typescript
members: [
  {
    name: "東京大学 教授",
    title: "人間工学・インタラクションデザイン",
    affiliation: "東京大学",
  },
  {
    name: "専門家",
    title: "エルゴノミクス・製品設計",
    affiliation: "研究機関",
  },
  // ここに新しい監修者を追加
  {
    name: "山田太郎 博士",
    title: "キーボード工学",
    affiliation: "京都大学",
  },
],
```

### フィールド
- `name`: 監修者の名前
- `title`: 専門分野・肩書き
- `affiliation`: 所属機関

### 画像の追加
新しい監修者を追加したら、`public/images/advisor-X.jpg`（200x200px）を配置してください。

---

## 🌍 多言語対応

すべてのコンテンツは日本語版（`ja`）と英語版（`en`）の両方を編集する必要があります。

### 例：機能を追加する場合

#### 日本語版（`const ja`）
```typescript
items: [
  { name: "カスタマイズ可能なキーマップ" },
  { name: "新機能" },  // ← 追加
],
```

#### 英語版（`const en`）
```typescript
items: [
  { name: "Customizable Keymaps" },
  { name: "New Feature" },  // ← 追加
],
```

---

## 🎨 レイアウトの自動調整

配列の要素数が変わると、レイアウトは自動的に調整されます：

- **統計情報**: 3列グリッド（3つ以上でも自動調整）
- **ソリューション**: 左右交互表示
- **機能一覧**: 2列グリッド
- **技術仕様**: 縦積みリスト
- **チームメンバー**: 3列グリッド
- **監修者**: 2列グリッド

---

## ⚠️ 注意事項

### 1. 配列の構造を守る
各配列の要素は、指定されたフィールドをすべて含める必要があります。

❌ **間違い**
```typescript
{ name: "機能名" }  // titleフィールドが必要な場合
```

✅ **正しい**
```typescript
{ name: "機能名", title: "タイトル", description: "説明" }
```

### 2. カンマを忘れない
配列の各要素の後にはカンマを付けてください。

```typescript
items: [
  { name: "機能1" },  // ← カンマ
  { name: "機能2" },  // ← カンマ
  { name: "機能3" },  // ← 最後の要素もカンマ（推奨）
],
```

### 3. 画像のサイズを守る
- ソリューション画像: 800x600px
- チームメンバー画像: 400x400px
- 監修者画像: 200x200px

---

## 🚀 編集後の確認

```bash
# 開発サーバーを起動（自動リロード）
npm run dev

# ブラウザで確認
# http://localhost:3000/ja
# http://localhost:3000/en
```

---

## 📚 型定義

各配列の型定義は以下の通りです：

```typescript
// 統計情報
type Statistic = {
  value: string;
  description: string;
};

// ソリューション機能
type SolutionFeature = {
  title: string;
  description: string;
  imagePlaceholder: string;
};

// 機能
type Feature = {
  name: string;
};

// 技術仕様
type Spec = {
  label: string;
  value: string;
};

// チームメンバー
type TeamMember = {
  name: string;
  role: string;
  country: string;
};

// 監修者
type Advisor = {
  name: string;
  title: string;
  affiliation: string;
};
```

これらの型に従ってデータを追加することで、TypeScriptが型チェックを行い、エラーを防ぎます。

---

## 💡 ヒント

- **少しずつ追加**: 一度に大量の変更をせず、少しずつ追加してブラウザで確認
- **日英同時更新**: 日本語版を編集したら、すぐに英語版も編集
- **画像は後回しOK**: プレースホルダーのまま配置し、画像は後で追加可能
- **バックアップ**: 編集前に`dictionaries.ts`をコピーしておく

---

これで簡単にコンテンツを管理・拡張できます！🎉
