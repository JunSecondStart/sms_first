import React, { createContext, useContext, useState, useEffect } from "react";
import {
  SmsState,
  SmsFunc,
  SmsContext,
  textContentValue,
  checkSwitchValue,
  awsCommandInputted,
  awsCommandInputtedReply
} from "../types/index.d";

const SmsContextCreated = createContext({} as SmsContext);
export const useSms = () => useContext(SmsContextCreated);
type Props = { children: React.ReactNode; key?: number };
export const SmsFieldContextProvider: React.FC<Props> = ({ children }) => {
  const [smsData, setSmsData] = useState<SmsState>({
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
  const [textContent,settextContentValue] = useState<textContentValue>({textContentValue:"text,default"});
  const [checkSwitchValue, setcheckSwitchValue] = useState<checkSwitchValue>({
    checkSwitchValue: false,
  });
  const [awsCommand, setawsCommand] = useState<awsCommandInputted>({awsCommandInputted:""});
  const [awsCommandReply, setawsCommandReply] = useState<awsCommandInputtedReply>({command : ""});

  const SmsFunc: SmsFunc = {
    smsSentByUser: (smsData: SmsState) => {
      // const Data = SmsData;
      setSmsData({
        id: smsData.id,
        phone_number_id: smsData.phone_number_id,
        user_id: smsData.user_id,
        title: smsData.title,
        content_text: smsData.content_text,
        created_at: smsData.created_at,
        updated_at: smsData.updated_at,
        sent_at: smsData.sent_at,
      });
    },
    // smsSentByUser: (smsData: SmsState) => {
    //   // const Data = SmsData;
    //   setSmsData({
    //     id: smsData.id,
    //     phone_number_id: smsData.phone_number_id,
    //     user_id: smsData.user_id,
    //     title: smsData.title,
    //     content_text: smsData.content_text,
    //     created_at: smsData.created_at,
    //     updated_at: smsData.updated_at,
    //     sent_at: smsData.sent_at,
    //   });
    // },
    settextContent: (textContentValue:textContentValue) => {
      settextContentValue(textContentValue);
      console.log(textContent);
    },
    setCheckSwitch: (checkSwitchValue: checkSwitchValue) => {
      setcheckSwitchValue(checkSwitchValue);
      console.log(checkSwitchValue);
    },
    setawsCommand: (awsCommandInputted:awsCommandInputted)=>{
      setawsCommand(awsCommandInputted);
    },
    setawsCommandReply: (awsCommandInputtedReply:awsCommandInputtedReply)=>{
      setawsCommandReply(awsCommandInputtedReply);
    }
  };
  return (
    <SmsContextCreated.Provider
      value={{ ...smsData, ...SmsFunc, ...textContent ,...checkSwitchValue, ...awsCommand, ...awsCommandReply }}
    >
      {children}
    </SmsContextCreated.Provider>
  );
};
