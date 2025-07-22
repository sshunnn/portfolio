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
      title: "ポートフォリオ概要",
      description: "Next.jsとTypescriptで構築されたポートフォリオサイト",
      type: "rock"
    }
  ];
};