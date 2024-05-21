import React from "react";
import style from "./style.module.css";

export const ContainerUI = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>{children}</div>
    </div>
  );
};
