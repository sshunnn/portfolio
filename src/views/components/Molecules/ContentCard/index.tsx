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
      {/* 背景装飾 */}
      <div className={styles.contentCard__background}>
        <div className={styles.contentCard__pattern}></div>
      </div>
      
      {/* メインコンテンツ */}
      <div className={styles.contentCard__content}>
        <div className={styles.contentCard__header}>
          <div className={styles.contentCard__badge}>
            {cardType === 'rock' ? '🚀 プロジェクト' : '💡 ナレッジ'}
          </div>
          <div className={styles.contentCard__type}>
            {cardType}
          </div>
        </div>
        
        <div className={styles.contentCard__body}>
          <h3 className={styles.contentCard__title}>{item.title || 'タイトルなし'}</h3>
          <p className={styles.contentCard__description}>{item.description || '説明なし'}</p>
        </div>
        
        {item.link && (
          <div className={styles.contentCard__footer}>
            <div className={styles.contentCard__linkIndicator}>
              <span>詳しく見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        )}
      </div>
      
      {/* グロー効果 */}
      <div className={styles.contentCard__glow}></div>
    </div>
  );
}