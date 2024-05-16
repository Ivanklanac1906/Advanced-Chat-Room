
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"


const ChatsPage = () =>{

    const chatProps = useMultiChatLogic(
        'ee239a07-6fef-4e78-ba70-c6f98ce8bd15', 
        props.user.username, 
        props.user.secret);
    return (
<div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow{...chatProps} style ={{height: '100%'}}/>
    </div>
    )
}

export default ChatsPage