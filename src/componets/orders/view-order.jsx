import React from "react";
import { useMemo } from "react";
import styled from "styled-components";

export const ViewOrderUI = ({ data, close }) => {
  const sum = useMemo(() => {
    return data.reduce((acc, cur) => acc + cur.price * cur.qnty, 0);
  }, [data]);

  return (
    <FixedWrapper>
      <ModalOverlay
        onClick={() => {
          close?.(false);
        }}
      />
      <Relative>
        <Close
          onClick={() => {
            close(false);
          }}
        >
          ✖
        </Close>
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
                <Th>Статус заказа</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((x, i) => (
                <Tr key={i}>
                  <Td>
                    <img src={x.image} />
                  </Td>
                  <Td>{x.title}</Td>
                  <Td>{(x.price * x.qnty).toLocaleString("ru")}₽</Td>
                  <Td>{x.size}</Td>
                  <Td align="right">
                    {x.sizes.filter((y) => y.size === x.size)[0].qnty}
                  </Td>
                  <Td align="right">{x.qnty}</Td>
                  <Td>В обработке</Td>
                </Tr>
              ))}
            </Tbody>
            <TFooter>
              <Tr>
                <Th colspan="6" scope="row">
                  Сумма
                </Th>
                <Td>{sum.toLocaleString("ru")}₽</Td>
              </Tr>
            </TFooter>
          </Table>
        </TableWrapper>
      </Relative>
    </FixedWrapper>
  );
};

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 1002;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -75px;
  top: -75px;
  padding: 8px;
  font-size: 50px;
  width: 60px;
  height: 60px;
  color: #fff;
  border-radius: 100%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #e4e4e4;
  }
`;

const FixedWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0px;
  top: 0px;
  position: fixed;

  iframe {
    width: 1200px;
    height: 650px;
  }
`;

const Relative = styled.div`
  position: relative;
`;

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1002;
  background: linear-gradient(
      107.44deg,
      #32bff3 0%,
      rgba(100, 208, 248, 0) 99.16%
    ),
    linear-gradient(
      171.41deg,
      #f46de1 11.56%,
      rgba(243, 110, 225, 0) 70.9%,
      rgba(243, 110, 225, 0) 70.9%
    ),
    linear-gradient(275.54deg, #f9d0b9 0.91%, rgba(255, 255, 255, 0.08) 81.46%),
    linear-gradient(331.15deg, #f46ce1 27.74%, rgba(180, 167, 237, 0) 57.92%),
    linear-gradient(252.44deg, #c374fa 0%, #917bea 100%);
  opacity: 0.8;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    content: "";
    background: rgb(13, 13, 13, 0.8);
  }
`;

const TableWrapper = styled.div`
  max-height: 700px;
  overflow-y: auto;
  z-index: 1002;
  position: relative;

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
  background: #fff;

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
