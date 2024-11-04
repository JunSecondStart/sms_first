import React, { useEffect, useState} from "react";
import { useSms } from "../../context";
import { SmsState } from "../../types/index.d";
import { SendSMSCheck } from "./SendSMSCheck";

export const SendSMSCreated: React.FC = React.memo(() => {
  const sms = useSms();
  const [textIdIncremented, settextIdIncremented] = useState(1);

  const handleChangedContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    sms.settextContent({textContentValue:e.target.value});
  };

  const createSMS = () => {
    settextIdIncremented(textIdIncremented + 1);
    sms.smsSentByUser({
      id: textIdIncremented,
      phone_number_id: 1,
      user_id: 1,
      content_text: sms.textContentValue,
      created_at: "created_at",
      updated_at: "updated_at",
      sent_at: "sent_at"
    });
    sms.setCheckSwitch({ checkSwitchValue: true, calledModalToggleSwitch:!sms.calledModalToggleSwitch });
    sms.setawsCommand({awsCommandInputted:sms.content_text});
  };
  
  useEffect(()=>{
    console.log("smsData",sms.calledModalToggleSwitch);
  },[sms.calledModalToggleSwitch]);


  return (
    <>
      <section>
        sendSMSCreated
        <section className="flex justify-center">
          <div className="p-12">
            <div>
              <textarea
                value={sms.textContentValue}
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
});
