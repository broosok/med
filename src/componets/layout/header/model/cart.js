import { createEvent, createStore, restore } from "effector";

export const setCartShow = createEvent();
export const $cartShow = restore(setCartShow, true);

export const $cart = createStore([]);

export const setCart = createEvent();

$cart.on(setCart, (store, payload) => [...store, payload]);
