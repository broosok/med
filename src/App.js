import "./App.css";
import { RoutesFC } from "./componets/main";
import { HeaderUI } from "./componets";
import React from "react";
import { FooterUI } from "./componets/layout/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <HeaderUI />
      <RoutesFC />
      <FooterUI />
    </>
  );
}

export default App;
