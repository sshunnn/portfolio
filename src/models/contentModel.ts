export interface ContentItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  type?: "rock" | "water";
}

export const getContentItems = async (): Promise<ContentItem[]> => {
  // TODO: APIできるまでmockデータを返す
  return [
    {
      id: "1",
      title: "ポートフォリオサイト",
      description: "Next.jsとTypescriptで構築されたモダンなポートフォリオサイト。レスポンシブデザインとアニメーションにこだわりました。",
      type: "rock"
    },
    {
      id: "2",
      title: "なんか入れる",
      description: "Reactを使用したショッピングサイト。ユーザー体験を重視したUIとスムーズな決済システムを実装。",
      type: "water"
    },
    {
      id: "3",
      title: "なんか入れる",
      description: "React Nativeで開発したクロスプラットフォームアプリ。直感的な操作性と美しいデザインが特徴。",
      type: "rock"
    },
    {
      id: "4",
      title: "なんか入れる",
      description: "D3.jsとVue.jsを活用したインタラクティブなダッシュボード。複雑なデータを分かりやすく表示。",
      type: "water"
    },
    {
      id: "5",
      title: "なんか入れる",
      description: "機械学習を活用したカスタマーサポートBot。自然言語処理により高精度な応答を実現。",
      type: "rock"
    }
  ];
};