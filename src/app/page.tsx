import HomePage from "@/views/templates/HomePage";
import { getHomePageContent } from "@/controllers/contentController";

export default async function Home() {
  // get Server Side
  const { headerTitle, headerDescription, contentItems } = await getHomePageContent();
  
  return (
    <HomePage
      headerTitle={headerTitle}
      headerDescription={headerDescription}
      contentItems={contentItems}
    />
  );
}