import styles from "./styles.module.scss";
import { createElement } from "react";

// TODO classNameを作成してimportする
// wrapperのスタイルのclassNameを当てれるるようにする。

type headingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

export type Props = {
  headLevel: headingLevel;
  text: string;
  className?: string | null;
  icon?: string | null; // TODO ここのtypeの定義を追加する
  iconType?: "before" | "after";
};

const NestedComponent = ({
  headingTag,
  headingText,
  subText,
}: {
  headingTag: headingLevel;
  headingText: string;
  subText?: string | null;
}) => {
  return createElement(
    "div",
    { className: "parent" },
    createElement(headingTag, null, headingText),
    createElement("p", null, subText)
  );
};


export default function ContentHeading({
  headLevel = "h1",
  text = "",
  className = null,
  icon,
  iconType,
}: Props) {
  return (
    <div className={styles.Heading__}> 
      {icon && iconType === "before" ? <> </> : null}
      <NestedComponent headingTag={headLevel} headingText={text} />
      {icon && iconType === "after" ? <> </> : null}
    </div>
  );
}
