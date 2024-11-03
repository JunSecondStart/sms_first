import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useSms } from "../../context";
import axios,{ AxiosResponse,AxiosRequestConfig } from 'axios';
import { awsCommandInputtedReply } from "../../types/index.d";

export const SendSMSCheck: React.FC = () => {
  const [openModal, setOpenModal] = useState(true);
  const sms = useSms();
  const yesFunc = () =>{
    setOpenModal(false);
    sms.setCheckSwitch({checkSwitchValue:false});
    //send
    executeSendSMS();
  }
  const noFunc = () =>{
    setOpenModal(false);
    sms.setCheckSwitch({checkSwitchValue:false});
  }
  const config: AxiosRequestConfig = {
    params: {
      content_text: sms.content_text
    },
    // headers: {
    //   'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    // }
  };
  // const [awsCommandReply, setawsCommandReply] = useState<awsCommandInputtedReply>({"command":"aaa"});
  const executeSendSMS = () => {
    axios.get('http://127.0.0.1:8003/send_sms/print_data',config)
    .then(function (response: AxiosResponse) {
        // 処理が成功した場合
        sms.setawsCommandReply({command: response.data.command});
        const JSONresponse=JSON.stringify(response.data);
        const JsonParse=JSON.parse(JSONresponse);
        console.log(JsonParse.command);
        // setawsCommandReply({command:JsonParse.command})
        sms.setawsCommandReply({command:JsonParse.command});
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

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <p className="px-4">Check</p>
        </Modal.Header>
        <Modal.Body>
          <div className="px-4">
            <p className="text-gray-500">
              I want to send your SMS,OK?
              <br/>
              使用するawsコマンド:{sms.command}
              <br/>
              フロント表記のテキスト:{sms.textContentValue}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="px-4"
            color="gray"
            onClick={() => yesFunc()}
          >
            Yes
          </Button>
          <Button
            className="px-4"
            color="gray"
            onClick={() => noFunc()}
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
