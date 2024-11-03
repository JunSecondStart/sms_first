import React, { useEffect, useState} from "react";
import { useSms } from "../../context";
import { SmsState } from "../../types/index.d";
import { SendSMSCheck } from "./SendSMSCheck";

export const SendSMSCreated: React.FC = () => {
  const sms = useSms();
  const [textIdIncremented, settextIdIncremented] = useState(1);
  const [textTitle, setTextTitle] = useState("title,default");
  const [textContent, setTextContent] = useState("content,default");
  const [smsDataInputted, setsmsDataInputted] = useState<SmsState>({
    id: 0,
    phone_number_id: 0,
    user_id: 0,
    title: "title",
    content_text: "content",
    created_at: "created_at",
    updated_at: "updated_at",
    sent_at: "sent_at",
  });

  const handleChangedText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextTitle(e.target.value);
  };

  const handleChangedContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(e.target.value);
    sms.settextContent({textContentValue:e.target.value});
  };

  const createSMS = () => {
    settextIdIncremented(textIdIncremented + 1);
    setsmsDataInputted({
      id: textIdIncremented,
      phone_number_id: 1,
      user_id: 1,
      title: textTitle,
      content_text: sms.textContentValue,
      created_at: "created_at",
      updated_at: "updated_at",
      sent_at: "sent_at"
    });
    sms.smsSentByUser(smsDataInputted);
    sms.setCheckSwitch({ checkSwitchValue: true });
    sms.setawsCommand({awsCommandInputted:sms.content_text});
  };
  
  useEffect(()=>{
    console.log("smsData",smsDataInputted);
  },[sms.content_text]);


  return (
    <>
      <section>
        sendSMSCreated
        <section className="flex justify-center">
          <div className="p-12">
            <div>
              <textarea
                value={textTitle}
                onChange={handleChangedText}
                placeholder="title"
              />
            </div>
            <div>
              <textarea
                value={textContent}
                onChange={handleChangedContent}
                placeholder="content"
              />
            </div>
          </div>
          <div>
            <button className="bg-sky-200 p-8 m-8" onClick={() => createSMS()}>
              create
            </button>
          </div>
        </section>
        <section>
          {sms.checkSwitchValue ? (
            <div>
              <SendSMSCheck />
            </div>
          ) : (
            <p>stay, modal.modal flag = 0</p>
          )}
        </section>
      </section>
    </>
  );
};
