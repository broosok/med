import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import { useGeo } from "../../../../hooks/useGeo";
import { useUnit } from "effector-react";
import { $user, setUser } from "../../../models/user";
import { $basket } from "../../../cards/ui/model";
import { useAuth } from "../../../use-auth";
import { logoutRequest } from "../../../hooks/auth";
import {
  Link,
  redirect,
  redirectDocument,
  useNavigate,
} from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { RiMenuFill, RiUser3Line } from "react-icons/ri";
import { $mobileMenu, setMobileMenu } from "../model/mobile-menu";
import { MobileMenuUI } from "./mobile-menu";
import { setNavigation } from "../../../navgiation";

export const HeaderUI = () => {
  const [animation, setAnimation] = useState(false);
  let [cartOpen, setCartOpen] = useState(false);
  const { city } = useGeo();
  const user = useUnit($user);
  const basket = useUnit($basket);
  const mobileMenu = useUnit($mobileMenu);
  useAuth();

  const navigate = useNavigate();

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
        <a className={style.logo_a} onClick={() => setNavigation("/")}>
          DLVB
        </a>
      </div>
      <div className={style.menu}>
        <a
          className={style.buuttoncolor}
          onClick={() => setNavigation("/catalog")}
        >
          Каталог
        </a>
        <a
          className={style.buuttoncolor}
          onClick={() => setNavigation("/login")}
        >
          Кабинет
        </a>
        <a
          className={style.buuttoncolor}
          onClick={() => setNavigation("/Customers")}
        >
          Покупателям
        </a>
        <a
          className={style.buuttoncolor}
          onClick={() => setNavigation("/Contact")}
        >
          Контакты
        </a>
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
