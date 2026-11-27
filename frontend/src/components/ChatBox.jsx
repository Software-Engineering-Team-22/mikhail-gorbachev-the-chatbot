import { useState } from "react";

export default function ChatBox() {
    const[message, setMessage] = useState("");
    const[messages, setMessages] = useState([]);

        function handleSend() {
            if (message.trim() === "") return;
            setMessages([...messages, message]);
            setMessage("");
        }

    return (
        <div className="chat-box">
            <div className="chat-input">
                <input
                type="text"
                value={message}
                placeholder="Type your message..."
                onChange={(e)=>setMessage(e.target.value)}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )

}