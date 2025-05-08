import { createContext, useState } from "react";
import MessageService from "../service/MessageService";


const MessageContext =  createContext({});
const service = new MessageService();

export const MessageProvider = ({children}) => {

    const [ result, setResult ] = useState(null);
    const [ messages, setMessages ] = useState([]);



    const sendMessage = async (message) => {
        const successAPI = await service.createMessage(message);

        if (!successAPI.success){
            setResult(successAPI)
            return successAPI; 
        }
        else {
            setResult(successAPI)
            return successAPI; 
        }
    }

    const getMessages = async () => {
        const allMessages = await service.getMessages();
        console.log(allMessages);
        setMessages(allMessages);
    }


    const displayMessages =  () => {
        return messages.map((message, i) => {
            return <p key={i}>{message.message}</p>
        })
    }




    return(
        <MessageContext.Provider value={({result, setResult, sendMessage, getMessages, displayMessages, messages})}>
            {children}
        </MessageContext.Provider>
    )
}


export default MessageContext;