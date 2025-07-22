import styles from "./styles.module.scss";
import { createElement } from "react";

// TODO classNameを作成してimportする
// wrapperのスタイルのclassNameを当てれるるようにする。

type headingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

export type Props = {
  headLevel: headingLevel;
  text: string;
  className?: string;
  icon?: string | null; // TODO ここのtypeの定義を追加する
  iconType?: "before" | "after";
};

const NestedComponent = ({
  headingTag,
  headingText,
  subText,
  className,
}: {
  headingTag: headingLevel;
  headingText: string;
  subText?: string | null;
  className?: string;
}) => {
  return createElement(
    "div",
    { className: className },
    createElement(headingTag, null, headingText),
    createElement("p", null, subText)
  );
};


export default function ContentHeading({
  headLevel = "h1",
  text = "",
  className = undefined,
  icon,
  iconType,
}: Props) {
  return (
    <div className={styles.Heading__}> 
      {icon && iconType === "before" ? <> </> : null}
      <NestedComponent headingTag={headLevel} headingText={text} className={className} />
      {icon && iconType === "after" ? <> </> : null}
    </div>
  );
}
