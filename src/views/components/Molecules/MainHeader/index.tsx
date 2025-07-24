"use client";

import { useState, useEffect } from 'react';
import Icon from '@/views/components/Atoms/Icon';
import styles from "./styles.module.scss";

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" className={styles.MainHeader__logoIcon}>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea"/>
        <stop offset="100%" stopColor="#764ba2"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="24" height="24" rx="6" fill="url(#logoGradient)"/>
    <path d="M12 10h8v2h-6v4h4v2h-4v4h6v2h-8V10z" fill="white"/>
  </svg>
);

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.MainHeader} ${isScrolled ? styles['MainHeader--scrolled'] : ''}`}>
      <div className={styles.MainHeader__wrapper}>
        <div className={styles.MainHeader__logo}>
          <LogoIcon />
          <div className={styles.MainHeader__brandContainer}>
            <span className={styles.MainHeader__siteName}>Shun&apos;s logs</span>
            <span className={styles.MainHeader__tagline}>Portfolio</span>
          </div>
        </div>
        
        {/* デスクトップナビゲーション */}
        <nav className={styles.MainHeader__navigationWrapper}>
          <a
            href="/dev/mytips"
            className={styles.MainHeader__headerLink}
            onClick={closeMobileMenu}
          >
            <Icon name="code" size={16} />
            <span className={styles.MainHeader__linkText}>Tips</span>
          </a>
          <a
            href="#about"
            className={styles.MainHeader__headerLink}
            onClick={closeMobileMenu}
          >
            <Icon name="info" size={16} />
            <span className={styles.MainHeader__linkText}>About</span>
          </a>
          <a
            href="#contact"
            className={styles.MainHeader__headerLink}
            onClick={closeMobileMenu}
          >
            <Icon name="email" size={16} />
            <span className={styles.MainHeader__linkText}>Contact</span>
          </a>
        </nav>

        {/* モバイルハンバーガーメニュー */}
        <button 
          className={`${styles.MainHeader__hamburger} ${isMobileMenuOpen ? styles['MainHeader__hamburger--open'] : ''}`}
          onClick={toggleMobileMenu}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* モバイルメニュー */}
        <div className={`${styles.MainHeader__mobileMenu} ${isMobileMenuOpen ? styles['MainHeader__mobileMenu--open'] : ''}`}>
          <nav className={styles.MainHeader__mobileNav}>
            <a
              href="/dev/mytips"
              className={styles.MainHeader__mobileLink}
              onClick={closeMobileMenu}
            >
              <Icon name="code" size={18} />
              <span>Tips</span>
            </a>
            <a
              href="#about"
              className={styles.MainHeader__mobileLink}
              onClick={closeMobileMenu}
            >
              <Icon name="info" size={18} />
              <span>About</span>
            </a>
            <a
              href="#contact"
              className={styles.MainHeader__mobileLink}
              onClick={closeMobileMenu}
            >
              <Icon name="email" size={18} />
              <span>Contact</span>
            </a>
          </nav>
        </div>
      </div>

      {/* モバイルメニューオーバーレイ */}
      {isMobileMenuOpen && (
        <div 
          className={styles.MainHeader__overlay}
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}
