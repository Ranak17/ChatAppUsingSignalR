import { useState } from 'react'
import WaitingRoom from './components/WaitingRoom'
import {HubConnection,HubConnectionBuilder, LogLevel} from '@microsoft/signalr'
import ChatRoom from './components/ChatRoom';
import SendMessageForm from './components/SendMessageForm';

function App() {
  const[connection,setConnection] = useState();
  const[messages,setMessages] = useState([]);
  const joinChatRoom = async (UserName,ChatRoom)=>{
    try{
     const connection = new HubConnectionBuilder()
                        .withUrl("chattestappkaran.azurewebsites.net/chat")
                        .configureLogging(LogLevel.Information)
                        .build();
      //setup handler
      connection.on("JoinSpecificChatRoom",(UserName,message)=>{
        setMessages(messages=>[...messages,{UserName,message}]);
      });

      connection.on("ReceiveSpecificMessage",(UserName,message)=>{
        setMessages(messages=>[...messages,{UserName,message}])
      })

      await connection.start();
      await connection.invoke("JoinSpecificChatRoom",{UserName,ChatRoom});
      setConnection(connection);
    }catch(e){
      console.log(e);
    }
  }

  const sendMessage = async(message)=>{
    try{
      await connection.invoke("SendMessage",message);
    }catch(e){
      console.log(e);
    }
  }

  return (
   <>
   {
    !connection?
    <WaitingRoom joinChatRoom={joinChatRoom}/>
    :
    <ChatRoom messages={messages} sendMessage={sendMessage} />

   }
   </>
  )
}

export default App
