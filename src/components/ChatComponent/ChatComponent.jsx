import React, { useEffect, useState } from 'react'
import './ChatComponent.scss'
import { Button } from '@mui/material'
import * as io from "socket.io-client";
import { useRef } from "react";
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
  }));

const connectionChat = io.connect("https://chat-server.fbg.pl");

export default function ChatComponent() {

const style = {
    btn: {marginLeft: '0.4em'}
}

const username = useSelector(state => state.username)


  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
}


const [data, setData] = useState([])
  // Wysłanie wiadomośći
  const sendEmail = (e) => {
    e.preventDefault()
    const message = {
      text: inputRef.current.value,
      authorId: username,
    };

    const allData = [...data, message]
    setData(allData)

    connectionChat.emit("chat message", message);
    inputRef.current.value = '';
  };


  useEffect(() => {
    focusInput()
    connectionChat.on("chat message", (message) => {
        setData(data => [...data, message])
        console.log(data)
        console.log(message)
      });
  }, [])

  return (
    <div className='chatcomponent'>
        <div className='chatcomponent__header'>Chat Component</div>
        <div className="chatcomponent__input">
            <input type="text" 
            ref={inputRef}
            />
            <Button
            style={style.btn}
            variant="outlined"
            onClick={sendEmail}
            >
                Wyślij
            </Button>
        </div>

        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        {
            data.map((el) => {
                return (
      <StyledPaper
        key={el.id}
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >

            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
                <Typography>{el.authorId}</Typography>
            </Grid>
            <Grid item xs>
                <Typography>{el.text}</Typography>
            </Grid>
            </Grid>

       
      </StyledPaper>
              )
            })
        }
    </Box>
        
    </div>
  )
}
