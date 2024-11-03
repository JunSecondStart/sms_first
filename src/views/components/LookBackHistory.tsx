import React from "react";
import { LookBackHistoryDetail } from "./LookBackHistoryDetail";
import { SmsState } from "../../types/index.d";

export const LookBackHistory: React.FC = () => {

  return (
    <>
      <header>menu for history</header>
      <section>
      件数表記(LookBackHistoryDisplay)
        <br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
        10
        <br />
        <LookBackHistoryDetail/>
      </section>
      <footer>default sub menu</footer>
    </>
  );
};
