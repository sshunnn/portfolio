import Image from "next/image";
import "../styles/globals.scss";
import styles from "./page.module.scss";
import ContentHeading from "@/components/ContentHeading";
import ContentCard from "@/components/ContentCard";

export default function Home() {
  return (
    <>
      <div className={styles.Top__imageWrapper}>
        <Image
          src="/background/headerImage.png"
          alt="Header Image"
          width={1920}
          height={600}
          objectFit="cover"
          loading="lazy"
        />
        <div className={styles.Top__mainHeading}>
          <ContentHeading
            headLevel="h1"
            text="About my portfolio Detail"
          />
          <p className={styles.Top__mainLeadText}>
            特に目的なく作成しているため、特に完成予定などはありません。一旦今までの技術を表現するためにこのページを作成しました。
          </p>
        </div>
      </div>
      <main>
        <ContentCard title="test1" description="test description" />
      </main>
    </>
  );
}
