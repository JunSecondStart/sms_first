import React from "react";
import { Link } from "react-router-dom";
import './../../../index.css';

export const SideBar: React.FC = () => {
  return (
    <>
        <p>sub menu -func-</p>
        <ul className="bg-sky-200 h-36 flex-col">
            <li><Link to="/user">ユーザーを登録する。<br/>-作成中-</Link></li>
        </ul>
        <ul className="bg-sky-400 h-36 flex-col">
            <li><Link to="/send_sms">A．SMSを送る(I send SMS.)<br/>-click here-</Link></li>
            <li><Link to="/create_register">B．番号を登録する(I register new number.)<br/>-作成中-</Link></li>
            <li><Link to="/look_back_history">C．送信履歴を見る(I look back history.)<br/>-作成中-</Link></li>
        </ul>
    </>
  );
};
