import React, { createContext, useContext, useState } from "react";
import { SmsState,SmsStatus, SmsFunc, SmsContext } from "../types/index.d";

const SmsContextCreated = createContext({} as SmsContext);
export const useSms = () => useContext(SmsContextCreated);
type Props = { children: React.ReactNode, key?:number };
export const SmsFieldContextProvider: React.FC<Props> = ({ children }) => {
    const [sms, setSms] = useState<SmsState[]>([
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
        },
        {
          id: 1,
          phone_number_id: 0,
          user_id: 0,
          title: "sample1",
          content_text: "sample1",
          created_at: "2024-10-30 20:07:00",
          updated_at: "2024-10-30 20:07:00",
          sent_at: "2024-MM-DD HH:MM:SS",
        },
        {
          id: 2,
          phone_number_id: 0,
          user_id: 0,
          title: "sample2",
          content_text: "sample2",
          created_at: "2024-10-30 20:07:00",
          updated_at: "2024-10-30 20:07:00",
          sent_at: "2024-MM-DD HH:MM:SS",
        },
        {
          id: 3,
          phone_number_id: 0,
          user_id: 0,
          title: "sample",
          content_text: "sample",
          created_at: "2024-10-30 20:07:00",
          updated_at: "2024-10-30 20:07:00",
          sent_at: "2024-MM-DD HH:MM:SS",
        },
        {
          id: 4,
          phone_number_id: 0,
          user_id: 0,
          title: "sample",
          content_text: "sample",
          created_at: "2024-10-30 20:07:00",
          updated_at: "2024-10-30 20:07:00",
          sent_at: "2024-MM-DD HH:MM:SS",
        },
        {
          id: 5,
          phone_number_id: 0,
          user_id: 0,
          title: "sample",
          content_text: "sample",
          created_at: "2024-10-30 20:07:00",
          updated_at: "2024-10-30 20:07:00",
          sent_at: "2024-MM-DD HH:MM:SS",
        },
        {
          id: 6,
          phone_number_id: 0,
          user_id: 0,
          title: "sample",
          content_text: "sample",
          created_at: "2024-10-30 20:07:00",
          updated_at: "2024-10-30 20:07:00",
          sent_at: "2024-MM-DD HH:MM:SS",
        },
        {
          id: 7,
          phone_number_id: 0,
          user_id: 0,
          title: "sample",
          content_text: "sample",
          created_at: "2024-10-30 20:07:00",
          updated_at: "2024-10-30 20:07:00",
          sent_at: "2024-MM-DD HH:MM:SS",
        },
        {
          id: 8,
          phone_number_id: 0,
          user_id: 0,
          title: "sample",
          content_text: "sample",
          created_at: "2024-10-30 20:07:00",
          updated_at: "2024-10-30 20:07:00",
          sent_at: "2024-MM-DD HH:MM:SS",
        }]);
const SmsFunc:SmsFunc = {
    smsSentByUser : () => {
            console.log(sms)
        },
} 
    return (
        <SmsContextCreated.Provider value={{ ...sms, ...SmsFunc}}>
            {children}
        </SmsContextCreated.Provider>
    );
}