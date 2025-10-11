import MyTipsTopTemplate from "@/views/templates/MyTipsTopTemplate";
import { getTipsTopContent } from "@/controllers/tipsTopController";

export default async function MyTipsPage() {
  // get Server Side
  const { headerTitle, headerDescription, contentItems } =
    await getTipsTopContent();

  return <MyTipsTopTemplate contentItems={contentItems} />;
}
