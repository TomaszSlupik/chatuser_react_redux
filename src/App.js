import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile'
import { Button } from '@mui/material';
import Chat from './components/Chat/Chat';
import { Link } from 'react-router-dom';



function App() {

  const style = {
    btn:{ marginTop: '1em', marginLeft: '0.5em'},
    link: {textDecoration: 'none', color: '#fff'}
  }

  return (
    <div className="App">
        <Router>
            <nav>
                <Button
                style={style.btn}
                variant='contained'
                >
                  <Link 
                   style={style.link}
                  to="/">Profil</Link>
                </Button>
                <Button
                style={style.btn}
                variant='contained'
                >
                  <Link 
                  style={style.link}
                  to="/chat">Chat</Link>
                </Button>
            </nav>

          <Routes>

            <Route path='/' element={<Profile />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
