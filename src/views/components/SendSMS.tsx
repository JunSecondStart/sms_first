import React from "react";
import { SendSMSView } from "./SendSMSView";

export const SendSMS: React.FC = () => {
  return (
    <>
      <header>menu for sms to send</header>
      <body>
        <SendSMSView />
      </body>
      <footer>default sub menu</footer>
    </>
  );
};
