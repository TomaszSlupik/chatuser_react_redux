import React from 'react'
import './Profile.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setUserName } from '../../store/actions/chatActions'
import { Button } from '@mui/material'

export default function Profile() {

const  username = useSelector(state => state.username)
const dispatch = useDispatch()

const style ={
    btn: {marginLeft: '0.3em'}
}

  return (
    <div>
        <div className="profile">
            <h1>Profile</h1>
            <h3>UserName: {username}</h3>
            <div className='profile__input'>Podaj UserName
                <input type="text" 
                value={username}
                onChange={
                    e => {
                        const user = e.target.value
                        dispatch(setUserName(user))
                    }
                }
                />
                <Button
                style={style.btn}
                variant='outlined'
                >
                    Zapisz nowe imię
                </Button>
            </div>
        </div>
    </div>
  )
}
