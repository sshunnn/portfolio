import HomePage from "@/views/templates/HomePage";
import { getHomePageContent } from "@/controllers/contentController";

export default async function Home() {
  // サーバーサイドでデータを取得
  const { headerTitle, headerDescription, contentItems } = await getHomePageContent();
  
  // ビューにデータを渡す
  return (
    <HomePage
      headerTitle={headerTitle}
      headerDescription={headerDescription}
      contentItems={contentItems}
    />
  );
}