import React from "react";
import { useSms } from "../../context";
export const LookBackHistoryDetail: React.FC = () => {
  const sms = useSms();
  return (
    <>
      <section>
        <p>Detail</p>
        <p>No_array:{sms.id}</p>
      </section>
    </>
  );
};
