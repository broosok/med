import React from "react";
import style from "./Footer.module.css";
import {
  FaCcVisa,
  FaCcJcb,
  FaCreditCard,
  FaCcMastercard,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export const FooterUI = () => {
  return (
    <div className={style.footercontainer}>
      <div className={style.footer2}>
        <div className={style.footercontainer}>
          <div className={style.logo}>DLVB</div>
          <div className={style.text}>DLVB@yandex.ru</div>
          <div className={style.text2}>ИП: Мосенков Данил Вадимович</div>
          <div className={style.text3}>ИНН: 45345345345353</div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.pages}>
          <div className={style.pages1}>
            <FaCcVisa />
          </div>
          <div className={style.pages1}>
            <FaCcMastercard />
          </div>
          <div className={style.pages1}>
            <FaCcJcb />
          </div>
          <div className={style.pages1}>
            <FaCreditCard />
          </div>
        </div>
        <div className={style.menu}>
          <Link className={style.info} to="/Info">
            Политика конфиденциальности
          </Link>
        </div>
        Copyright © Upbeat Code 2024
      </div>
    </div>
  );
};

{
  /* <footer className={style.footer}>
      <div className={style.footer2}>
        <div className={style.footercontainer}>
          <div className={style.logo}>DLVB</div>
          <div className={style.text}>DLVB@yandex.ru</div>
          <div className={style.text2}>ИП: Мосенков Данил Вадимович</div>
          <div className={style.text3}>ИНН: 45345345345353</div>
        </div>
      </div>
      <div className={style.pages}>
        <img src="_1.jpg" />

        <img src="_2.jpg" />
        <img src="_3.jpg" />
        <img src="_4.jpg" />
      </div>
      <div className={style.menu}>
        <Link className={style.info} to="/Info">
          Политика конфиденциальности
        </Link>
      </div>
      Copyright © Upbeat Code 2024
    </footer> */
}
