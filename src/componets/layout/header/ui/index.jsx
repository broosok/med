import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import { useGeo } from "../../../../hooks/useGeo";
import { useUnit } from "effector-react";
import { $user, setUser } from "../../../models/user";
import { $basket } from "../../../cards/ui/model";
import { useAuth } from "../../../use-auth";
import { logoutRequest } from "../../../hooks/auth";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { RiMenuFill, RiUser3Line } from "react-icons/ri";
import { $mobileMenu, setMobileMenu } from "../model/mobile-menu";
import { MobileMenuUI } from "./mobile-menu";

export const HeaderUI = () => {
  let [cartOpen, setCartOpen] = useState(false);
  const { city } = useGeo();
  const user = useUnit($user);
  const basket = useUnit($basket);
  const mobileMenu = useUnit($mobileMenu);
  useAuth();

  const logoutRequestFx = async () => {
    const res = await logoutRequest();
    if (res.success) {
      setUser({});
    }
  };

  if (mobileMenu) {
    return <MobileMenuUI />;
  }

  return (
    <header className={style.chelka}>
      <div className={style.gorod}>
        Ваш город<u>{city}</u>
      </div>

      <div className={style.logo}>
        <Link className={style.logo_a} to="/">
          DLVB
        </Link>
      </div>
      <div className={style.menu}>
        <Link className={style.buuttoncolor} to="/catalog">
          Каталог
        </Link>
        <Link className={style.buuttoncolor} to="/Login">
          Кабинет
        </Link>
        <Link className={style.buuttoncolor} to="/Customers">
          Покупателям
        </Link>
        <Link className={style.buuttoncolor} to="/Contact">
          Контакты
        </Link>
      </div>
      <div className={style.right}>
        <div className={style.user}>
          {user.username}
          {user.username && <div onClick={() => logoutRequestFx()}>Выйти</div>}
        </div>
        <FaShoppingBag
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`${style.shopcart} ${cartOpen && style.active}`}
        ></FaShoppingBag>
      </div>
      <div className={style.mobile_menu} onClick={() => setMobileMenu(true)}>
        <RiMenuFill />
      </div>
    </header>
  );
};
