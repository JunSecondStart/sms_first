import React from "react";
import { Home } from "./Home";
import { SendSMSCreated } from "./SendSMSCreated";

export const SendSMS: React.FC = () => {
  return (
    <>
      <header>menu for sms to send</header>
      <body>
        <SendSMSCreated />
      </body>
      <footer>default sub menu</footer>
    </>
  );
};
