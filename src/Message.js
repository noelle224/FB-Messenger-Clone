import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import './Message.css'

function Message({username, message}) {

    const isUser = username === message.username;
    //console.log(isUser);

  return (
      <div className={`message ${isUser && 'message__user'}`}>
            <CardContent>
                <h4> {!isUser && `${message.username || 'Unknown User'} :`} {message.message} </h4>
            </CardContent>
      </div>
        
  )
}

export default Message