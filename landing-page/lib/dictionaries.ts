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
  image?: string;
  bio?: string;
  experience?: string[];
  education?: string[];
};

export type Advisor = {
  name: string;
  title: string;
  affiliation: string;
  comment: string;
  image?: string;
  bio?: string;
};

export type Dictionary = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    scrollDown: string;
    disclaimer: string;
  };
  problem: {
    title: string;
    subtitle: string;
    statistics: Statistic[];
    survey: {
      description: string;
      note: string;
    };
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
    disclaimer: "※現在開発段階であるため、今後デザインが変更する可能性があります。\n作業経過などはメールでお送りします。",
  },
  problem: {
    title: "タイピングによる痛み、\n諦めていませんか?",
    subtitle: "世界中で多くの人々がタイピングによる手や手首の痛みに苦しんでいます。",
    statistics: [
      {
        value: "51%",
        description: "タイピング中に指・手首・腕に痛みを感じる人の割合",
      },
      {
        value: "13.8%",
        description: "キーボードの配列などで作業効率が悪いと感じている人の割合",
      },
      {
        value: "増加中",
        description: "キーボードが原因で、RSIやCTS、腱鞘炎などを発症している人の数",
      },
    ],
    survey: {
      description: "調査対象：世界各国、10代〜60代の男女200名を対象としたオンラインアンケート及びインタビュー調査",
      note: "※ 出典：Modulate開発チーム調査（2025年実施）",
    },
  },
  solution: {
    title: "Modulateが提案する\n3つのソリューション",
    subtitle: "従来のキーボードの課題を解決する、革新的なアプローチ。",
    features: [
      {
        title: "エルゴノミクスデザイン",
        description: "縦分割タイル型デザインで手首の負担を軽減し、自然な姿勢でのタイピングを実現。",
        imagePlaceholder: "Ergonomic split design close-up",
      },
      {
        title: "モジュール設計",
        description: "自由に組み替えられるモジュール構造で、あなたの作業スタイルに最適化。",
        imagePlaceholder: "モジュール交換の様子",
      },
      {
        title: "ワイヤレス接続",
        description: "Bluetooth接続でケーブルの煩わしさから解放。\nどこでも快適に作業が可能。",
        imagePlaceholder: "Wireless connectivity lifestyle",
      },
    ],
  },
  features: {
    title: "すべての機能を\nあなたのために",
    subtitle: "プログラマー、デザイナー、ライターのために設計された機能。",
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
    subtitle: "世界中から集まったメンバーが協力してプロジェクトを進めています",
    members: [
      {
        name: "望月輝翔",
        role: "CEO / WEB・アプリエンジニア / PCBデザイナー",
        country: "日本 🇯🇵",
        image: "/images/raito.jpg",
        bio: "中学生のころからタイピング中に痛みを感じる。解決策を調べる中で世界中に同じ悩みを持つ人がいることを知り、Modulateを立ち上げる。現在高校3年生。",
      },
      {
        name: "monide",
        role: "エンジニア",
        country: "アメリカ 🇺🇸",
        image: "/images/team/monide.jpg",
        bio: "アメリカ在住の学生。情報科学を専攻しており、エルゴノミクスのキーボードの会社に勤めている。キーボードや自作配列を製作した経験がある。",
      },
      {
        name: "掲載準備中",
        role: "CAD デザイナー",
        country: "フランス 🇫🇷",
        image: "/images/team/france.jpeg",
        bio: "掲載準備中",
      },
    ],
  },
  advisors: {
    title: "有識者による監修",
    subtitle: "大学教授や専門家の協力を得てプロジェクトを進めています。",
    note: "※ 本人から掲載許可を得て公開しています。",
    members: [
      {
        name: "暦本 純一",
        title: "情報科学者",
        affiliation: "東京大学大学院情報学環",
        comment: "長時間でも疲れない分割型キーボード、機能を拡張するモジュール性もあるようで期待しています！",
        image: "/images/advisors/rekimoto.webp",
        bio: "情報科学者。東京大学大学院情報学環教授、ソニーコンピュータサイエンス研究所フェロー・CSO・SonyCSL Kyotoディレクター。ヒューマンコンピュータインタラクション、拡張現実感、テクノロジーによる人間の拡張、人間とAIの融合に興味を持つ。世界初のモバイルARシステムNaviCam、世界初のマーカー型ARシステムCyberCode、マルチタッチシステムSmartSkinの発明者。人間の能力がネットワークを介し結合し拡張していく未来ビジョン、IoA(Internet of Abilities)を提唱。",
      },
    ],
  },
  preorder: {
    title: "先行予約受付中",
    subtitle: "2026年の夏ごろの出荷を予定しています。\n開発状況など、順次情報を発信します。",
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
    disclaimer: "※This product is currently in development and the design may change.\nWe will send you updates on our progress via email.",
  },
  problem: {
    title: "Suffering from\nTyping Pain?",
    subtitle: "Many people worldwide suffer from hand and wrist pain caused by typing.",
    statistics: [
      {
        value: "51%",
        description: "Percentage of people who experience pain in fingers, wrists, or arms while typing",
      },
      {
        value: "13.8%",
        description: "Percentage of people who feel their work efficiency is poor due to keyboard layout",
      },
      {
        value: "Rising",
        description: "Risk of keyboard-related conditions such as RSI and CTS",
      },
    ],
    survey: {
      description: "Survey: Online questionnaire and interview study conducted with 200 participants (men and women aged 10-60) across countries worldwide.",
      note: "※ Source: Modulate Development Team Research (2025)",
    },
  },
  solution: {
    title: "Three Solutions\nby Modulate",
    subtitle: "An innovative approach to solving the challenges of traditional keyboards.",
    features: [
      {
        title: "Ergonomic Design",
        description: "Vertical split-tile design reduces wrist strain and enables natural typing posture.",
        imagePlaceholder: "Ergonomic split design close-up",
      },
      {
        title: "Modular System",
        description: "Freely reconfigurable modular structure optimized for your work style.",
        imagePlaceholder: "Modular components interchange",
      },
      {
        title: "Wireless Connection",
        description: "Bluetooth connectivity frees you from cable hassles.\nWork comfortably anywhere.",
        imagePlaceholder: "Wireless connectivity lifestyle",
      },
    ],
  },
  features: {
    title: "Every Feature\nFor You",
    subtitle: "Features designed for programmers, designers, and writers.",
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
    subtitle: "Members from around the world collaborating to drive the project forward",
    members: [
      {
        name: "Raito Mochiduki",
        role: "CEO / Web & App Engineer / PCB Designer",
        country: "Japan 🇯🇵",
        image: "/images/raito.jpg",
        bio: "Started experiencing pain while typing in middle school. While researching solutions, discovered many people worldwide share the same problem and founded Modulate. Currently a high school senior (Grade 12).",
      },
      {
        name: "monide",
        role: "Engineer",
        country: "USA 🇺🇸",
        image: "/images/team/monide.jpg",
        bio: "A student living in the United States. Majoring in computer science and working at an ergonomic keyboard company. Has experience in creating keyboards and custom layouts.",
      },
      {
        name: "Team Member",
        role: "CAD Designer",
        country: "France 🇫🇷",
        image: "/images/team/france.jpeg",
        bio: "Content under preparation",
      },
    ],
  },
  advisors: {
    title: "Expert Supervision",
    subtitle: "Advancing the project with guidance from university professors and specialists.",
    note: "※ Published with permission from the individuals.",
    members: [
      {
        name: "Jun Rekimoto",
        title: "Information Scientist",
        affiliation: "Graduate School of Information, The University of Tokyo",
        comment: "I'm excited about this split keyboard that won't tire you even after long hours, and it seems to have modularity that extends functionality!",
        image: "/images/advisors/rekimoto.webp",
        bio: "Information scientist. Professor at the Graduate School of Information at The University of Tokyo, Fellow and CSO of Sony Computer Science Laboratories, and Director of SonyCSL Kyoto. Interested in human-computer interaction, augmented reality, human augmentation through technology, and the fusion of humans and AI. Inventor of NaviCam (world's first mobile AR system), CyberCode (world's first marker-based AR system), and SmartSkin (multi-touch system). Advocates for IoA (Internet of Abilities), a future vision where human capabilities are connected and enhanced through networks.",
      },
    ],
  },
  preorder: {
    title: "Pre-Order Now",
    subtitle: "Shipping planned for around summer 2026.\nWe will share development updates regularly.",
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
