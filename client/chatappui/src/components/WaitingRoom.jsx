import { useState } from "react";
const WaitingRoom = ({joinChatRoom})=>{
    const [userName, setUserName] = useState('');
    const [chatRoom, setChatRoom] = useState('');
    return (
        <>
        <form action="post" onSubmit={(e)=>
            {
                e.preventDefault();
                console.log("submit form");
                joinChatRoom(userName,chatRoom);
            }}>
            <label htmlFor="username">UserName : </label><br />
            <input name="username" type="text" onChange={(e)=>{setUserName(e.target.value)}}/><br/>
            <label htmlFor="chatRoom">chatRoom : </label><br />
            <input name="chatRoom" type="text" onChange={(e)=>{setChatRoom(e.target.value)}}/><br/>
            <button type="submit" > Join</button>
        </form>
        </>
    );
}
export default WaitingRoom;