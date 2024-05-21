import React from "react";
import style from "./Cabinet.module.css";
import { FaTrashCan } from "react-icons/fa6";
import { Navigate } from "react-router-dom";
import { useUnit } from "effector-react";
import { $user } from "../models/user";
import { ContainerUI } from "../shared/ui/container";
export function Cabinet() {
  const user = useUnit($user);

  return (
    <ContainerUI>
      <div className={style.profile}>
        {!user.username && <Navigate to="/login" replace={true} />}
        <div className={style.container}>
          <div className={style.pof}>Профиль {user.username}</div>
          <div className={style.profile__container}>
            <h3 className={style.profile__titel}>Фото профиля</h3>
            <div className={style.profile__user}>
              <img
                className={style.profile__img}
                src="https://maim.co.in/wp-content/uploads/2022/02/instagram-insta-user-3814081.png"
                alt=""
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
          <div className={style.pof}>История заказов</div>
          <div className={style.profile__info}>Вы еще не делали заказов</div>
          <h3 className={style.profile__titel}>Личная информация</h3>
          <p className={style.profile__titel}>Мое имя</p>
          <input
            className={style.profile__input}
            placeholder="Введите имя"
            type="text"
          />

          <p className={style.profile__titel}>Email</p>
          <input
            className={style.profile__input}
            placeholder="Введите Email"
            type="text"
          />

          <p className={style.profile__titel}>Введите номер телефона</p>
          <input
            className={style.profile__input}
            placeholder="Введите номер телефона"
            type="text"
          />

          <button className={style.profile__btn2}>Сохранить</button>
          <div className={style.mod}>
            <h3 className={style.profile__titel}>Изменение пароля</h3>
          </div>
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
          <button className={style.profile__btn2}>Сохранить</button>
          <h3 className={style.profile__titel}>Удалить профиль</h3>
          <p className={style.profile__remove}>
            <span className={style.profile__remove__icon}>
              <FaTrashCan />
            </span>{" "}
            Удалить профиль
          </p>
        </div>
      </div>
    </ContainerUI>
  );
}
