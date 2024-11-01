import React from "react";
import { SmsState } from "../../types/index.d";
import { useSms } from "../../context";
export const LookBackHistoryDetail: React.FC<SmsState> = () => {
  const sms = useSms();
  return (
    <>
      <body>
        <p>Detail</p>
        <p>No_array:{sms.id}</p>
      </body>
    </>
  );
};
