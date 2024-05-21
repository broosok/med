import { createEvent, createStore, restore } from "effector";

export const setMobileMenu = createEvent();
export const $mobileMenu = restore(setMobileMenu, false);
