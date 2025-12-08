import Link from "next/link";
import { ContentItem } from "@/models/contentModel";
import { BlogPost } from "@/models/blogModel";
import ContentCarousel from "@/views/components/Organisms/ContentCarousel";
import ContentHeading from "@/views/components/Molecules/ContentHeading";
import BlogCard from "@/views/components/Organisms/BlogCard";
import styles from "./HomePage.module.scss";

interface HomePageProps {
  headerTitle: string;
  headerDescription: string;
  contentItems: ContentItem[];
  popularPosts: BlogPost[];
}

export default function HomePage({
  headerTitle,
  headerDescription,
  contentItems,
  popularPosts,
}: HomePageProps) {
  return (
    <>
      <div className={styles.Top__imageWrapper}>
        <div className={styles.Top__backgroundImage}></div>
        <div className={styles.Top__animatedBackground}>
          <div className={styles.Top__gradientLayer}></div>

          <div className={styles.Top__particlesContainer}>
            {Array.from({ length: 30 }).map((_, i) => (
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
        
        {popularPosts && popularPosts.length > 0 && (
           <section className={styles.MainContent__blogSection}>
             <div className={styles.MainContent__blogContainer}>
               <ContentHeading headLevel="h2" text="Popular Logs" />
               <div className={styles.MainContent__blogGrid}>
                 {popularPosts.map((post) => (
                   <div key={post.id} className={styles.MainContent__blogCardWrapper}>
                     <BlogCard post={post} />
                   </div>
                 ))}
               </div>
               
               <div className={styles.MainContent__viewAllWrapper}>
                 <Link href="/blog" className={styles.MainContent__viewAllButton}>
                   View All Blogs
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M5 12h14M12 5l7 7-7 7"/>
                   </svg>
                 </Link>
               </div>
             </div>
           </section>
        )}
      </div>
    </>
  );
}
