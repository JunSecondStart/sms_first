import React from "react";
import { Home } from "./Home";

export const Default: React.FC = () => {
  return (
    <>
      <header>default menu</header>
      <body>
        <Home />
      </body>
      <footer>default sub menu</footer>
    </>
  );
};
