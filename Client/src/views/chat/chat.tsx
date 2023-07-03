import {io} from 'socket.io-client'
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const socket = io('http://localhost:3000')

const Chat = () => {

    const {name} = useSelector((state: any)=> state.user)
    
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([{
        body: '',
        from: '',
    }])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        socket.emit('message', message, name)
        
        const newMessage = {
            body: message,
            from: 'Me'
        }
        setMessages([...messages, newMessage])
        setMessage('');
    }

    useEffect(() => {
        const receiveMessage = (message: any) => {
            setMessages([...messages, message])
        }
        socket.on('message', receiveMessage)

        return ()=>{
            socket.off('message', receiveMessage)
        }
    } , [messages])

    return (
        <div>
            <div className="h-screen bg-white text-black flex items-center justify-center font-cairo ">
            <form onSubmit={handleSubmit} className="bg-white p-20 border">
                <h1 className="text-2xl font-bold my-2">Chat airebnb</h1>
                <input
                name="message"
                type="text"
                placeholder="Escribe aquí tu mensaje..."
                onChange={(e) => setMessage(e.target.value)}
                className="border border-zinc-500 p-2 w-96 text-black"
                value={message}
                autoFocus
                />

                <ul className="h-80 overflow-y-auto">
                {messages.map((message, index) => (
                <li
                key={index}
                className={`font-cairo my-2 p-2 table text-sm ${message.from === "Yo" ? "bg-primero ml-auto text-white" : "bg-tercero text-white"
                }`}
                >
            <b>{message.from}: </b>{message.body}
            </li>
        ))}
        </ul>
      </form>
    </div>
        </div> 
    )
}

export default Chat