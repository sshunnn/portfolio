import Image from "next/image";
import "../styles/globals.scss";
import styles from "./page.module.scss";
// import ContentCard from "@/components/ContentCard";
import ContentHeading from "@/components/ContentHeading";

export default function Home() {
  return (
    <div className={styles.Top__mainWrapper}>
      <main>
        <ContentHeading
          headLevel="h1"
          text="About my portfolio Detail"
          className={styles.Top__MainHeading}
        />
        <div style={{ width: "100%", height: "600px" }}>
          <Image
            src="/background/headerImage.png"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        {/* <ContentCard /> */}
        
      </main>
    </div>
  );
}
