import styles from "./styles.module.scss";

export type Props = {
  title: string | null;
  description: string;
  imageType?: "rock" | "water";
  colorSetting?: string | null;
};

export default function ContentCard(props: Props) {
  return (
      <div className={styles.ContentCard__wrapper}>
        {/* <div className={styles.ContentCard__content}>
          <h1 className={styles.ContentCard__title}>{props.title}</h1>
          <p className={styles.ContentCard__description}>{props.description}</p>
        </div> */}
        {/* <div className={styles.ContentCard__imageWrapper}>
          <Image
            src={props.imageType == "rock" ? `/Logo/contentsCard.png`: `/Logo/${props.imageType}.png`}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div> */}
      </div>
  );
}
