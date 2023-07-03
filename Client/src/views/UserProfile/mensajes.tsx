import { useSelector } from "react-redux";

import Chat from "../chat/chat"

const Mensajes = () => {
    const {name} = useSelector(state => state.user)

return (
    <div>
        <Chat name={name} />
    </div>
    )
}

export default Mensajes