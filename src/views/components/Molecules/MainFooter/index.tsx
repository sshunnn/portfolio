import styles from "./styles.module.scss";

export default function MainFooter() {
  return (
    <footer className={styles.MainFooter}>
      <div className={styles.MainFooter__wrapper}>
        <div className={styles.MainFooter__content}>
          <div className={styles.MainFooter__info}>
            <p className={styles.MainFooter__siteName}>Shun&apos;s logs</p>
            <p className={styles.MainFooter__copyright}>
              © 2025 Shun&apos;s Portfolio. All rights reserved.
            </p>
          </div>
          <nav className={styles.MainFooter__navigationWrapper}>
            <a
              href="https://github.com"
              className={styles.MainFooter__footerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              className={styles.MainFooter__footerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="mailto:contact@example.com"
              className={styles.MainFooter__footerLink}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}