import { FC } from "react";

import "./style.scss";

type Props = {
  text: string;
  type: string;
};

const Button: FC<Props> = ({ text, type }) => {
  const ButtonType: string = type === "normal" ? "darkButton" : " softButton";
  return (
    <button className={`${ButtonType}`}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
