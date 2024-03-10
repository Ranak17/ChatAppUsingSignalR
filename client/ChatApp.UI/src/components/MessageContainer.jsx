const MessageContainer = ({messages}) =>{
console.log( messages);
return (<>
<div>
    
        <table>
    {    messages.map((msg,index)=>

            <tr key={index}>
                <td>{msg.UserName} - {msg.message}</td>
            </tr>
    )}
    </table>
</div>
</>);
}

export default MessageContainer;