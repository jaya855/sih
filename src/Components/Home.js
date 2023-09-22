import React from 'react';
import JudgeLogin from './Judge'; // Import your JudgeLogin component
import UserLogin from './UserLogin'; // Import your UserLogin component
import Header from './Header';  
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import './Bg.css';
const Home = () => {

  const navigate = useNavigate();
  
  const handleUser = () => navigate('/login');
  
  const handleJudge = () => navigate('/judge');
    
  
  const bgImg = "C:\Users\lenovo\Desktop\court\SIH-2023\src\background-court.jpg";
  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-hidden   '>
      <Header/>
      <div className="background-image">
      <div className='center-container'>
        <Search />
      </div>
        {/* Content of your home page */}
      </div>
      


    </div>
    
  );
};

export default Home;