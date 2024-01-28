import { FC } from "react";

import "./style.scss";
import Button from "../Common/Button/Button";
//test

const Initial: FC = () => {
  return (
    <div className="initial-page">
      <div className="initial-title">
        <span className="title-1">Login with mobile number</span>
        <span className="title-2">Welcome to our App!</span>
      </div>
      <div>
        <div className="button-section">
          <Button text="Login" type="normal" />
        </div>
      </div>
    </div>
  );
};

export default Initial;
