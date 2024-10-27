import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Default } from "../components/Default";
import { DefaultSecond } from "../components/DefaultSecond";
import { DefaultThird } from "../components/DefaultThird";


export const Pages: React.FC = () => {
  return (
    <>
      <header>
        <title>App.tsx(Top Page)</title>
        <p>main menu</p>
          <ul>
            <li><Link to="/">Default</Link></li>
            <li><Link to="/second">Default Second</Link></li>
            <li><Link to="/third">Default Third</Link></li>
          </ul>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Default />}></Route>
          <Route path="/second" element={<DefaultSecond />}></Route>
          <Route path="/third" element={<DefaultThird />}></Route>
        </Routes>
      </body>
      <footer>
        <p>sub menu</p>
      </footer>
    </>
  );
};
