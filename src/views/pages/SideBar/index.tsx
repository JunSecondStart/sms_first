import React from "react";
import { Link } from "react-router-dom";
import './../../../index.css';

export const SideBar: React.FC = () => {
  return (
    <>
        <p>sub menu -func-</p>
        <ul className="bg-sky-400 h-20">
            <li><Link to="/create_register">A．番号を登録する(I register new number.)</Link></li>
            <li><Link to="/send_sms">B．SMSを送る(I send SMS.)</Link></li>
            <li><Link to="/look_back_history">C．履歴(I look back history.)</Link></li>
        </ul>
    </>
  );
};
