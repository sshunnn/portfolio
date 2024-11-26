import Image from "next/image";
import "../styles/globals.scss";
import styles from "./page.module.scss";
import ContentCard from "@/components/ContentCard";

export default function Home() {
  return (
    <div className={styles.Top__mainWrapper}>
      <main className={styles.main}>
        <div style={{ position: "relative", width: "100%", height: "600px" }}>
          <Image
            src="/background/headerImage.png"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <ContentCard /> */}
      </main>
    </div>
  );
}
