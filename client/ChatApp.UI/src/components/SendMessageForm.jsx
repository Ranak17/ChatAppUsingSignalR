import { useState } from "react"

const SendMessageForm = ({sendMessage})=>{
const [message,setMessage] = useState('');
return (<>
<form method="post" onSubmit={e=>{
    e.preventDefault();
    sendMessage(message);
    setMessage('');
}}>
<label htmlFor="chatBox">chat : </label>
<input type="text"  onChange={e=>setMessage(e.target.value) }/>
<button type="submit" > Send</button>
</form>
</>);
}

export default SendMessageForm;