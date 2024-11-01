import React from "react";
import { SmsState,SmsContext, PhoneNumber, User } from "../../types/index.d";
import { Link } from "react-router-dom";
import { useSms } from "../../context/index";

export const LookBackHistoryDisplay: React.FC = () => {
  const sms = useSms();
  return (
    <>
      <body>
        件数表記(LookBackHistoryDisplay)
        <br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
        10
        <br />
        {/* <ul>
          {Sms.map((s)=>(<li><Link to="./LookBackHistoryDetail" >No_sms,{s.id}:タイトル,{s.title}:送信日時,{s.sent_at}</Link></li>))}
        </ul> */}
        <ul>
          id:{sms.id},title:{sms.title},content:{sms.content_text},user_id:{sms.user_id},phone_number_id:{sms.phone_number_id}
        </ul>
      </body>
    </>
  );
};
