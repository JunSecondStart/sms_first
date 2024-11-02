import React from "react";
import { useSms } from "../../context";
export const LookBackHistoryDetail: React.FC = () => {
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
