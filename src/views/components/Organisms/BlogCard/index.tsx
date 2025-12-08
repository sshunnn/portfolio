"use client";

import { BlogPost } from "@/models/blogModel";
import styles from "./styles.module.scss";
import Image from "next/image"; // Next.js Image optimization
import Link from "next/link";
// Iconコンポーネントがあれば使う、なければSVG直書き
import Icon from "@/views/components/Atoms/Icon";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // フォーマット用
  const formattedDate = new Date(post.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className={styles.BlogCard}>
      <div className={styles.BlogCard__thumbnailWrapper}>
        {/* Next/Imageを使う場合は width/height 指定か fill を使う */}
        {/* 今回は外部URL(unsplash)なので unoptimized or domain configが必要。 */}
        {/* 手っ取り早く img タグを使うか、unoptimized={true} で逃げる */}
        {post.thumbnail ? (
          <img 
            src={post.thumbnail} 
            alt={post.title} 
            className={styles.BlogCard__thumbnail}
            loading="lazy"
          />
        ) : (
          <div className={`${styles.BlogCard__thumbnail} ${styles['BlogCard__thumbnail--placeholder']}`}>
             <span className={styles.BlogCard__placeholderIcon}>
               <Icon name="image" size={48} />
             </span>
             <span className={styles.BlogCard__placeholderText}>No Image</span>
          </div>
        )}
      </div>

      <div className={styles.BlogCard__content}>
        <div className={styles.BlogCard__meta}>
          <time className={styles.BlogCard__date} dateTime={post.date}>
             <Icon name="info" size={14} /> {/* 時計のアイコンがあれば良いが一旦infoで代用またはSVG */}
             {formattedDate}
          </time>
          <div className={styles.BlogCard__tags}>
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} className={styles.BlogCard__tag}>#{tag}</span>
            ))}
          </div>
        </div>

        <h3 className={styles.BlogCard__title}>{post.title}</h3>
        <p className={styles.BlogCard__excerpt}>{post.excerpt}</p>
      </div>

      <div className={styles.BlogCard__footer}>
        <Link href={`/blog/${post.id}`} className={styles.BlogCard__readMore}>
          Read Article
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}
