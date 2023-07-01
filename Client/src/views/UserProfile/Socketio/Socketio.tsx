import { useEffect, useState } from "react";
import io from "socket.io-client";

interface Message {
    body: string;
    from: string;
  }

const socket = io("http://localhost:3001");
// const socket = io("/");

export default function App() {
    const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", receiveMessage)

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message: any) => {
    message.from = "Usuario";
    setMessages(state => [message, ...state]);
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: "Yo",
    };
    setMessages(state => [newMessage, ...state]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };

  return (
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
  );
}