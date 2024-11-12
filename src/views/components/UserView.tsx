import React, { useState } from "react";
import { useSms } from "../../context";
import axios,{ AxiosResponse } from 'axios';
import { UserData } from "../../types/index.d";
import { data } from "@remix-run/router";

export const UserView: React.FC = () => { 
  // export const SendSMSCheck: React.FC = React.memo(() => {
    const [getUsers, setgetUsers] = useState(false);
    const [usersData, setusersData] = useState<UserData[]>([{
      id : 99999,
      phone_number: "999999999",
      name : "ghost",
      password: "ghost999999999"
    }]);
    // const sms = useSms();
    const executegetUsers = () => {
      axios.get('http://127.0.0.1:8383/users')
      .then(function (response: AxiosResponse) {
          // 処理が成功した場合
          // sms.setawsCommandReply({command: response.data.command});
          console.log(response.data);
          setusersData(response.data);
          const JSONresponse=JSON.stringify(response.data);
          const JsonParse=JSON.parse(JSONresponse);
          console.log(JsonParse.command);
          // // setawsCommandReply({command:JsonParse.command})
          // sms.setawsCommandReply({command:JsonParse.command});
      })
      .catch(function (error:AxiosResponse) {
          // エラー処理
          console.log(error);
          return error;
      })
      .then(function () {
        // console.log("awsCommand:",sms.command);
      });
  }
  
  const getSwitch = () =>{
    setgetUsers(!getUsers);
    executegetUsers();
  }

  return (
    <>
      <section className="bg-green-200">
        Regist
        <div>
          ここにうつるよ
            <button onClick={()=>getSwitch()}>click point</button>
          { getUsers ?
          <ul>
            true
            {usersData.map((data)=>(
                <li>id:{data.id},phone_number:{data.phone_number},name:{data.name},password:{data.password}</li>
            ))}
          </ul>
          :<p>false</p>}
        </div>
      </section>
    </>
  );
};
