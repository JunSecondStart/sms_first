export type SmsContext = SmsFunc & SmsState & checkSwitchValue & awsCommandInputted & awsCommandInputtedReply & textContentValue;

// export type SmsStatus = {
//     state: "not to do anything" | "will send" | "sending now" | "sent";
// }
// object { key : value } 普通のkey&valueでのobject化 => 意味でなく、形式でFunc/State 分類？


export type SmsState = {
    id: number,
    phone_number_id: number,
    user_id: number,
    content_text: string,
    created_at: string,
    updated_at: string,
    sent_at: string,
}

export type SmsStatus = {
    SmsStatus : SmsState[];
}

export type textContentValue = {
    textContentValue : string;
}

export type checkSwitchValue = {
    checkSwitchValue: boolean,
    calledModalToggleSwitch: boolean;
}

export type awsCommandInputted = {
    awsCommandInputted : string;
}

export type awsCommandInputtedReply = {
    command : string;
}

export type SmsFunc = {
    smsSentByUser : (smsData:SmsState)=> void;
    settextContent : (textContentValue:textContentValue)=>void; 
    setCheckSwitch : (checkSwitchValue:checkSwitchValue) => void;
    setawsCommand: (awsCommandInputted:awsCommandInputted) => void;
    setawsCommandReply: (awsCommandInputtedReply:awsCommandInputtedReply) => void;
}

// const setProps: (value: React.SetStateAction<Game>) => void

//                         value
// //  object{ key : (args)=> return,type }
// key & value の object　が arrow 化している
// key = funcName, type = void(虚<うつろ>...何もないの意)

export type PhoneNumber = {
    id : number,
    user_id : number,
    sms_id : number,
    phonNumber: string,
    created_at: string,
    updated_at: string
}

export type User = {
    id: number,
    phone_number_id: number,
    sms_id: number,
    name: string,
    password: string,
    created_at: string,
    updated_at: string
}

// export type Props = {
//     key?: number;
// }