import React, { useState, useEffect } from 'react';
import Chatbot from './Chatbot.jsx';
import CalendarComponent from './CalendarComponent';
const App = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const [videoStream, setVideoStream] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const videoRef = React.createRef();

  useEffect(() => {
    if (cameraOn) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [cameraOn]);

  const toggleCamera = () => {
    setCameraOn(!cameraOn);
  };

  const toggleAudio = () => {
    setAudioOn(!audioOn);
  };
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: audioOn,
      });
      setVideoStream(stream);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop());
      setVideoStream(null);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Left Half: List of Blocks */}
     

      {/* Right Half: Camera and Audio Controls */}
      <div className="w-1/2 p-4 bg-gray-200 flex flex-col items-center justify-center h-full overflow-hidden ">
    
          <div className="w-full h-32 bg-gray-500 rounded-lg relative overflow-hidden  w-full h-4/5">
            {cameraOn && (
              <video
                ref={videoRef}
                className="w-full h-full absolute top-0 left-0"
                autoPlay
                playsInline
              />
            )}
          </div>
        
        {/* Camera */}
        <div className='iconbody  w-full  h-1/5 flex  items-center justify-center'>
        <div className="mb-6 ">
          <button
            onClick={toggleCamera}
            className={`w-16 h-16 rounded-full ${
              cameraOn ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {cameraOn ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16v1a4 4 0 004 4h1m4-4a8 8 0 10-16 0h1" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}  
          </button>
          <p className="text-lg text-center">Camera {cameraOn ? 'On' : 'Off'}</p>
        </div>

        {/* Audio */}
        <div className="mb-6 ml-4">
          <button
            onClick={toggleAudio}
            className={`w-16 h-16 rounded-full ${
              audioOn ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {audioOn ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16v1a4 4 0 004 4h1m4-4a8 8 0 10-16 0h1" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
          <p className="text-lg text-center">Audio {audioOn ? 'On' : 'Off'}</p>
        </div>
        </div>
        {/* Video */}
     
      </div>
      <div className="w-1/2 bg-white p-4 overflow-y-auto">
        <div className='h-1/2'>
        <h1 className="text-2xl font-semibold mb-4">Available Cases</h1>
        <div className="space-y-4">
          {/* Sample blocks - replace with your own */}
          <div className="bg-gray-200  rounded-lg shadow flex ">
            <div className=' w-2/4 h-12 flex items-center pl-4 rounded-lg'>
                <span>Case ID:55034
                </span>
                </div>
            <div className=' w-2/4 flex items-center place-content-around  '> 
            <button className='bg-green-600 rounded-lg p-1 w-1/2 text-white'>Send Link</button>
            <button className='bg-red-600 rounded-lg p-1 w-1/2 ml-2 text-white' onClick={openCalendar}>Reschedule</button>
            <CalendarComponent isOpen={isCalendarOpen} onClose={closeCalendar} />
            
</div>
          </div>
          <div className="bg-gray-200  rounded-lg shadow flex ">
            <div className=' w-2/4 h-12 flex items-center pl-4 rounded-lg'>
                <span>Case ID:55035
                </span>
                </div>
            <div className=' w-2/4 flex items-center place-content-around  '> 
            <button className='bg-green-600 rounded-lg p-1 w-1/2 text-white'>Send Link</button>
            <button className='bg-red-600 rounded-lg p-1 w-1/2 ml-2 text-white' onClick={openCalendar}>Reschedule</button>
            <CalendarComponent isOpen={isCalendarOpen} onClose={closeCalendar} />
            
</div>
          </div>
          <div className="bg-gray-200  rounded-lg shadow flex ">
            <div className=' w-2/4 h-12 flex items-center pl-4 rounded-lg'>
                <span>Case ID:55035
                </span>
                </div>
            <div className=' w-2/4 flex items-center place-content-around  '> 
            <button className='bg-green-600 rounded-lg p-1 w-1/2 text-white'>Send Link</button>
            <button className='bg-red-600 rounded-lg p-1 w-1/2 ml-2 text-white' onClick={openCalendar}>Reschedule</button>
            <CalendarComponent isOpen={isCalendarOpen} onClose={closeCalendar} />
            
</div>
          </div>
          
          
          {/* Add more blocks as needed */}
        </div>
        </div>
        <div className='h-1/2'>
                    <h1 className="text-2xl font-semibold mb-4">Total Cases</h1>
        <div className="space-y-4">
          {/* Sample blocks - replace with your own */}
          <div className="bg-gray-200  rounded-lg shadow flex ">
            <div className=' w-2/4 h-12 flex items-center pl-4 rounded-lg'>
                <span>Case ID:55035
                </span>
                </div>
            <div className=' w-2/4 flex items-center place-content-end mr-4  '> 
       
            <button className='bg-red-600 rounded-lg p-1 w-1/2 ml-2 text-white'  onClick={openCalendar}>Reschedule</button>
            <CalendarComponent isOpen={isCalendarOpen} onClose={closeCalendar} />
            
</div>
          </div>
          <div className="bg-gray-200  rounded-lg shadow flex ">
            <div className=' w-2/4 h-12 flex items-center pl-4 rounded-lg'>
                <span>Case ID:55035
                </span>
                </div>
            <div className=' w-2/4 flex items-center place-content-end mr-4  '> 
            
            <button className='bg-red-600 rounded-lg p-1 w-1/2 ml-2 text-white'>Reschedule</button>
            
</div>
          </div>
          <div className="bg-gray-200  rounded-lg shadow flex ">
            <div className=' w-2/4 h-12 flex items-center pl-4 rounded-lg'>
                <span>Case ID:55035
                </span>
                </div>
            <div className=' w-2/4 flex items-center place-content-end mr-4  '> 
            
            <button className='bg-red-600 rounded-lg p-1 w-1/2 ml-2 text-white'>Reschedule</button>
            
</div>
          </div>
        
          {/* Add more blocks as needed */}
        </div>
        </div>

      </div>
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-4 right-12 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        {showChatbot ? 'Hide Chatbot' : 'Show Chat'}
      </button>
      {showChatbot && <Chatbot hook={showChatbot} func={setShowChatbot}  />}

    </div>
  );
};

export default App;
