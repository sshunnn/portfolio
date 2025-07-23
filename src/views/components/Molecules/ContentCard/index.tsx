"use client";

import { ContentItem } from "@/models/contentModel";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

interface ContentCardProps {
  item: ContentItem;
}

export default function ContentCard({ item }: ContentCardProps) {
  const router = useRouter();

  // itemが存在しない場合の早期リターン
  if (!item) {
    return null;
  }

  const handleCardClick = () => {
    if (item.link) {
      router.push(item.link);
    }
  };

  // typeが存在しない場合のデフォルト値を設定
  const cardType = item.type || 'rock';

  return (
    <div 
      className={`${styles.contentCard} ${styles[`contentCard--${cardType}`]}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <div className={styles.contentCard__content}>
        <h3 className={styles.contentCard__title}>{item.title || 'タイトルなし'}</h3>
        <p className={styles.contentCard__description}>{item.description || '説明なし'}</p>
        {item.link && (
          <div className={styles.contentCard__linkIndicator}>
            <span>詳しく見る →</span>
          </div>
        )}
      </div>
      <div className={styles.contentCard__overlay}></div>
    </div>
  );
}