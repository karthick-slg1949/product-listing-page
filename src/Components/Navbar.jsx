import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <nav className="navbar">
      <div className="navbar__logo">MyStore</div>
      <div className="navbar__links">
        <a href="/">Home</a>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
