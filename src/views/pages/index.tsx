import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { User } from "../components/User";
import { LookBackHistory } from "../components/LookBackHistory";
import { RegisterNewNumber } from "../components/RegisterNewNumber";
import { SendSMS } from "../components/SendSMS";
import { SideBar } from "./SideBar";
import { NaviBar } from "./NaviBar";
import { HomeButton } from "../components/HomeButton";

export const Pages: React.FC = () => {
  return (
    <>
      <section className="h-screen">
        <section className="relative flex">
          <div className="bg-sky-200">
            <HomeButton />
          </div>
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
            <Route path="/" element={<Home />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/look_back_history" element={<LookBackHistory />}></Route>
            <Route path="/create_register" element={<RegisterNewNumber />}></Route>
            <Route path="/send_sms" element={<SendSMS />}></Route>
          </Routes>
        </section>
      </section>
      {/* <foot>
        <p>sub menu</p>
      </foot> */}
    </>
  );
};
