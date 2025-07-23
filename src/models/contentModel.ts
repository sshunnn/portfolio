export interface ContentItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  type?: "rock" | "water";
  link?: string;
}

export const getContentItems = async (): Promise<ContentItem[]> => {
  try {
    // TODO: APIできるまでmockデータを返す
    const items: ContentItem[] = [
      {
        id: "1",
        title: "ポートフォリオサイト",
        description: "Next.jsとTypescriptで構築されたモダンなポートフォリオサイト。レスポンシブデザインとアニメーションにこだわりました。",
        type: "rock",
        link: "/portfolio"
      },
      {
        id: "2",
        title: "開発 MyTips",
        description: "開発時に役立つTipsをまとめました。特定の技術ではなく、役立つソフト・ツール、つまづいたことなどを記載しています。",
        type: "water",
        link: "/dev/mytips"
      },
      {
        id: "3",
        title: "なんか入れる",
        description: "React Nativeで開発したクロスプラットフォームアプリ。直感的な操作性と美しいデザインが特徴。",
        type: "rock",
        link: "/project/mobile-app"
      },
      {
        id: "4",
        title: "なんか入れる",
        description: "D3.jsとVue.jsを活用したインタラクティブなダッシュボード。複雑なデータを分かりやすく表示。",
        type: "water",
        link: "/project/dashboard"
      },
      {
        id: "5",
        title: "なんか入れる",
        description: "機械学習を活用したカスタマーサポートBot。自然言語処理により高精度な応答を実現。",
        type: "rock",
        link: "/project/ai-bot"
      }
    ];

    return items;
  } catch (error) {
    console.error('Error fetching content items:', error);
    return [];
  }
};