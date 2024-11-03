import React from "react";
import { SmsState,SmsContext, PhoneNumber, User } from "../../types/index.d";
import { Link } from "react-router-dom";
import { useSms } from "../../context/index";
import { SendSMSCreated } from "./SendSMSCreated";

export const SendSMSView: React.FC = () => {
  const sms = useSms();
  return (
    <>
      <section>
        {/* <ul>
          {Sms.map((s)=>(<li><Link to="./LookBackHistoryDetail" >No_sms,{s.id}:タイトル,{s.title}:送信日時,{s.sent_at}</Link></li>))}
        </ul> */}
        <div>
        <SendSMSCreated />
        </div>
        <ul>
          id:{sms.id},title:{sms.title},content:{sms.content_text},user_id:{sms.user_id},phone_number_id:{sms.phone_number_id}
        </ul>
      </section>
    </>
  );
};
