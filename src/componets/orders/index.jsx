import React, { useMemo } from "react";
import styled from "styled-components";
import { fastModal } from "./fast-modal";
import { ViewOrderUI } from "./view-order";

const dateFromObjectId = (objectId) => {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000).getTime();
};

export const OrdersUI = ({ data, close }) => {
  const dataFormated = useMemo(() => {
    return data.map((x) => ({ ...x, _id: dateFromObjectId(x._id) }));
  }, [data]);

  if (data?.length === 0) return <div>Нет заказов</div>;

  const openFastModal = (x) => {
    fastModal.custom({
      children: (close) => <ViewOrderUI data={x.items} close={close} />,
      modalProps: { height: "80%" },
    });
  };

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Номер заказа</Th>
            <Th>Дата</Th>
            <Th>Действия</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataFormated.map((x, i) => (
            <Tr key={i}>
              <Td>{x._id}</Td>
              <Td>{x.date}</Td>
              <Td onClick={() => openFastModal(x)}>Посмотреть</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
};

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
  width: 100%;
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
