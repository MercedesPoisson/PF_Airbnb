import { useSelector } from "react-redux";

import Chat from "../chat/chat"
import ChatList from "../chat/chatList";
import UserNavBar from "./UserNavBar"

const Mensajes = () => {
  const {name} = useSelector(state => state.user)
  
  return (
    <div>
        <UserNavBar />
        <ChatList />
        <Chat name={name} />
    </div>
  )
}

export default Mensajes

