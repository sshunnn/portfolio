"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

// 固定の粒子データを事前に生成
const PARTICLE_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  animationDelay: i * 0.2,
  animationDuration: 3 + Math.random() * 2,
}));

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const timer1 = setTimeout(() => setCurrentStep(1), 800);
    const timer2 = setTimeout(() => setCurrentStep(2), 1600);
    const timer3 = setTimeout(() => setCurrentStep(3), 2400);
    const timer4 = setTimeout(() => setCurrentStep(4), 3200);
    const timer5 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 800);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onLoadingComplete]);

  // マウント前は何も表示しない
  if (!isMounted) {
    return null;
  }

  if (!isVisible) {
    return (
      <div className={`${styles.loadingScreen} ${styles['loadingScreen--fadeOut']}`}>
        <div className={styles.loadingScreen__content}>
          <div className={styles.loadingScreen__logo}>
            <span className={styles.loadingScreen__name}>Shun</span>
            <span className={styles.loadingScreen__subtitle}>Portfolio</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loadingScreen__content}>
        {/* 背景の動く粒子 */}
        <div className={styles.loadingScreen__particles}>
          {PARTICLE_DATA.map((particle) => (
            <div
              key={particle.id}
              className={styles.loadingScreen__particle}
              style={{
                animationDelay: `${particle.animationDelay}s`,
                left: `${particle.left}%`,
                animationDuration: `${particle.animationDuration}s`
              }}
            />
          ))}
        </div>

        {/* メインロゴ */}
        <div className={styles.loadingScreen__logo}>
          <div className={styles.loadingScreen__nameContainer}>
            {'Shun'.split('').map((letter, index) => (
              <span
                key={index}
                className={`${styles.loadingScreen__letter} ${
                  currentStep >= 1 ? styles['loadingScreen__letter--visible'] : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
          
          <div className={`${styles.loadingScreen__subtitle} ${
            currentStep >= 2 ? styles['loadingScreen__subtitle--visible'] : ''
          }`}>
            Portfolio
          </div>

          <div className={`${styles.loadingScreen__tagline} ${
            currentStep >= 3 ? styles['loadingScreen__tagline--visible'] : ''
          }`}>
            Web Developer & Designer
          </div>
        </div>

        {/* ローディングバー */}
        <div className={`${styles.loadingScreen__loadingBar} ${
          currentStep >= 4 ? styles['loadingScreen__loadingBar--complete'] : ''
        }`}>
          <div className={styles.loadingScreen__loadingProgress}></div>
        </div>

        {/* 装飾的なライン */}
        <div className={styles.loadingScreen__decorativeLines}>
          <div className={styles.loadingScreen__line1}></div>
          <div className={styles.loadingScreen__line2}></div>
        </div>
      </div>
    </div>
  );
}