import Image from "next/image";
import styles from "./styles.module.scss";

export default function MainHeader() {
  return (
    <header className={styles.MainHeader}>
      <div className={styles.MainHeader__wrapper}>
        <p className={styles.MainHeader__siteName}>Shun's logs</p>
        <nav className={styles.MainHeader__navigationWrapper}>
          <a
            href="https://nextjs.org/learn"
            className={styles.MainHeader__headerLink}
          >
            Detail
          </a>
          <a
            href="https://nextjs.org/docs"
            className={styles.MainHeader__headerLink}
          >
            About
          </a>
          <a
            href="https://nextjs.org/learn"
            className={styles.MainHeader__headerLink}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
