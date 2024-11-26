import Image from "next/image";
import styles from "./styles.module.scss";

export type Props = {
  title: string | null;
  description: string;
  imagePath: string;
  colorSetting?: string | null;
  children: React.ReactNode;
};

export default function ContentCard(props: Props) {
  return (
      <div className={styles.ContentCard__wrapper}>
        <div className={styles.MainHeader__logoWrapper}>
          <Image
            className={styles.MainHeader__mainLogo}
            src="/Logo/headerLogo.png"
            alt="Header Logo"
            width={72}
            height={72}
            priority
          />
          <p className={styles.MainHeader__siteName}>My Portfolio</p>
        </div>
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
  );
}
