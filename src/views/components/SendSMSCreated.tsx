import React from "react";
import { Home } from "./Home";
import { useSms } from "../../context";

export const SendSMSCreated: React.FC = () => {
  const sms = useSms();


  const createSMS = () => {
    // sms.push();
    sms.smsSentByUser();
  }
  return (
    <>
      <body>
        sendSMSCreated
        <div className="bg-sky-200" onClick={()=>createSMS()}>Push!!, here.</div>
      </body>
    </>
  );
};
