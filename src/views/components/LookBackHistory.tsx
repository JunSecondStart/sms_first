import React from "react";
import { LookBackHistoryDisplay } from "./LookBackHistoryDisplay";
import { SmsState } from "../../types/index.d";

export const LookBackHistory: React.FC = () => {

  return (
    <>
      <header>menu for history</header>
      <body>
        <LookBackHistoryDisplay/>
      </body>
      <footer>default sub menu</footer>
    </>
  );
};
