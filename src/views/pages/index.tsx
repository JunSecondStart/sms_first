import React from "react";
import { Routes, Route } from "react-router-dom";
import { Default } from "../components/Default";
import { DefaultSecond } from "../components/DefaultSecond";
import { DefaultThird } from "../components/DefaultThird";
import { SideBar } from "./SideBar";
import { NaviBar } from "./NaviBar";

export const Pages: React.FC = () => {
  return (
    <>
      <body className="h-screen">
        <section className="relative">
          <nav className="bg-black text-white w-full h-20">
            <title>Navibar-mode-</title>
            <div>
              <NaviBar />
            </div>
          </nav>
        </section>
        <section className="bg-black text-white absolute top-20 left-0 w-80 h-full">
          <p>SideBar-func-</p>
          <div>
            <SideBar />
          </div>
        </section>
        <section className="absolute top-20 left-80">
          <p>Components-contents-</p>
          <Routes>
            <Route path="/" element={<Default />}></Route>
            <Route path="/second" element={<DefaultSecond />}></Route>
            <Route path="/third" element={<DefaultThird />}></Route>
          </Routes>
        </section>
      </body>
      {/* <foot>
        <p>sub menu</p>
      </foot> */}
    </>
  );
};
