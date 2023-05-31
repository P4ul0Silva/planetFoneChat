import { ChangeEvent, ReactNode, createContext, useEffect, useState } from "react";
import { socket } from "../../services/api";
import { toast } from "react-toastify";
import uuid from "react-uuid";

export const MessagesContext = createContext({} as MessagesProviderData);

interface IMessage {
  text: string;
  createdAt: Date;
  userName: string;
  email: string;
  id: string;
}

interface MessagesProps {
    children: ReactNode;
}

interface MessagesProviderData {
    isConnected: Boolean;
    setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
    message: string | undefined;
    setMessage: React.Dispatch<React.SetStateAction<string | undefined>>
    messagesHistory: IMessage[] | undefined;
    setMessagesHistory: React.Dispatch<React.SetStateAction<IMessage[] | undefined>>;
    input: ChangeEvent<HTMLInputElement> | undefined;
    setInput: React.Dispatch<React.SetStateAction<ChangeEvent<HTMLInputElement> | undefined>>;
    typing: Boolean;
    setTyping: React.Dispatch<React.SetStateAction<Boolean>>;
    isNewMessage: Boolean;
    setIsNewMessage: React.Dispatch<React.SetStateAction<Boolean>>;
    createMessage: () => void;
    fetchAllMessages: (message: IMessage[]) => void;
}


export function MessagesProvider({ children }: MessagesProps) {
    const [isConnected, setIsConnected] =  useState(socket.connected);
    const [message, setMessage] = useState<string>();
    const [isNewMessage, setIsNewMessage] = useState<Boolean>(false);
    const [messagesHistory, setMessagesHistory] = useState<IMessage[]>()
    const [input, setInput] = useState<ChangeEvent<HTMLInputElement>>()
    const [typing, setTyping] = useState<Boolean>(false);
    const userEmail = window.localStorage.getItem("@planetchat: UserEmail");
    const userName = window.localStorage.getItem("@planetchat: UserName");

    function createMessage() {
      const now = new Date();
      const msgObj: IMessage = {
        text: input!.target.value,
        id: uuid(),
        userName: userName!,
        email: userEmail!,
        createdAt: now
      }
      setMessage(input!.target.value);
      socket.emit('createMessage', msgObj);
      socket.emit('findAllMessages');
      input!.target.value = '';
      setTyping(false);
    }

    
    socket.on('createMessage', onNewMessage);
    function onNewMessage() {
      setIsNewMessage(true);
    }

    function fetchAllMessages(messages: IMessage[]) {
      setMessagesHistory(messages);
    }
    useEffect(()  => {

    function onConnect() {
      setIsConnected(true);
      toast.info(`Usuário conectado`)
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    
    socket.emit("findAllMessages");
    socket.on('createMessage', onNewMessage);
    socket.on('findAllMessages', fetchAllMessages);
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    return () =>  {
      socket.off('createMessage', onNewMessage);
      socket.off('findAllMessages', fetchAllMessages);
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    }
  }, [isNewMessage, message])

    return (
        <MessagesContext.Provider value={{isConnected,
            setIsConnected,
            message,
            setMessage,
            messagesHistory,
            setMessagesHistory,
            input,
            setInput,
            createMessage,
            typing,
            setTyping,
            fetchAllMessages,
            isNewMessage,
            setIsNewMessage
            }}>
        {children}
        </MessagesContext.Provider>
    )
}