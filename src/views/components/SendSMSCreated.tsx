import React from "react";
import { Home } from "./Home";
import { useSms } from "../../context";
import { SmsState } from "../../types/index.d";

export const SendSMSCreated: React.FC = () => {
  const sms = useSms();
  const smsData:SmsState={
    id: 2,
    phone_number_id: 2,
    user_id: 2,
    title: "title",
    content_text: "content_text",
    created_at: "created_at",
    updated_at: "updated_at",
    sent_at: "sent_at",
  };

  const createSMS = () => {
    // sms.push();
    sms.smsSentByUser(smsData);
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