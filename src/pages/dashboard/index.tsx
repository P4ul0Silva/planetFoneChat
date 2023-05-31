import { ChangeEvent, SetStateAction, useEffect} from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/Users/UserContext";
import { Wrapper } from "./styles";
import logo from "../../assets/planetchat-background.png";
import { CgLogOut } from 'react-icons/cg';
import { BsFillCircleFill } from 'react-icons/bs';
import { SlArrowDown } from 'react-icons/sl';
import { MessagesContext } from "../../contexts/Messages/MessagesContext";
import { useRef } from "react";
import { socket } from "../../services/api";

export const Dashboard = ()  => {
  const messageBoxDiv = useRef<HTMLDivElement>(null);
  const {logout, getUser, getUsers, users} = useContext(UserContext);
  const { 
    createMessage,
    messagesHistory,
    input,
    setInput,
    setTyping,
    typing,
    isNewMessage,
    setIsNewMessage,
  } = useContext(MessagesContext);
  
  const userFullName = window.localStorage.getItem("@planetchat: UserName");
  const userEmail = window.localStorage.getItem("@planetchat: UserEmail");
  

    function handleInput(inputEvent: SetStateAction<ChangeEvent<HTMLInputElement> | undefined>) {
      setInput(inputEvent);
      input?.target.value == "" ? setTyping(false) : setTyping(true);
    };

    function handleScrollToLastMessage(value: Boolean) {
      if(messageBoxDiv.current) {
        const userScrolling = messageBoxDiv.current.scrollTop < messageBoxDiv.current.scrollHeight;
        if(userScrolling) {
          messageBoxDiv.current.scrollTop = messageBoxDiv.current.scrollHeight;
          setIsNewMessage(value);
        };
        };
      };

      function formatTime(date: Date) {
        const time = new Date(date)
        return ( <span>{`${time.getHours()}:${time.getMinutes() > 10 ? time.getMinutes() : "0"+time.getMinutes()}`}</span>)
      }

    useEffect(() => {
        getUser(userEmail!);
        getUsers();
        socket.disconnect();
        socket.connect();
        handleScrollToLastMessage(true);
    }, []);
    
    return (
        <Wrapper>
          <header className="mainHeader">
            <div className="logoBox">
            <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="logoutDiv">
            <p className="userName">{userFullName}</p>
            <CgLogOut onClick={() => logout()} size={25} style={{width: "50px", height: "30px"}}/>
            </div>
          </header>
          <div className="mainContainer">
          <aside>
              <ul className="usersList">
                {users?.map((user, index) => (
                  <div key={index} className="user">
                  <p>{`${user.firstName} ${user.lastName}`}</p>
                  <BsFillCircleFill/>
                </div>
                ))}
              </ul>
          </aside>
          <div className="messageContainer">
            <header><p>Home</p></header>
            <div ref={messageBoxDiv} className="chatBox">
              {messagesHistory?.map((message) => (
                <div className={`${message.userName == userFullName ? 'message ownMessage' : 'message'}`} key={message.id}>
                  <h4>{`${message.userName == userFullName ? 'Você' :  message.userName}`}</h4>
                  <p>{message.text}</p>
                  <span>{formatTime(message.createdAt)}</span>
                </div>
              ))}
              {isNewMessage && 
              <div className="scrollArrow" onClick={() => handleScrollToLastMessage(false)}>
              <SlArrowDown size={21}/>
              </div>}
            </div>
            <div className="sendMessage">
              <input onChange={(e) => handleInput(e)} type="text" />
              <button disabled={!typing} onClick={() => createMessage()}>Enviar</button>
            </div>
          </div>
          </div>
        </Wrapper>
    )
};