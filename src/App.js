import "./App.css";
import { RoutesFC } from "./componets/main";
import { HeaderUI } from "./componets";
import React from "react";
import { FooterUI } from "./componets/layout/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigateFadeUI } from "./componets/navigate-fade";
import { CartUI } from "./componets/layout/header/ui/cart";

function App() {
  return (
    <>
      <CartUI />
      <NavigateFadeUI />
      <HeaderUI />
      <RoutesFC />
      <FooterUI />
    </>
  );
}

export default App;
