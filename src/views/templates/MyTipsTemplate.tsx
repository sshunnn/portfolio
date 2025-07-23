"use client";

import { useRouter } from "next/navigation";
import Icon from "@/views/components/Atoms/Icon";
import styles from "./MyTipsTemplate.module.scss";

export default function MyTipsTemplate() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.myTips}>
      <div className={styles.myTips__header}>
        <button 
          onClick={handleBackClick}
          className={styles.myTips__backButton}
        >
          <Icon name="arrow-left" size={18} />
          戻る
        </button>
        <h1 className={styles.myTips__title}>開発 MyTips</h1>
        <p className={styles.myTips__subtitle}>
          開発時に役立つTips集
        </p>
      </div>

      <div className={styles.myTips__content}>
        <div className={styles.myTips__section}>
          <h2 className={styles.myTips__sectionTitle}>便利なツール</h2>
          <div className={styles.myTips__grid}>
            <div className={styles.myTips__card}>
              <h3>VS Code Extensions</h3>
              <p>開発効率を上げる必須拡張機能をまとめました。</p>
            </div>
            <div className={styles.myTips__card}>
              <h3>Git Tips</h3>
              <p>よく使うGitコマンドとトラブルシューティング。</p>
            </div>
            <div className={styles.myTips__card}>
              <h3>Chrome DevTools</h3>
              <p>デバッグとパフォーマンス最適化のテクニック。</p>
            </div>
          </div>
        </div>

        <div className={styles.myTips__section}>
          <h2 className={styles.myTips__sectionTitle}>つまずきポイント</h2>
          <div className={styles.myTips__grid}>
            <div className={styles.myTips__card}>
              <h3>Next.js の注意点</h3>
              <p>SSR/CSRでハマりやすいポイントと解決法。</p>
            </div>
            <div className={styles.myTips__card}>
              <h3>TypeScript Tips</h3>
              <p>型定義でよくある問題と型安全性の向上方法。</p>
            </div>
            <div className={styles.myTips__card}>
              <h3>CSS の落とし穴</h3>
              <p>レスポンシブデザインとブラウザ互換性の対策。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}