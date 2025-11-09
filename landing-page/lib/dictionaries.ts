export type Statistic = {
  value: string;
  description: string;
};

export type SolutionFeature = {
  title: string;
  description: string;
  imagePlaceholder: string;
};

export type Feature = {
  name: string;
};

export type Spec = {
  label: string;
  value: string;
};

export type TeamMember = {
  name: string;
  role: string;
  country: string;
};

export type Advisor = {
  name: string;
  title: string;
  affiliation: string;
  comment: string;
};

export type Dictionary = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    scrollDown: string;
  };
  problem: {
    title: string;
    subtitle: string;
    statistics: Statistic[];
  };
  solution: {
    title: string;
    subtitle: string;
    features: SolutionFeature[];
  };
  features: {
    title: string;
    subtitle: string;
    items: Feature[];
  };
  specs: {
    title: string;
    subtitle: string;
    items: Spec[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  advisors: {
    title: string;
    subtitle: string;
    note: string;
    members: Advisor[];
  };
  preorder: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
    error: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

const ja: Dictionary = {
  hero: {
    title: "健康と効率を\n再定義する",
    subtitle: "モジュールとエルゴノミクスが生み出す、次世代キーボード",
    cta: "先行予約する",
    scrollDown: "スクロールして詳細を見る",
  },
  problem: {
    title: "タイピングによる痛み、\n諦めていませんか?",
    subtitle: "世界中で多くの人々がタイピングによる手や手首の痛みに苦しんでいます",
    statistics: [
      {
        value: "50%",
        description: "タイピング中に指・手首・腕に痛みを感じる人の割合",
      },
      {
        value: "12.5%",
        description: "作業効率が悪いと感じている人の割合",
      },
      {
        value: "増加中",
        description: "RSI・CTSなどの疾患リスク",
      },
    ],
  },
  solution: {
    title: "Modulateが提案する\n3つのソリューション",
    subtitle: "従来のキーボードの課題を解決する、革新的なアプローチ",
    features: [
      {
        title: "エルゴノミクスデザイン",
        description: "縦分割タイル型デザインで手首の負担を軽減し、自然な姿勢でのタイピングを実現",
        imagePlaceholder: "Ergonomic split design close-up",
      },
      {
        title: "モジュール設計",
        description: "自由に組み替えられるモジュール構造で、あなたの作業スタイルに最適化",
        imagePlaceholder: "モジュール交換の様子",
      },
      {
        title: "ワイヤレス接続",
        description: "Bluetooth接続でケーブルの煩わしさから解放。どこでも快適に作業",
        imagePlaceholder: "Wireless connectivity lifestyle",
      },
    ],
  },
  features: {
    title: "すべての機能を\nあなたのために",
    subtitle: "プログラマー、デザイナー、ライターのために設計された機能",
    items: [
      { name: "カスタマイズ可能なキーマップ" },
      { name: "ホットスワップ対応スイッチ" },
      { name: "長時間駆動バッテリー" },
      { name: "複数デバイス切り替え" },
    ],
  },
  specs: {
    title: "技術仕様",
    subtitle: "最新テクノロジーを搭載",
    items: [
      { label: "Connectivity", value: "Bluetooth 5.1 / USB-C" },
      { label: "Battery Life", value: "最大3ヶ月駆動" },
      { label: "Switches", value: "ホットスワップ対応" },
      { label: "Compatibility", value: "Windows / macOS / Linux / iOS / Android" },
      { label: "Dimensions", value: "分割式・カスタマイズ可能" },
      { label: "Weight", value: "各モジュール約200g" },
    ],
  },
  team: {
    title: "グローバルチームが開発",
    subtitle: "日本、アメリカ、フランスから集まった学生たちが協力してプロジェクトを推進",
    members: [
      {
        name: "望月輝翔",
        role: "CEO・高校生",
        country: "日本 🇯🇵",
      },
      {
        name: "Team Member",
        role: "Engineer",
        country: "アメリカ 🇺🇸",
      },
      {
        name: "Team Member",
        role: "CAD Designer",
        country: "フランス 🇫🇷",
      },
    ],
  },
  advisors: {
    title: "有識者による監修",
    subtitle: "大学教授や専門家の協力を得てプロジェクトを進めています",
    note: "※ 正式な名称は承諾を得てから公開予定です",
    members: [
      {
        name: "暦本純一教授",
        title: "UI・HCI・HA",
        affiliation: "東京大学",
        comment: "エルゴノミクスとインタラクションデザインの観点から、このプロジェクトは非常に革新的です。若い世代が健康と効率の両面からキーボードを再設計する取り組みを応援しています。",
      },
      {
        name: "専門家",
        title: "エルゴノミクス・製品設計",
        affiliation: "研究機関",
        comment: "モジュール設計とエルゴノミクスの融合は、今後のキーボード設計において重要な方向性です。",
      },
    ],
  },
  preorder: {
    title: "先行予約受付中",
    subtitle: "2025年内の出荷を予定しています。先行予約で特別価格をご用意",
    namePlaceholder: "お名前",
    emailPlaceholder: "メールアドレス",
    messagePlaceholder: "メッセージ(任意)",
    submit: "予約する",
    success: "ご予約ありがとうございます!",
    error: "エラーが発生しました。もう一度お試しください。",
  },
  footer: {
    tagline: "健康と効率の観点からキーボードを見直しましょう",
    rights: "© 2025 Modulate. All rights reserved.",
  },
};

const en: Dictionary = {
  hero: {
    title: "Redefining Health\n& Efficiency",
    subtitle: "Next-generation keyboard born from modular design and ergonomic excellence",
    cta: "Pre-Order Now",
    scrollDown: "Scroll to learn more",
  },
  problem: {
    title: "Suffering from\nTyping Pain?",
    subtitle: "Millions worldwide experience hand and wrist pain from typing",
    statistics: [
      {
        value: "50%",
        description: "Experience pain in fingers, wrists, or arms while typing",
      },
      {
        value: "12.5%",
        description: "Feel their work efficiency is poor",
      },
      {
        value: "Rising",
        description: "Risk of RSI & CTS conditions",
      },
    ],
  },
  solution: {
    title: "Three Solutions\nby Modulate",
    subtitle: "Revolutionary keyboard combining comfort and portability",
    features: [
      {
        title: "Ergonomic Design",
        description: "Vertical split-tile design reduces wrist strain and enables natural typing posture",
        imagePlaceholder: "Ergonomic split design close-up",
      },
      {
        title: "Modular System",
        description: "Freely swap modules to match your workflow. Optimized for how you work",
        imagePlaceholder: "Modular components interchange",
      },
      {
        title: "Wireless Freedom",
        description: "Bluetooth connectivity frees you from cable hassles. Work comfortably anywhere",
        imagePlaceholder: "Wireless connectivity lifestyle",
      },
    ],
  },
  features: {
    title: "Every Feature\nFor You",
    subtitle: "Designed for programmers, designers, and writers",
    items: [
      { name: "Customizable Keymaps" },
      { name: "Hot-swappable Switches" },
      { name: "Long-lasting Battery" },
      { name: "Multi-device Switching" },
    ],
  },
  specs: {
    title: "Technical Specs",
    subtitle: "Powered by cutting-edge technology",
    items: [
      { label: "Connectivity", value: "Bluetooth 5.1 / USB-C" },
      { label: "Battery Life", value: "Up to 3 months" },
      { label: "Switches", value: "Hot-swappable" },
      { label: "Compatibility", value: "Windows / macOS / Linux / iOS / Android" },
      { label: "Dimensions", value: "Split design - Customizable" },
      { label: "Weight", value: "Approx. 200g per module" },
    ],
  },
  team: {
    title: "Built by Global Team",
    subtitle: "Students from Japan, USA, and France collaborating to drive the project forward",
    members: [
      {
        name: "Raito Mochiduki",
        role: "CEO/High School Student",
        country: "Japan 🇯🇵",
      },
      {
        name: "Team Member",
        role: "Engineer",
        country: "USA 🇺🇸",
      },
      {
        name: "Team Member",
        role: "CAD Designer",
        country: "France 🇫🇷",
      },
    ],
  },
  advisors: {
    title: "Expert Supervision",
    subtitle: "Advancing the project with guidance from university professors and specialists",
    note: "※ Official names will be published upon approval",
    members: [
      {
        name: "Professor Jun Rekimoto",
        title: "UI・HCI・HA",
        affiliation: "The University of Tokyo",
        comment: "From the perspective of ergonomics and interaction design, this project is highly innovative. I support the younger generation's efforts to redesign keyboards from both health and efficiency perspectives.",
      },
      {
        name: "Specialist",
        title: "Ergonomics & Product Design",
        affiliation: "Research Institute",
        comment: "The fusion of modular design and ergonomics is an important direction for future keyboard design.",
      },
    ],
  },
  preorder: {
    title: "Pre-Order Now",
    subtitle: "Shipping planned within 2025. Special pricing for pre-orders",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    messagePlaceholder: "Message (Optional)",
    submit: "Reserve Now",
    success: "Thank you for your reservation!",
    error: "An error occurred. Please try again.",
  },
  footer: {
    tagline: "Let's review keyboards from the perspective of health and efficiency",
    rights: "© 2025 Modulate. All rights reserved.",
  },
};

export function getDictionary(lang: string): Dictionary {
  return lang === 'ja' ? ja : en;
}
