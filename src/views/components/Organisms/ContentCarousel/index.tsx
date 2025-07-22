'use client';

import { useState, useEffect } from 'react';
import { ContentItem } from "@/models/contentModel";
import ContentCard from "@/views/components/Molecules/ContentCard";
import styles from "./styles.module.scss";

interface ContentCarouselProps {
  contentItems: ContentItem[];
}

export default function ContentCarousel({ contentItems }: ContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // 自動スクロール
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4秒ごとに切り替え

    return () => clearInterval(interval);
  }, [contentItems.length, isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? contentItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === contentItems.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div 
      className={styles.carousel}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className={styles.carousel__container}>
        <div 
          className={styles.carousel__track}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {contentItems.map((item) => (
            <div key={item.id} className={styles.carousel__slide}>
              <ContentCard 
                title={item.title} 
                description={item.description} 
                imageType={item.type}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ナビゲーションボタン */}
      <button 
        className={`${styles.carousel__button} ${styles.carousel__buttonPrev}`}
        onClick={goToPrevious}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className={`${styles.carousel__button} ${styles.carousel__buttonNext}`}
        onClick={goToNext}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* インジケーター */}
      <div className={styles.carousel__indicators}>
        {contentItems.map((_, index) => (
          <button
            key={index}
            className={`${styles.carousel__indicator} ${
              index === currentIndex ? styles.carousel__indicatorActive : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
