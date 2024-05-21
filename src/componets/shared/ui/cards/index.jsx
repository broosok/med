import { useEffect, useState } from "react";
import { getAllGoodsRequest } from "../../../hooks/good";
import { chunk } from "lodash";
import style from "./cards.module.css";
import React from "react";
import { setCart } from "../../../layout/header/model/cart";

export const CardsUI = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    (async () => {
      const goods = await getAllGoodsRequest();
      setGoods(goods);
    })();
  }, []);

  const fakeCards = Array.from({ length: goods.length % 4 });

  const cardRow = chunk([...goods, ...fakeCards], 4);

  return (
    <div className={style.cards}>
      {cardRow.map((x) => (
        <>
          <div className={style.devider}></div>
          {x.map((x) => (
            <CardUI {...x} />
          ))}
        </>
      ))}
    </div>
  );
};

export const CardUI = ({
  _id,
  brand,
  image,
  price,
  sizes,
  subtitle,
  title,
}) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 200);
  }, [animation]);

  const addToCart = () => {
    setCart({ _id, brand, image, price, sizes, subtitle, title });
  };

  const [size, setSize] = useState(null);

  if (!price) {
    return (
      <div className={`${style.card} ${animation && style.animation}`}></div>
    );
  }

  return (
    <div className={`${style.card} ${animation && style.animation}`}>
      <img src={image} />
      <div className={style.price}>{brand}</div>
      <div className={style.price}>{price.toLocaleString("ru")} ₽</div>
      <div className={style.title}>{title}</div>
      <div className={style.subtitle}>{subtitle}</div>
      <div className={style.size_group}>
        {sizes.map((x) => (
          <div
            className={`${style.size_box} ${
              !x.qnty && style.size_box_disabled
            } ${x.size === size && style.size_box_selected}`}
            onClick={() => (!x.qnty ? {} : setSize(x.size))}
          >
            {x.size}
          </div>
        ))}
      </div>

      <button
        className={`${style.button}`}
        onClick={() => {
          addToCart();
          setAnimation(true);
        }}
      >
        В корзину
      </button>
    </div>
  );
};
