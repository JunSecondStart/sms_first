import React from "react";
import { Home } from "./Home";
import { UserRegistered } from "./UserRegistered";

export const User: React.FC = () => {
  return (
    <>
      <header>menu for user</header>
      <section>
        <UserRegistered />
      </section>
      <footer>default sub menu</footer>
    </>
  );
};
