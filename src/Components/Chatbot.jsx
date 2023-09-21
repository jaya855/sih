import React, { useState } from 'react';

const Chatbot = ( {hook, func} ) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const closeChat = () => {  
    func(!hook); 
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    // Simulate a response from the chatbot (replace with actual API call)
    setTimeout(() => {
      setMessages([...messages, { text: `JUDGE: ${input}`, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-0 right-12   w-80 bg-white border-t border-r border-l border-gray-300 shadow-lg rounded-lg border border-black h-3/4 ">
        <div className='flex '>
        <div className='bg-black text-white w-full p-2 text-lg bold rounded flex justify-between  '>
            
            <span>Chat</span>
          <button className='w-6 h-6 rounded-full bg-red-500' onClick={closeChat}></button>
        </div>
        
        </div>
      <div className="h-3/4  overflow-y-auto p-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${message.sender === 'bot' ? 'bg-gray-200 ml-auto' : 'bg-gray-200'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="mt-2 flex p-2 ">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow border rounded-l p-2 focus:outline-none focus:ring focus:border-blue-300 "
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
