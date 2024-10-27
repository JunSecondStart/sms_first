import React from "react";
import { Home } from "./Home";

export const DefaultSecond: React.FC = () => {
  return (
    <>
      <header>default second's menu</header>
      <body>
        <Home />
      </body>
      <footer>default second's sub menu</footer>
    </>
  );
};
