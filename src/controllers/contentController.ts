import { ContentItem, getContentItems } from "@/models/contentModel";
import { BlogPost, getPopularPosts } from "@/models/blogModel";

export function getHomePageContent(): {
  headerTitle: string;
  headerDescription: string;
  contentItems: ContentItem[];
  popularPosts: BlogPost[];
} {
  const contentItems = getContentItems();
  const popularPosts = getPopularPosts();
  
  return {
    headerTitle: "About my portfolio Detail",
    headerDescription: "特に目的なく作成しているため、特に完成予定などはありません。一旦今までの技術を表現するためにこのページを作成しました。",
    contentItems,
    popularPosts
  };
}