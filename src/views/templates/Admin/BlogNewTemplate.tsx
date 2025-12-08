"use client";

import { useState, useRef } from "react";
import styles from "./styles.module.scss";

export default function BlogNewTemplate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);

      // Generate previews
      newFiles.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Post:", { title, content, files });
    alert("ブログ記事を投稿しました（モック）\n\nタイトル: " + title + "\n画像数: " + files.length);
    // Reset form
    setTitle("");
    setContent("");
    setFiles([]);
    setPreviews([]);
  };

  return (
    <div className={styles.AdminBlogNew}>
      <div className={styles.AdminBlogNew__container}>
        <header className={styles.AdminBlogNew__header}>
          <h1 className={styles.AdminBlogNew__title}>New Blog Post</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <div className={styles.AdminBlogNew__formGroup}>
            <label className={styles.AdminBlogNew__label}>Title</label>
            <input
              type="text"
              className={styles.AdminBlogNew__input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="記事のタイトルを入力"
              required
            />
          </div>

          <div className={styles.AdminBlogNew__formGroup}>
            <label className={styles.AdminBlogNew__label}>Media (Images/Videos)</label>
            <div 
              className={styles.AdminBlogNew__fileDropZone}
              onClick={() => fileInputRef.current?.click()}
            >
              <p>Click to upload images or videos</p>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                multiple
                accept="image/*,video/*"
                onChange={handleFileChange}
              />
            </div>
            
            {previews.length > 0 && (
              <div className={styles.AdminBlogNew__previewGrid}>
                {previews.map((src, idx) => (
                  <div key={idx} className={styles.AdminBlogNew__previewItem}>
                    <img src={src} alt={`Preview ${idx}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.AdminBlogNew__formGroup}>
            <label className={styles.AdminBlogNew__label}>Content</label>
            <textarea
              className={styles.AdminBlogNew__textarea}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="記事の本文を入力..."
              required
            />
          </div>

          <div className={styles.AdminBlogNew__actions}>
            <button type="button" className={`${styles.AdminBlogNew__button} ${styles['AdminBlogNew__button--cancel']}`}>
              Cancel
            </button>
            <button type="submit" className={`${styles.AdminBlogNew__button} ${styles['AdminBlogNew__button--submit']}`}>
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
