import { ContentItem } from "@/models/contentModel";
import ContentCarousel from "@/views/components/Organisms/ContentCarousel";
import ContentHeading from "@/views/components/Molecules/ContentHeading";
import styles from "./HomePage.module.scss";

interface HomePageProps {
  headerTitle: string;
  headerDescription: string;
  contentItems: ContentItem[];
}

export default function HomePage({
  headerTitle,
  headerDescription,
  contentItems,
}: HomePageProps) {
  return (
    <>
      <div className={styles.Top__imageWrapper}>
        <div className={styles.Top__backgroundImage}></div>
        <div className={styles.Top__animatedBackground}>
          <div className={styles.Top__gradientLayer}></div>

          <div className={styles.Top__particlesContainer}>
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={styles.Top__particle}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 6}s`,
                  opacity: Math.random() * 0.6 + 0.2,
                }}
              />
            ))}
          </div>

          <div className={styles.Top__geometricShapes}>
            <div className={styles.Top__shape1}></div>
            <div className={styles.Top__shape2}></div>
            <div className={styles.Top__shape3}></div>
            <div className={styles.Top__shape4}></div>
          </div>

          <div className={styles.Top__wavesContainer}>
            <div className={styles.Top__wave1}></div>
            <div className={styles.Top__wave2}></div>
            <div className={styles.Top__wave3}></div>
          </div>
        </div>

        <div className={styles.Top__mainHeading}>
          <ContentHeading headLevel="h1" text={headerTitle} />
          <p className={styles.Top__mainLeadText}>{headerDescription}</p>
        </div>
      </div>
      <div className={styles.MainContent__wrapper}>
        <ContentCarousel contentItems={contentItems} />
      </div>
    </>
  );
}
