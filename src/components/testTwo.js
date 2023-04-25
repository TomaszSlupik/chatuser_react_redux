
// Chat solution
import React, {useEffect, useRef, useState} from "react";
import * as io from "socket.io-client";

const ChatNew = (props) => {
    const [chatInput, setChatInput] = useState('');
    const [messages, setMessage] = useState([]);
    const chatRef = useRef();

    const onReceiveMessage = (message) => {
        setMessage(msgs => [...msgs, message])
    }

    useEffect(() => {
        chatRef.current = io.connect("https://chat-server.fbg.pl");
        chatRef.current.on("chat message", onReceiveMessage);
        return () => {
            chatRef.current.disconnect();
        }
    }, [])

    const onMessageSend = () => {
        chatRef.current.emit("chat message", {
          text: chatInput,
          authorId: props.username,
        });
        setChatInput('')
    }

    return (
        <div>
            <h1>Chat Component</h1>
            <div>
                <div>
                    <input
                        value={chatInput}
                        onChange={event => setChatInput(event.target.value)}
                    />
                    <button onClick={onMessageSend}>Wyslij</button>
                </div>
                <ul>
                    {messages.map(msg => <li key={msg.id}>{msg.authorId}: {msg.text}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default ChatNew;
