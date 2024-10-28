import React from "react";
import { Link } from "react-router-dom";
import './../../../index.css';

export const SideBar: React.FC = () => {
  return (
    <>
        <p>sub menu -func-</p>
        <ul className="bg-sky-400 h-20 flex-col">
            <li><Link to="/look_back_history">A．送信履歴を見る(I look back history.)</Link></li>
            <li><Link to="/create_register">B．番号を登録する(I register new number.)</Link></li>
            <li><Link to="/send_sms">C．SMSを送る(I send SMS.)</Link></li>
        </ul>
    </>
  );
};
