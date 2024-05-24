import React from "react";
import style from "./slider.module.css";
import Carousel from "react-bootstrap/Carousel";

const Image = ({ src }) => {
  return (
    <img
      style={{ width: "100%", height: "800px", objectFit: "contain" }}
      src={src}
    />
  );
};

export const SliderUI = () => {
  const images = [
    "image16.jpg",
    "image33.jpg",
    "image18.jpg",
    "image19.jpg",

    // Добавьте свои URL-адреса изображений здесь
  ];
  return (
    <Carousel>
      {images.map((x) => (
        <Carousel.Item>
          <Image src={x} />
          <Carousel.Caption>
            <h3>Лимитированные кроссовки </h3>
            <p>
              Ваших <a className={style.colortext}>любимых</a> брендов
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
