import React, { useState } from "react";
import { useSms } from "../../context";
import { SmsState } from "../../types/index.d";

export const SendSMSCreated: React.FC = () => {
  const sms = useSms();
  const [textIdIncremented,settextIdIncremented]=useState(1);
  const [textTitle,setTextTitle] = useState("title,default");
  const [textContent,setTextContent] = useState("content,default");
  const smsData:SmsState={
    id: textIdIncremented,
    phone_number_id: 1,
    user_id: 1,
    title: textTitle,
    content_text: textContent,
    created_at: "created_at",
    updated_at: "updated_at",
    sent_at: "sent_at",
  };

  const handleChangedText=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setTextTitle(e.target.value);
  };

  const handleChangedContent=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setTextContent(e.target.value);
  };
  
  const createSMS = () => {
    settextIdIncremented(textIdIncremented+1);
    sms.smsSentByUser(smsData);    
  };
  return (
    <>
      <body>
        sendSMSCreated
        <div className="bg-sky-200" onClick={()=>createSMS()}>Push!!, here.</div>
          <textarea
            value={textTitle}
            onChange={handleChangedText}
            placeholder="title"
          />
          <textarea
          value={textContent}
          onChange={handleChangedContent}
          placeholder="content"
        />
          <button onClick={()=>createSMS()}>create</button>
      </body>
    </>
  );
};