import React from "react";
import style from "./styles.module.css";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { setMobileMenu } from "../model/mobile-menu";

export const MobileMenuUI = () => {
  return (
    <div className={style.mobile_header}>
      <div>
        <div className={style.logo}>
          <Link className={style.logo_mobile} to="/">
            DLVB
          </Link>
        </div>
        <div
          className={style.mobile_close}
          onClick={() => setMobileMenu(false)}
        >
          <RiCloseLargeFill />
        </div>
      </div>

      <div>Добавить</div>
    </div>
  );
};
