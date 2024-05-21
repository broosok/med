import React from "react";
import style from "./Contact.module.css";
import { ContainerUI } from "../shared/ui/container";

export function Contact() {
  const sendMailTo = () => {
    window.location.href =
      "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
  };

  const openTg = () => {
    window.location.href = "https://t.me/hellmorphin";
  };

  return (
    <>
      <ContainerUI>
        <div className={style.text}>Контакты</div>
        <div className={style.text2}>Способы связи </div>
        <div className={style.blockText} onClick={sendMailTo}>
          <div className={style.poloska} />
          <div className={style.blockInfo}>
            <div>Email</div>
            <div>DLVB@yandex.ru</div>
          </div>
        </div>
        <div className={style.blockText} onClick={openTg}>
          <div className={style.poloska} />
          <div className={style.blockInfo}>
            <div>Phone</div>
            <div>DLVB@yandex.ru</div>
          </div>
        </div>
        <div className={style.blockText}>
          <div className={style.poloska} />
          <div className={style.blockInfo}>
            <div>Email</div>
            <div>DLVB@yandex.ru</div>
          </div>
        </div>
        <div className={style.blockText}>
          <div className={style.poloska} />
          <div className={style.blockInfo}>
            <div>Email</div>
            <div>DLVB@yandex.ru</div>
          </div>
        </div>
      </ContainerUI>
    </>
  );
}
