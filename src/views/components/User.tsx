import React from "react";
import { Home } from "./Home";
import { UserRegistered } from "./UserRegistered";
import { UserView } from "./UserView";

export const User: React.FC = () => {
  return (
    <>
      <header>menu for user</header>
      <section>
        <UserRegistered />
      </section>
      <section>
        <p>view</p>
        <UserView />
      </section>
      <footer>default sub menu</footer>
    </>
  );
};
