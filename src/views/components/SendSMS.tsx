import React from "react";
import { SendSMSView } from "./SendSMSView";

export const SendSMS: React.FC = () => {
  return (
    <>
      <header>menu for sms to send</header>
      <section>
        <SendSMSView />
      </section>
      <footer>default sub menu</footer>
    </>
  );
};
