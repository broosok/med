import React, { useEffect, useState } from "react";
import style from "./Cabinet.module.css";
import { FaTrashCan } from "react-icons/fa6";
import { Navigate } from "react-router-dom";
import { useUnit } from "effector-react";
import { $user } from "../models/user";
import { ContainerUI } from "../shared/ui/container";
import { getOrders } from "../hooks/order";
import { OrdersUI } from "../orders";
import styled from "styled-components";

export function Cabinet() {
  const [orders, setOrders] = useState([]);
  const user = useUnit($user);

  useEffect(() => {
    (async () => {
      const res = await getOrders();
      if (res.success) {
        setOrders(res.data);
      }
    })();
  }, []);

  return (
    <ContainerUI>
      <div className={style.profile}>
        {!user.username && <Navigate to="/login" replace={true} />}
        <div className={style.container}>
          <Group>
            <div className={style.pof}>Профиль {user.username}</div>
            <div className={style.profile__container}>
              <h3 className={style.profile__titel}>Фото профиля</h3>
              <div className={style.profile__user}>
                <img
                  className={style.profile__img}
                  src={
                    "https://c-int-sf.smule.com/rs-s38-int/sing/performance/cover/3b/f8/b352f35f-7c02-4bca-86b0-eafba9cd0a33_1024.png"
                  }
                />
                <button className={style.profile__btn}>Выберите файл</button>
                <p className={style.profile__icon}>
                  <FaTrashCan />
                </p>
              </div>
              <p className={style.profile__info}>
                Максимальный размер фото: 5 МБ
              </p>
            </div>
          </Group>
          <Group>
            <div className={style.pof}>История заказов</div>
            <OrdersUI data={orders} />
          </Group>
          <GroupFormRow>
            <GroupForm>
              <h3 className={style.pof}>Личная информация</h3>
              <p className={style.profile__titel}>Мое имя</p>
              <input
                className={style.profile__input}
                placeholder="Введите имя"
                type="text"
                value={user.username}
              />
              <p className={style.profile__titel}>Email</p>
              <input
                className={style.profile__input}
                placeholder="Введите Email"
                type="text"
                value={user.email}
              />
              <p className={style.profile__titel}>Введите номер телефона</p>
              <input
                className={style.profile__input}
                placeholder="Введите номер телефона"
                type="text"
              />
              <button className={style.profile__btn2}>Сохранить</button>
            </GroupForm>
            <GroupForm>
              <h3 className={style.pof}>Изменение пароля</h3>
              <p className={style.profile__titel}>Текущий пароль</p>
              <input
                className={style.profile__input}
                placeholder="Текущий пароль"
                type="password"
              />
              <p className={style.profile__titel}>Новый пароль</p>
              <input
                className={style.profile__input}
                placeholder="Пароль"
                type="password"
              />
              <p className={style.profile__titel}>Подтвердите пароль</p>
              <input
                className={style.profile__input}
                placeholder="Пароль"
                type="password"
              />
              <button className={style.profile__btn2}>Изменить</button>
            </GroupForm>
          </GroupFormRow>
        </div>
      </div>
    </ContainerUI>
  );
}

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const GroupForm = styled(Group)`
  flex-grow: 1;
  width: 100%;
`;

const GroupFormRow = styled(Group)`
  display: flex;
  gap: 50px;
  flex-direction: row;
`;

const Video = styled.video`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;
