export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // ISO string YYYY-MM-DD
  thumbnail: string; // URL
  images?: string[]; // Additional images
  video?: string; // Video URL
  tags: string[];
  isPopular?: boolean;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: "post-001",
    title: "FPSのエイム練習ルーティンを変えたら勝率が上がった話",
    excerpt: "毎日のKovaak'sのメニューを見直し、トラッキング重視の練習に変えた結果、VALORANTのランクがアセンダントに到達しました。",
    content: "詳細な練習メニューと意識したポイントについて...",
    author: "Shun",
    date: "2025-06-01",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop", 
    tags: ["Gaming", "FPS", "VALORANT"],
    isPopular: true,
  },
  {
    id: "post-002",
    title: "Next.js 15のServer Actionsが便利すぎる件",
    excerpt: "フォームハンドリングが革命的に楽になるServer Actions。実際のプロダクトコードでの活用事例を紹介。",
    content: "これまでのAPI Routesとの違い...",
    author: "Shun",
    date: "2025-05-28",
    thumbnail: "https://images.unsplash.com/photo-1618477247222-ac59c90dc50c?q=80&w=2545&auto=format&fit=crop",
    tags: ["Tech", "Next.js", "React"],
    isPopular: true,
  },
  {
    id: "post-003",
    title: "深夜のコーディングにはLofi Hip Hopが最強",
    excerpt: "集中力が途切れないBGM選び。CodeFiやLofi Girlなど、愛用しているYouTubeチャンネルまとめ。",
    content: "おすすめのプレイリスト...",
    author: "Shun",
    date: "2025-05-25",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2670&auto=format&fit=crop",
    tags: ["Music", "Coding", "LifeStyle"],
    isPopular: false,
  },
  {
    id: "post-004",
    title: "Rustに入門してみたけど所有権で心が折れそう",
    excerpt: "メモリ安全性を保証するための所有権システム。借用チェッカーと格闘した3日間の記録。",
    content: "コンパイルエラーとの戦い...",
    author: "Shun",
    date: "2025-05-20",
    thumbnail: "https://images.unsplash.com/photo-1565153907400-7e01a9ab25f3?q=80&w=2574&auto=format&fit=crop",
    tags: ["Tech", "Rust", "Study"],
    isPopular: true,
  },
  {
    id: "post-005",
    title: "デスク環境アップデート：ウルトラワイドモニター導入",
    excerpt: "34インチのウルトラワイドモニターを導入して作業効率が爆上がりしました。画面分割が快適すぎる。",
    content: "配線周りの工夫...",
    author: "Shun",
    date: "2025-05-18",
    thumbnail: "https://images.unsplash.com/photo-1527176930640-5497475f3484?q=80&w=2670&auto=format&fit=crop",
    tags: ["Gadget", "Desk Setup"],
    isPopular: true,
  },
  {
    id: "post-006",
    title: "個人開発で月1万円の収益を達成した戦略",
    excerpt: "作ったWebサービスをどうマーケティングしたか。リリース後のSNS運用とSEO対策について。",
    content: "最初のユーザー獲得...",
    author: "Shun",
    date: "2025-05-15",
    thumbnail: "https://images.unsplash.com/photo-1579226905180-636b76d96082?q=80&w=2574&auto=format&fit=crop",
    tags: ["IndieDev", "Business"],
    isPopular: true,
  },
  {
    id: "post-007",
    title: "Vimの操作に慣れるまでの1週間修行",
    excerpt: "VSCodeのVim拡張を入れて矯正中。jjでESC、:wで保存。指が覚えてくると快感。",
    content: "設定ファイルの内容...",
    author: "Shun",
    date: "2025-05-12",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2574&auto=format&fit=crop",
    tags: ["Tech", "Vim", "Editor"],
    isPopular: false,
  },
  {
    id: "post-008",
    title: "最強のキーボード？HHKB Professional HYBRID Type-Sレビュー",
    excerpt: "スコスコという打鍵感がたまらない。プログラマー御用達のキーボードを半年使ってみた感想。",
    content: "静音性と携帯性...",
    author: "Shun",
    date: "2025-05-10",
    thumbnail: "https://images.unsplash.com/photo-1555532538-dcdbd01d373d?q=80&w=2759&auto=format&fit=crop",
    tags: ["Gadget", "Keyboard", "HHKB"],
    isPopular: true,
  },
  {
    id: "post-009",
    title: "Dockerのマルチステージビルドでイメージサイズを劇的に減らす",
    excerpt: "500MBあったNode.jsアプリのイメージを、Alpine Linuxとマルチステージビルドで50MB以下に軽量化。",
    content: "Dockerfileの記述例...",
    author: "Shun",
    date: "2025-05-08",
    thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2671&auto=format&fit=crop",
    tags: ["Tech", "Docker", "DevOps"],
    isPopular: false,
  },
  {
    id: "post-010",
    title: "APEXの新シーズン、ランクシステムの変更点まとめ",
    excerpt: "キルポ重視から順位重視へ？新シーズンのメタの変化と、ソロランクでの立ち回り考察。",
    content: "キャラ構成の変化...",
    author: "Shun",
    date: "2025-05-05",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2665&auto=format&fit=crop",
    tags: ["Gaming", "APEX"],
    isPopular: true,
  },
  {
    id: "post-011",
    title: "GitHub Copilotなしでは生きられない体になってしまった",
    excerpt: "AIコーディング支援ツールの進化がすごい。ボイラープレートの自動生成やテストコード作成での活用術。",
    content: "生産性が2倍に...",
    author: "Shun",
    date: "2025-05-02",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
    tags: ["Tech", "AI", "GitHub"],
    isPopular: true,
  },
  {
    id: "post-012",
    title: "筋トレとプログラミングの意外な共通点",
    excerpt: "継続が力なり。バグ修正も筋肉痛も、成長の証。エンジニアこそジムに行くべき理由。",
    content: "テストステロンの効果...",
    author: "Shun",
    date: "2025-04-30",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
    tags: ["LifeStyle", "Fitness"],
    isPopular: false,
  },
  {
    id: "post-013",
    title: "Notionで人生を管理する最強のテンプレート",
    excerpt: "タスク管理、読書ログ、習慣トラッカー。全てをNotionに集約して脳のメモリを解放する。",
    content: "テンプレートの配布...",
    author: "Shun",
    date: "2025-04-28",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    tags: ["Productivity", "Notion"],
    isPopular: true,
  },
  {
    id: "post-014",
    title: "週末はサウナでデジタルデトックス",
    excerpt: "整う感覚。PC画面から離れて、熱波と水風呂で自律神経をリセットする最高の週末。",
    content: "おすすめのサウナ施設...",
    author: "Shun",
    date: "2025-04-25",
    thumbnail: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop",
    tags: ["LifeStyle", "Sauna"],
    isPopular: false,
  },
  {
    id: "post-015",
    title: "TypeScriptのUtility Typesを使いこなす",
    excerpt: "Pick, Omit, Partial, Required...。型定義をDRYにするための便利なUtility Types解説。",
    content: "実務でよく使うパターン...",
    author: "Shun",
    date: "2025-04-22",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2628&auto=format&fit=crop",
    tags: ["Tech", "TypeScript"],
    isPopular: true,
  },
  {
    id: "post-016",
    title: "エルゴノミクスチェア「アーロンチェア」を買った結果",
    excerpt: "腰痛が劇的に改善。20万円の価値はあるのか？1ヶ月使用しての正直レビュー。",
    content: "前傾チルト機能が...",
    author: "Shun",
    date: "2025-04-20",
    thumbnail: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=2670&auto=format&fit=crop",
    tags: ["Gadget", "Chair"],
    isPopular: true,
  },
  {
    id: "post-017",
    title: "GraphQL vs REST API、今選ぶならどっち？",
    excerpt: "オーバーフェッチ問題の解消や型安全性。プロジェクトの規模や要件に応じた技術選定の基準。",
    content: "Apollo Clientのキャッシュ...",
    author: "Shun",
    date: "2025-04-18",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    tags: ["Tech", "API"],
    isPopular: false,
  },
  {
    id: "post-018",
    title: "ストリートファイター6、Masterランク到達！",
    excerpt: "格ゲー初心者がモダン操作でMasterに行くまでの道のり。対空意識とインパクト返しが鍵。",
    content: "使用キャラのリプレイ...",
    author: "Shun",
    date: "2025-04-15",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
    tags: ["Gaming", "SF6"],
    isPopular: true,
  },
  {
    id: "post-019",
    title: "MacBook Pro M3 Maxが爆速すぎて世界が変わった",
    excerpt: "ビルド時間が半分以下に。動画編集もサクサク。クリエイターにとっての最高の投資。",
    content: "ベンチマーク結果...",
    author: "Shun",
    date: "2025-04-12",
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2626&auto=format&fit=crop",
    tags: ["Gadget", "Mac", "Apple"],
    isPopular: true,
  },
  {
    id: "post-020",
    title: "ポートフォリオサイトをリニューアルしました",
    excerpt: "Next.jsとThree.jsを使って、没入感のあるデザインに刷新。デザインの意図と実装の裏側。",
    content: "こだわったポイント...",
    author: "Shun",
    date: "2025-04-10",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop",
    tags: ["Tech", "Portfolio", "Design"],
    isPopular: true,
  }
];

export const getPopularPosts = (): BlogPost[] => {
  return mockBlogPosts.filter(post => post.isPopular);
};

export const getAllPosts = (): BlogPost[] => {
  return mockBlogPosts;
};

export const getPostById = (id: string): BlogPost | undefined => {
  return mockBlogPosts.find(post => post.id === id);
};
