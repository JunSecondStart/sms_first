import React from "react";
import { Routes, Route } from "react-router-dom";
import { Default } from "../components/Default";
import { DefaultSecond } from "../components/DefaultSecond";
import { DefaultThird } from "../components/DefaultThird";
import { SideBar } from"./SideBar";
import { NaviBar } from "./NaviBar";
import './../../index.css';

export const Pages: React.FC = () => {
  return (
    <>
      <header>
        <title>Navibar-mode-</title>
        <div>
          <NaviBar />
        </div>
      </header>
      <section>
        <p>SideBar-func-</p>
        <div>
          <SideBar />
        </div>
      </section>
      <body>
        <p>Components-contents-</p>
        <Routes>
          <Route path="/" element={<Default />}></Route>
          <Route path="/second" element={<DefaultSecond />}></Route>
          <Route path="/third" element={<DefaultThird />}></Route>
        </Routes>
      </body>
      {/* <footer>
        <p>sub menu</p>
      </footer> */}
    </>
  );
};
