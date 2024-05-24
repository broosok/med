import React from "react";
import style from "./Order.module.css";
import { useUnit } from "effector-react";
import { ContainerUI } from "../shared/ui/container";
import {
  $groupCard,
  setQnty,
  setCartShow,
  clearCart,
} from "../layout/header/model/cart";
import styled from "styled-components";
import Swal from "sweetalert2";
import { setNavigation } from "../navgiation";

export function Order() {
  const successOrder = () => {
    Swal.fire({
      title: "Ваш заказ успешно оформлен!",
      html: `
    Вы можете просмотреть его в <a href="../../Cabinet"> личном кабинете </a>
  `,
      icon: "success",
    });
    clearCart();
    setNavigation("/");
  };
  const groupCart = useUnit($groupCard);

  return (
    <>
      <ContainerUI>
        <div className={style.contenercard}>
          <div className={style.gridtop}>
            <Content>
              {!groupCart.length}
              {groupCart.map((x) => (
                <Info>
                  <img src={x.image} className={style.imgsize} />
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
              <p className={style.text}>
                Пожалуйста, внимательно заполните форму ниже.
              </p>
              <h1 className={style.text}>
                Все цены на нашем сайте указанны с учетом доставки.
              </h1>

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
                <div className={style.gridtext}>
                  <p className={style.label}>Номер дома*</p>
                  <p className={style.label}>Кв/офис</p>
                </div>
                <div className={style.profile__grid2}>
                  <input
                    className={style.profile__input2}
                    placeholder="Введите дом"
                    type="text"
                  />
                  <input className={style.profile__input2} type="text" />
                </div>

                <div className={style.profile__grid}>
                  <p className={style.label}>Подъезд</p>
                  <p className={style.label}>Этаж</p>
                  <p className={style.label}>Домофон</p>

                  <input className={style.profile__input3} type="text" />
                  <input className={style.profile__input3} type="text" />
                  <input className={style.profile__input3} type="text" />
                </div>
              </div>
            </div>
            <div className={style.buttonbuy}>
              <button className={style.buy} onClick={successOrder}>
                <div className={style.size}>Оформить заказ</div>
              </button>
            </div>
          </div>
        </div>
      </ContainerUI>
    </>
  );
}

const Content = styled.div`
  display: grid;
  font-weight: bold;
`;

const Title = styled.div`
  width: 150px;
  height: 150px;
  font-size: 20px;
  font-weight: 500;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  padding: 10px;
  gap: 15px;
`;
const Input = styled.input``;
