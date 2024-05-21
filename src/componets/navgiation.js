import { createEvent, createStore } from "effector";

export const setNavigation = createEvent();
export const $navigation = createStore(null);

$navigation.on(setNavigation, (_, payload) => payload);
