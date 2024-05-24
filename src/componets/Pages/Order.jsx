import React from "react";
import style from "./Order.module.css";
import { useUnit } from "effector-react";
import { ContainerUI } from "../shared/ui/container";
import { $groupCard, setQnty, setCartShow } from "../layout/header/model/cart";
import styled from "styled-components";

import { orderRequest } from "../layout/header/lib/order";

export function Order() {
  const groupCart = useUnit($groupCard);
  const orderFx = async (e) => {
    e.preventDefault();

    await orderRequest({ cart: groupCart });

    setCartShow(false);
  };
  return (
    <>
      <ContainerUI>
        <div className={style.contenercard}>
          <div className={style.gridtop}>
            <Content>
              {!groupCart.length}
              {groupCart.map((x) => (
                <Info>
                  <img src={x.image} />
                  <Title>{x.title}</Title>
                  <div className={style.cull}>
                    Осталось: {x.sizes.filter((y) => y.size === x.size)[0].qnty}
                  </div>
                  <div className={style.cull}>
                    Цена: {x.price * x.qnty}
                    {"₽ "}
                    {x.price * x.qnty !== x.price
                      ? `(${x.price}₽ за шт.)`
                      : null}
                  </div>
                  <div className={style.cull}>
                    Кол-во:
                    <Input
                      value={x.qnty}
                      type={"number"}
                      min={1}
                      max={x.sizes.filter((y) => y.size === x.size)[0].qnty}
                      onChange={(e) =>
                        setQnty({
                          qnty: e.target.value,
                          size: x.size,
                          title: x.title,
                        })
                      }
                    />
                  </div>
                  <div className={style.cull2}>
                    Сумма: {x.price * x.qnty}
                    {"₽ "}
                  </div>
                </Info>
              ))}
            </Content>
          </div>

          <div className={style.gridbotton}>
            <div>
              <div className={style.text}>
                Пожалуйста, внимательно заполните форму ниже.
              </div>
              <div className={style.text}>
                Все цены на нашем сайте указанны с учетом доставки.
              </div>

              <div>
                <span className={style.text}>Адрес доставки</span>
                <p className={style.label}>Email*</p>
                <div>
                  <input
                    className={style.profile__input}
                    placeholder="Введите Email"
                    type="text"
                  />
                </div>
                <p className={style.label}>Улица*</p>
                <div>
                  <input
                    className={style.profile__input}
                    placeholder="Введите улицу"
                    type="text"
                  />
                </div>
                <p className={style.label}>Номер дома*</p>
                <div>
                  <input
                    className={style.profile__input2}
                    placeholder="Введите дом"
                    type="text"
                  />
                </div>
                <p className={style.label}>Кв/офис</p>
                <div>
                  <input className={style.profile__input} type="text" />
                </div>
                <p className={style.label}>Подъезд</p>
                <div>
                  <input className={style.profile__input} type="text" />
                </div>
                <p className={style.label}>Этаж</p>
                <div>
                  <input className={style.profile__input} type="text" />
                  <p className={style.label}>Домофон</p>
                </div>
                <input className={style.profile__input} type="text" />
              </div>
            </div>
            <button onClick={orderFx}>Оформить заказ</button>
          </div>
        </div>
      </ContainerUI>
    </>
  );
}

const Content = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
`;
const Input = styled.input``;
