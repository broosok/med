import { createEvent, createStore, restore } from "effector";
import { isNumber } from "lodash";

export const setCartShow = createEvent();
export const $cartShow = restore(setCartShow, false);

export const $cart = createStore(
  JSON.parse(localStorage.getItem("cart")) || {}
);

export const setCart = createEvent();

$cart.on(setCart, (store, payload) => {
  const name = `${payload.title}-${payload.size}`;

  if (!store[name]) {
    store[name] = {};
  }

  store[name] = { ...store[name], ...payload };
  if (!store[name].qnty) {
    store[name].qnty = 1;
  } else {
    store[name].qnty++;
  }

  return { ...store };
});

export const $groupCard = $cart.map((store) => {
  return Object.values(store);
});

export const setQnty = createEvent();

$cart.on(setQnty, (store, { qnty, size, title }) => {
  console.log(store[title].sizes.filter((x) => x.size === size)[0].qnty, qnty);
  if (store[title].sizes.filter((x) => x.size === size)[0].qnty >= qnty) {
    store[title].qnty = qnty;
    return { ...store };
  }

  return store;
});

$cart.watch((store) => localStorage.setItem("cart", JSON.stringify(store)));

export const clearCart = createEvent();
$cart.on(clearCart, () => ({}));
