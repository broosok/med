import { createEvent, createStore } from "effector";

export const $basket = createStore([]);
export const setBasket = createEvent();

$basket.on(setBasket, (store, payload) => {
  if (store.includes(payload)) {
    return store.filter((x) => x !== payload);
  }

  return [...store, payload];
});
