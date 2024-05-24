import React, { useMemo } from "react";
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
import { orderRequest } from "../layout/header/lib/order";

export function Order() {
  const successOrder = async () => {
    const res = await orderRequest({ cart: groupCart });
    if (res.success) {
      Swal.fire({
        title: "Ваш заказ успешно оформлен!",
        html: `
      Вы можете просмотреть его в <a href="../../Cabinet"> личном кабинете </a>
    `,
        icon: "success",
      });
      clearCart();
      setNavigation("/cabinet");
    }
    /* Swal.fire({
      title: "Ваш заказ успешно оформлен!",
      html: `
    Вы можете просмотреть его в <a href="../../Cabinet"> личном кабинете </a>
  `,
      icon: "success",
    });
    clearCart();
    setNavigation("/"); */
  };
  const groupCart = useUnit($groupCard);

  const sum = useMemo(() => {
    return groupCart.reduce((acc, cur) => acc + cur.price * cur.qnty, 0);
  }, [groupCart]);

  return (
    <>
      <ContainerUI>
        <div className={style.contenercard}>
          <div className={style.gridtop}>
            <TableWrapper>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Изображение</Th>
                    <Th>Название</Th>
                    <Th>Цена</Th>
                    <Th>Размер</Th>
                    <Th>Остаток</Th>
                    <Th>Количество</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {groupCart.map((x, i) => (
                    <Tr key={i}>
                      <Td>
                        <img src={x.image} className={style.imgsize} />
                      </Td>
                      <Td>{x.title}</Td>
                      <Td>{(x.price * x.qnty).toLocaleString("ru")}₽</Td>
                      <Td>{x.size}</Td>
                      <Td align="right">
                        {x.sizes.filter((y) => y.size === x.size)[0].qnty}
                      </Td>
                      <Td align="right">
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
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <TFooter>
                  <Tr>
                    <Th colspan="3" scope="row">
                      Сумма
                    </Th>
                    <Td>{sum.toLocaleString("ru")}₽</Td>
                  </Tr>
                </TFooter>
              </Table>
            </TableWrapper>
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

const Input = styled.input``;

const TableWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px; /* Ширина всего элемента навигации */
  }

  &::-webkit-scrollbar-track {
    background: #fff; /* Цвет дорожки */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e6e6e6; /* Цвет бегунка */
    border-radius: 4px; /* Округление бегунка */
  }
`;

const Table = styled.table`
  max-width: 100%;
  border: 0px solid grey;
  border-collapse: collapse;
  border-radius: 10px;

  th,
  td {
    border-bottom: 1px solid #f5f5f7;

    padding: 16px;
    border-collapse: collapse;
  }

  th {
    padding: 16px;
    font-size: 20px;
    background: rgba(250, 251, 253, 255);
    color: #000000;
  }

  td {
    font-size: 18px;
  }

  thead,
  tbody {
    position: sticky;
  }

  table thead {
    inset-block-start: 0; /* "top" */
  }
  table tfoot {
    inset-block-end: 0; /* "bottom" */
  }
`;
const Thead = styled.thead`
  top: 0px;
  z-index: 1;
  background: #fff;

  tr {
    box-shadow: 0px 0px 3px 1px #d3d3d3;
  }
`;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td`
  padding: 8px;
  img {
    width: 150px;
    height: 150px;
  }

  input {
    width: 40px;
    border: none;
    background: #e9e9e9;
  }
`;
const TFooter = styled.tfoot`
  position: sticky;
  z-index: 1;
  bottom: -1px;
  background: #fff;
  th {
    text-align: right;
  }
`;
