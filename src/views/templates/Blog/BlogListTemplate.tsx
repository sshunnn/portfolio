"use client";

import { BlogPost } from "@/models/blogModel";
import BlogCard from "@/views/components/Organisms/BlogCard";
import MainHeader from "@/views/components/Molecules/MainHeader";
import styles from "./styles.module.scss";

interface BlogListTemplateProps {
  posts: BlogPost[];
}

export default function BlogListTemplate({ posts }: BlogListTemplateProps) {
  return (
    <>
      <MainHeader />
      
      <main className={styles.BlogList}>
        <div className={styles.BlogList__container}>
          <header className={styles.BlogList__header}>
            <h1 className={styles.BlogList__title}>Shun's Log</h1>
            <p className={styles.BlogList__description}>
              日々の学び、技術、そして自然の中での気づきを記録しています。<br/>
              木のぬくもりとともに、ゆっくりとご覧ください。
            </p>
          </header>

          <div className={styles.BlogList__grid}>
            {posts.map((post) => (
              <div key={post.id} className={styles.BlogList__cardWrapper}>
                {/* リンク実装は後ほど詳細ページができたら href={`/blog/${post.id}`} にする */}
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <div className={styles.BlogList__pagination}>
             <button className={`${styles.BlogList__pageLink} ${styles['BlogList__pageLink--active']}`}>1</button>
             <button className={styles.BlogList__pageLink}>2</button>
             <button className={styles.BlogList__pageLink}>3</button>
          </div>
        </div>
      </main>

    </>
  );
}
