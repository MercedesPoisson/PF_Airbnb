import {io} from 'socket.io-client'
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const socket = io('http://localhost:3000')

const Chat = () => {

    const {name} = useSelector(state => state.user)
    
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
            <h1>Hello World</h1>
            <div className="text-white flex item-center justify-center">
                <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
                    <ul className="h-80 overflow-y-auto">
                    {messages.map((message, i) => (
                        <li key= {i} 
                        className={`my-2 p-2 table text-sm rounded-md ${message.from === 'Me' ? "bg-sky-700 ml-auto": "bg-black"}`}>
                            <p>{message.from}: {message.body}</p>
                        </li>
                    ))} 
                    </ul>
                    <input type="text" onChange={e => setMessage(e.target.value)}
                    value={message}
                    className="border 2 border-zinc-500 p-2 text-black w-full"/>
                    <button className="bg-blue-500">Send</button>
                </form>
            </div>
        </div> 
    )
}

export default Chat