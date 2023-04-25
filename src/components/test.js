import React, { useEffect, useRef } from "react";
import * as io from "socket.io-client";

export default function test() {

    const socketRef = useRef()

    useEffect(() => {
        socketRef.current =  io.connect("https://chat-server.fbg.pl");
        socketRef.current.on("chat message", (message) => {
            console.log(message)
        })

        return () => {
            socketRef.current.disconnect();
        }
    }, [])

  return (
    <div>

    </div>
  )
}


useEffect(() => {
    socketRef.current = io.

})