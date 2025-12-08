import HomePage from "@/views/templates/HomePage";
import { getHomePageContent } from "@/controllers/contentController";

export default function Home() {
  // get Server Side
  const { headerTitle, headerDescription, contentItems, popularPosts } = getHomePageContent();
  
  return (
    <HomePage
      headerTitle={headerTitle}
      headerDescription={headerDescription}
      contentItems={contentItems}
      popularPosts={popularPosts}
    />
  );
}