import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
const ChatRoom = ({messages,sendMessage}) =>{
    return(
        <>
            <h1>ChatRoom</h1> 
            <MessageContainer messages = {messages}/>
            <SendMessageForm sendMessage={sendMessage}/>
        </>
    );
}

export default ChatRoom;