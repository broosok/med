import { useUnit } from "effector-react";
import React from "react";
import styled from "styled-components";
import { $cart, $cartShow, setCartShow } from "../model/cart";
import { MdClose } from "react-icons/md";

export const CartUI = () => {
  const cartShow = useUnit($cartShow);
  const cart = useUnit($cart);

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
          {!cart.length && <NoItems>В корзине пусто...</NoItems>}
          {cart.map((x) => (
            <div>{x.title}</div>
          ))}
        </Content>
      </Panel>
    </Wrapper>
  );
};

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
