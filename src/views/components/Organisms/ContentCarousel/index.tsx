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
  const items = contentItems || [];
  const hasItems = items.length > 0;

  const infiniteItems = hasItems ? [...items, ...items, ...items] : [];
  const totalOriginal = items.length;
  
  const [currentIndex, setCurrentIndex] = useState(totalOriginal);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isJumping, setIsJumping] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying && hasItems) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, 5000);
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
  }, [isAutoPlaying, hasItems]);

  const onTransitionEnd = () => {
    if (currentIndex >= totalOriginal * 2) {
      setIsJumping(true);
      setCurrentIndex(prev => prev - totalOriginal);
    } else if (currentIndex < totalOriginal) {
      setIsJumping(true);
      setCurrentIndex(prev => prev + totalOriginal);
    }
  };

  useEffect(() => {
    if (isJumping) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsJumping(false);
        });
      });
    }
  }, [isJumping]);

  const handlePrev = () => {
    if (!hasItems) return;
    setIsAutoPlaying(false);
    setCurrentIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (!hasItems) return;
    setIsAutoPlaying(false);
    setCurrentIndex(prev => prev + 1);
  };

  const jumpToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(totalOriginal + index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (!hasItems || !carouselRef.current) return;

    const container = carouselRef.current;
    
    const isMobile = window.innerWidth <= 480;
    const cardWidth = isMobile ? 300 : 600; 
    const gap = isMobile ? 12 : 24;
    const totalItemWidth = cardWidth + gap;
    
    const containerWidth = container.parentElement?.offsetWidth || window.innerWidth;
    
    const centerOffset = (containerWidth - cardWidth) / 2;
    const currentItemLeft = currentIndex * totalItemWidth;
    
    const translateX = centerOffset - currentItemLeft;
    
    container.style.transform = `translateX(${translateX}px)`;
    container.style.transition = isJumping ? 'none' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';

  }, [currentIndex, hasItems, isJumping]);


  if (!hasItems) {
    return (
      <div className={styles.contentCarousel}>
        <p className={styles.contentCarousel__noContent}>
          表示するコンテンツがありません
        </p>
      </div>
    );
  }

  return (
    <div 
      className={styles.contentCarousel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.contentCarousel__wrapper}>
        <button 
          className={`${styles.contentCarousel__navButton} ${styles['contentCarousel__navButton--prev']}`}
          onClick={handlePrev}
          aria-label="前のコンテンツ"
        >
          <Icon name="arrow-left" size={24} />
        </button>

        <div 
          ref={carouselRef}
          className={styles.contentCarousel__container}
          onTransitionEnd={onTransitionEnd}
        >
          {infiniteItems.map((item, index) => {
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={`${item.id}-${index}`}
                className={`${styles.contentCarousel__slide} ${
                  isActive ? styles['contentCarousel__slide--active'] : ''
                }`}
                onClick={() => {
                  if (!isActive) {
                     setIsAutoPlaying(false);
                     setCurrentIndex(index);
                  }
                }}
              >
                <ContentCard item={item} />
              </div>
            );
          })}
        </div>

        <button 
          className={`${styles.contentCarousel__navButton} ${styles['contentCarousel__navButton--next']}`}
          onClick={handleNext}
          aria-label="次のコンテンツ"
        >
          <Icon name="arrow-right" size={24} />
        </button>
      </div>

      <div className={styles.contentCarousel__indicators}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${styles.contentCarousel__dot} ${
              (currentIndex % totalOriginal) === index ? styles['contentCarousel__dot--active'] : ''
            }`}
            onClick={() => jumpToSlide(index)}
            aria-label={`${index + 1}番目のコンテンツ`}
          />
        ))}
      </div>
    </div>
  );
}