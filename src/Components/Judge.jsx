import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [caseNumber, setCaseNumber] = useState('');
  const [password, setPassword] = useState('');
 const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setCaseNumber('');
    setPassword('');
  };
const handleJudgeLogin = () => {
  navigate("/lobby")
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">E-Court Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="caseNumber" className="block text-gray-600">
              Judge ID
            </label>
            <input
              type="text"
              id="caseNumber"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Judge Id"
              value={caseNumber}
              onChange={(e) => setCaseNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-lg hover:bg-blue-600"
         onClick={handleJudgeLogin} >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
