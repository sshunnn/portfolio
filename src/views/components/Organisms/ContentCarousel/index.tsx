"use client";

import { useEffect, useRef, useState } from "react";
import { ContentItem } from "@/models/contentModel";
import ContentCard from "@/views/components/Molecules/ContentCard";
import Icon from "@/views/components/Atoms/Icon";
import styles from "./styles.module.scss";

interface ContentCarouselProps {
  contentItems: ContentItem[];
}

export default function ContentCarousel({ contentItems }: ContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // contentItemsが存在しない、または空の場合の処理
  if (!contentItems || contentItems.length === 0) {
    return (
      <div className={styles.contentCarousel}>
        <p className={styles.contentCarousel__noContent}>
          表示するコンテンツがありません
        </p>
      </div>
    );
  }

  // 自動再生の設定
  useEffect(() => {
    if (isAutoPlaying && contentItems.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= contentItems.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, contentItems.length]);

  // transformベースのアニメーション処理
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = 380; // 新しいカード幅（320px）+ gap（60px）に調整
      const containerWidth = container.offsetWidth;
      
      // 中央配置のための計算
      const centerOffset = (containerWidth - cardWidth) / 2;
      const translateX = centerOffset - (currentIndex * cardWidth);
      
      container.style.transform = `translateX(${translateX}px)`;
    }
  }, [currentIndex]);

  // シンプルなスライド処理
  const handleNextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const nextIndex = prev >= contentItems.length - 1 ? 0 : prev + 1;
      return nextIndex;
    });
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const prevIndex = prev <= 0 ? contentItems.length - 1 : prev - 1;
      return prevIndex;
    });
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrevClick = () => {
    setIsAutoPlaying(false);
    handlePrevSlide();
  };

  const handleNextClick = () => {
    setIsAutoPlaying(false);
    handleNextSlide();
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div 
      className={styles.contentCarousel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.contentCarousel__wrapper}>
        {/* 前へボタン */}
        <button 
          className={`${styles.contentCarousel__navButton} ${styles['contentCarousel__navButton--prev']}`}
          onClick={handlePrevClick}
          aria-label="前のコンテンツ"
          disabled={isTransitioning}
        >
          <Icon name="chevron-left" size={20} />
        </button>

        {/* カルーセルコンテナ */}
        <div 
          ref={carouselRef}
          className={styles.contentCarousel__container}
        >
          {contentItems.map((item, index) => {
            if (!item || !item.id) {
              return null;
            }
            
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={item.id}
                className={`${styles.contentCarousel__slide} ${
                  isActive ? styles['contentCarousel__slide--active'] : ''
                }`}
              >
                <ContentCard item={item} />
              </div>
            );
          })}
        </div>

        {/* 次へボタン */}
        <button 
          className={`${styles.contentCarousel__navButton} ${styles['contentCarousel__navButton--next']}`}
          onClick={handleNextClick}
          aria-label="次のコンテンツ"
          disabled={isTransitioning}
        >
          <Icon name="chevron-right" size={20} />
        </button>
      </div>

      {/* インジケーター（元のアイテム数のみ） */}
      <div className={styles.contentCarousel__indicators}>
        {contentItems.map((_, index) => (
          <button
            key={index}
            className={`${styles.contentCarousel__dot} ${
              index === currentIndex ? styles['contentCarousel__dot--active'] : ''
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`${index + 1}番目のコンテンツ`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* 自動再生状態表示 */}
      <div className={styles.contentCarousel__controls}>
        <button
          className={`${styles.contentCarousel__playButton} ${
            isAutoPlaying ? styles['contentCarousel__playButton--playing'] : ''
          }`}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? '自動再生を停止' : '自動再生を開始'}
        >
          <Icon name={isAutoPlaying ? 'pause' : 'play'} size={16} />
        </button>
      </div>
    </div>
  );
}