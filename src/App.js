import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login';
import Home from './Components/Home';
import JudgeLogin from './Components/Judge';
import Lobby from './Components/Lobby';
import Chat from './Components/Chat';
import Calender from './Components/Calender';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/judge" element={<JudgeLogin />} /> 
      <Route path="/lobby" element={<Lobby />} /> 
      <Route path="/chat" element={< Chat/>} /> 
      <Route path="/calender" element={< Calender/>} /> 
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
