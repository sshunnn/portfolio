// src/views/templates/HomePage.tsx
import { ContentItem } from "@/models/contentModel";
import ContentCarousel from "@/views/components/Organisms/ContentCarousel";
import ContentHeading from "@/views/components/Molecules/ContentHeading";
import Image from "next/image";
import styles from "./HomePage.module.scss";

interface HomePageProps {
  headerTitle: string;
  headerDescription: string;
  contentItems: ContentItem[];
}

export default function HomePage({ headerTitle, headerDescription, contentItems }: HomePageProps) {
  return (
    <>
      <div className={styles.Top__imageWrapper}>
        <Image
          src="/backGround/headerImage.png"
          alt="Header Image"
          width={1920}
          height={600}
          objectFit="cover"
          loading="lazy"
        />
        <div className={styles.Top__mainHeading}>
          <ContentHeading
            headLevel="h1"
            text={headerTitle}
          />
          <p className={styles.Top__mainLeadText}>{headerDescription}</p>
        </div>
      </div>
      <div className={styles.MainContent__wrapper}>
        <ContentCarousel contentItems={contentItems} />
      </div>
    </>
  );
}