import { useUnit } from "effector-react";
import React, { useState } from "react";
import styled from "styled-components";
import {
  $cartShow,
  $groupCard,
  setCartShow,
  setQnty,
  clearCart,
} from "../model/cart";
import { MdClose } from "react-icons/md";
import { orderRequest } from "../lib/order";
import style from "./styles.module.css";

import { create } from "lodash";
import { createEffect, createEvent } from "effector";
import { setNavigation } from "../../../navgiation";

export const clearStore = createEvent("Clear store");

export const CartUI = () => {
  const cartShow = useUnit($cartShow);
  const groupCart = useUnit($groupCard);
  const [totalPrice, setTotalPrice] = useState(0);
  const orderFx = async (e) => {
    e.preventDefault();

    await orderRequest({ cart: groupCart });
    setNavigation("/Order");
    setCartShow(false);
  };

  const removeCartFx = () => {
    clearCart();
  };

  if (!cartShow) return null;

  return (
    <Wrapper>
      <Bg onClick={() => setCartShow(false)} />
      <Panel>
        <Header>
          <p>Корзина</p>
          <MdClose onClick={() => setCartShow(false)} />
        </Header>
        <Content>
          {!groupCart.length && <NoItems>В корзине пусто...</NoItems>}
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
                {x.price * x.qnty !== x.price ? `(${x.price}₽ за шт.)` : null}
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
                И того: {x.price * x.qnty}
                {"₽ "}
              </div>
            </Info>
          ))}
        </Content>
        {groupCart.length > 0 ? (
          <Footer>
            <button className={style.but} onClick={orderFx}>
              Продолжить оформления
            </button>
            <button className={style.delete} onClick={removeCartFx}>
              Очистить корзину
            </button>
          </Footer>
        ) : null}
      </Panel>
    </Wrapper>
  );
};

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  font-size: 20px;
  gap: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-weight: bold;
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
`;

const Bg = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: #0000003e;
`;

const Panel = styled.div`
  overflow-y: auto;
  position: fixed;
  z-index: 1001;
  width: 500px;
  height: 100%;
  background-color: #fff;
  right: 0px;

  svg {
    font-size: 56px;
  }
`;

const Input = styled.input``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  p {
    font-size: 30px;
    font-weight: 500;
    margin: 0px;
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const NoItems = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;
