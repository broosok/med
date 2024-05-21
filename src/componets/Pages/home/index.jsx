import React, { useEffect, useState } from "react";
import { ImageSlider } from "../../Slaider/Slaider";
import style from "./home.module.css";
import { VscCircleFilled } from "react-icons/vsc";
import { SliderUI } from "./ui/slider";
import { MovingText } from "./ui/moving-text";
import { chunk } from "lodash";
import { getAllGoodsRequest } from "../../hooks/good";
import { CardsUI } from "../../shared/ui/cards";
import {
  RxCornerBottomLeft,
  RxCornerBottomRight,
  RxCornerTopLeft,
  RxCornerTopRight,
} from "react-icons/rx";
import { ContainerUI } from "../../shared/ui/container";

export function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <MovingText />
        <SliderUI />
        <div className={style.wrapper}>
          <div className={style.container}>
            <h1 className={style.hog}>
              <div className={style.page}>
                <VscCircleFilled />
                Новинки
                <VscCircleFilled />
              </div>
            </h1>
            <div className={style.cards}>
              <CardsUI />
            </div>
            <ContainerUI>
              <div className={style.about}>
                <div className={style.top}>
                  <a className={style.levo}>
                    <RxCornerTopLeft />
                  </a>
                  <a className={style.pravo}>
                    <RxCornerTopRight />
                  </a>
                </div>
                <div className={style.gup}>О проекте</div>
                <div className={style.text}>
                  DLVB –
                  <a className={style.textcolor}>
                    магазин лимитированных кроссовок.
                  </a>
                  Мы помогаем в приобретении желанных
                  <a className={style.textcolor}> лимитированных</a> моделей
                  кроссовок в короткий срок, с гарантией их подлинности. Каждый
                  товар проходит проверку на
                  <a className={style.textcolor}> оригинальность</a> этим
                  занимается проффесионал.
                </div>
                <div className={style.bottom}>
                  <a className={style.levo2}>
                    <RxCornerBottomLeft />
                  </a>
                  <a className={style.pravo2}>
                    <RxCornerBottomRight />
                  </a>
                </div>
              </div>
            </ContainerUI>
          </div>
        </div>
      </div>
    </div>
  );
}
