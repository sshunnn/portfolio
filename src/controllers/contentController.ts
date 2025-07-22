// src/controllers/contentController.ts
import { ContentItem, getContentItems } from "@/models/contentModel";

export async function getHomePageContent() {
  const contentItems = await getContentItems();
  
  return {
    headerTitle: "About my portfolio Detail",
    headerDescription: "特に目的なく作成しているため、特に完成予定などはありません。一旦今までの技術を表現するためにこのページを作成しました。",
    contentItems
  };
}