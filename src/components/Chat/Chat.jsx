import React from 'react'
import './Chat.scss'
import { useSelector } from 'react-redux'
import ChatComponent from '../ChatComponent/ChatComponent'

export default function Chat() {

const username = useSelector(state => state.username)

const style = {
    user: {color: '#1976d2', textTransform: 'uppercase'}
}

  return (
    <div className='Chat'>
        <h1>Chat</h1>
        <h3>Obecnie piszesz jako: 
            <span style={style.user}> {username}</span>
        </h3>
        <ChatComponent />
    </div>
  )
}
