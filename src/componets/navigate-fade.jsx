import { useEffect, useState } from "react";
import style from "./navigate.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUnit } from "effector-react";
import { $navigation, setNavigation } from "./navgiation";

export const NavigateFadeUI = () => {
  const navigation = useUnit($navigation);

  const navigate = useNavigate();

  useEffect(() => {
    if (navigation) {
      setTimeout(() => {
        navigate(navigation);
        setTimeout(() => {
          setNavigation(null);
        }, 500);
      }, 500);
    }
  }, [navigation]);

  if (navigation !== null) {
    return <div className={style.animation}></div>;
  }

  return null;
};
