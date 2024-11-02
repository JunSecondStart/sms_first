import React, { createContext, useContext, useState } from "react";
import { SmsState, SmsFunc, SmsContext } from "../types/index.d";

const SmsContextCreated = createContext({} as SmsContext);
export const useSms = () => useContext(SmsContextCreated);
type Props = { children: React.ReactNode, key?:number};
export const SmsFieldContextProvider: React.FC<Props> = ({ children }) => {
  const [smsData, setSmsData] = useState<SmsState>(
    {
      id: 0,
      phone_number_id: 0,
      user_id: 0,
      title: "wow!What's happened??",
      content_text:
        "This is SMS sent from `AWS SNS`.You could get and see this message.So, I could suceed coding this func.",
      created_at: "2024-10-30 20:07:00",
      updated_at: "2024-10-30 20:07:00",
      sent_at: "2024-MM-DD HH:MM:SS",
    });

const SmsFunc:SmsFunc = {
    smsSentByUser : (smsData:SmsState) => {
      // const Data = SmsData;
      setSmsData(
        {
          id: smsData.id,
          phone_number_id: smsData.phone_number_id,
          user_id: smsData.user_id,
          title: smsData.title,
          content_text:
          smsData.content_text,
          created_at: smsData.created_at,
          updated_at: smsData.updated_at,
          sent_at: smsData.sent_at,
        });
    }
} 
    return (
        <SmsContextCreated.Provider value={{ ...smsData, ...SmsFunc}}>
            {children}
        </SmsContextCreated.Provider>
    );
}