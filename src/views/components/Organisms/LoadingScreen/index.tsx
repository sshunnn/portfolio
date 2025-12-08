"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // シンプルなタイマー設定
    // 1.5秒後にフェードアウト開始
    const timer = setTimeout(() => {
      setIsVisible(false);
      // フェードアウトアニメーション（0.8s）完了後にコールバック実行
      setTimeout(onLoadingComplete, 800);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  // マウント前は何も表示しない
  if (!isMounted) {
    return null;
  }

  if (!isVisible) {
    // フェードアウト状態のDOMを残してアニメーションさせる
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
        {/* メインロゴ */}
        <div className={styles.loadingScreen__logo}>
          <div className={styles.loadingScreen__nameContainer}>
            <span className={styles.loadingScreen__name}>Shun</span>
          </div>
          <div className={styles.loadingScreen__subtitle}>
            Portfolio
          </div>
        </div>
      </div>
    </div>
  );
}