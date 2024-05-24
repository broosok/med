import React, { useEffect, useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [additionalText, setAdditionalText] = useState(
    "Да. Каждая пара в нашем магазине проходит тщательную проверку на оригинальность. Мы также всегда готовы предоставить вам возможность проверить пары самостоятельно."
  );

  const [isExpanded2, setIsExpanded2] = useState(false);
  const [additionalText2, setAdditionalText2] = useState(
    "Если вам не удалось найти нужную пару на сайте, вы можете оставить заявку на поиск абсолютно любой модели здесь. С вами свяжется менеджер, уточнит ваш точный размер и расскажет про условия и варианты доставки"
  );

  const [isExpanded3, setIsExpanded3] = useState(false);
  const [additionalText3, setAdditionalText3] = useState(
    "На сайте указана минимальная стоимость товара. Окончательная цена будет зависеть от вашего размера, его уникальности или популярности. После оформления заказа с вами свяжется менеджер, поможет определить ваш идеальный размер, а также сориентирует по стоимости и наличию."
  );

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  const handleClick2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const handleClick3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* <MovingText /> */}
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
                <div className={style.center}>
                  <div className={style.gup}>О проекте</div>
                  <div className={style.text}>
                    DLVB –
                    <a className={style.textcolor}>
                      магазин лимитированных кроссовок.
                    </a>
                    Мы помогаем в приобретении желанных
                    <a className={style.textcolor}> лимитированных</a> моделей
                    кроссовок в короткий срок, с гарантией их подлинности.
                    Каждый товар проходит проверку на
                    <a className={style.textcolor}> оригинальность</a> этим
                    занимается проффесионал.
                  </div>
                </div>
                <div className={style.bottom}>
                  <a className={style.levo2}>
                    <RxCornerBottomLeft />
                  </a>
                  <a className={style.pravo2}>
                    <RxCornerBottomRight />
                  </a>
                </div>
                <div>
                  <h1 className={style.what}>Часто задаваемые вопросы</h1>
                  <h3 className={style.buttext} onClick={handleClick}>
                    Вы продаете оригинал?
                  </h3>
                  {isExpanded && (
                    <div>
                      <p className={style.downtext}>{additionalText}</p>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className={style.buttext} onClick={handleClick2}>
                    Что делать, если моего размера нет в наличии?
                  </h3>
                  {isExpanded2 && (
                    <div>
                      <p className={style.downtext}>{additionalText2}</p>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className={style.buttext} onClick={handleClick3}>
                    Цена товара окончательная?
                  </h3>
                  {isExpanded3 && (
                    <div>
                      <p className={style.downtext}>{additionalText3}</p>
                    </div>
                  )}
                </div>
              </div>
            </ContainerUI>
          </div>
        </div>
      </div>
    </div>
  );
}
