"use client";

import { BlogPost } from "@/models/blogModel";
import MainHeader from "@/views/components/Molecules/MainHeader";
import Icon from "@/views/components/Atoms/Icon";
import Link from "next/link";
import styles from "./detail.module.scss";

interface BlogDetailTemplateProps {
  post: BlogPost;
}

export default function BlogDetailTemplate({ post }: BlogDetailTemplateProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <MainHeader />
      
      <main className={styles.BlogDetail}>
        <article className={styles.BlogDetail__container}>
          <Link href="/blog" className={styles.BlogDetail__backLink}>
            <Icon name="arrow-left" size={16} /> {/* Must ensure arrow-left exists or use appropriate icon */}
            Back to List
          </Link>

          <header className={styles.BlogDetail__header}>
            <div className={styles.BlogDetail__meta}>
              <time className={styles.BlogDetail__date}>
                <Icon name="info" size={16} />
                {formattedDate}
              </time>
              <span className={styles.BlogDetail__author}>
                 By {post.author}
              </span>
            </div>
            
            <h1 className={styles.BlogDetail__title}>{post.title}</h1>
            
            <div className={styles.BlogDetail__tags}>
              {post.tags.map(tag => (
                <span key={tag} className={styles.BlogDetail__tag}>#{tag}</span>
              ))}
            </div>
          </header>

          <div className={styles.BlogDetail__thumbnailWrapper}>
             {post.thumbnail ? (
               <img src={post.thumbnail} alt={post.title} />
             ) : (
               <div style={{width: '100%', height: '100%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888'}}>
                 No Image
               </div>
             )}
          </div>

          <div className={styles.BlogDetail__content}>
            {/* 簡易的に改行コードをbrに変換して表示。本番ならReactMarkdown等推奨 */}
            {post.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            
            {/* ダミーの本文追加 (モックデータが短いので見栄え用) */}
            <h2>はじめに</h2>
            <p>
              このブログ記事はデモンストレーション用のモックアップです。
              Next.js 15とReact 19を使用し、モダンなフロントエンド技術で構築されています。
              デザインシステムには「Woody」テーマを採用し、自然な温かみのあるUIを目指しました。
            </p>
            
            <h2>技術的なポイント</h2>
            <ul>
              <li>Next.js App Routerによるルーティング</li>
              <li>CSS ModulesとSassによるスタイリング</li>
              <li>レスポンシブデザイン対応</li>
              <li>Glassmorphismを採用したヘッダー</li>
            </ul>
            
            <blockquote>
              "Good design is obvious. Great design is transparent." — Joe Sparano
            </blockquote>
            
            <p>
              最後までお読みいただきありがとうございました。
              詳細な実装やソースコードについてご質問があれば、お気軽にご連絡ください。
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
