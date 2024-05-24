/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route, useLocation } from "react-router";
import style from "./styles.module.css";
import { Сatalog } from "./Pages/Сatalog";
import { Home } from "./Pages/home/";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
import { Customers } from "./Pages/Customers";
import { Notfoundpage } from "./Pages/Notfoundpage";
import { Info } from "./Pages/Info";
import { Register } from "./Pages/Register";
import { Cabinet } from "./Pages/Cabinet";
import { Order } from "./Pages/Order";
export const RoutesFC = () => {
  const location = useLocation();

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.page}>
          <Routes location={location} key={location.pathname}>
            <Route path="/Info" element={<Info />} />
            <Route path="/catalog" element={<Сatalog />} />
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="*" element={<Notfoundpage />} />
            <Route path="Register" element={<Register />} />
            <Route path="Cabinet" element={<Cabinet />} />
            <Route path="Order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
