import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Navbar from '../Components/Navbar';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! Please login.');
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </>
  );
};

export default Signup;
