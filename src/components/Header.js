import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>Gridiron Playbook Pro</h1>
      <nav>
        <a onClick={() => navigate('/')} href="#">Home</a>
        <a onClick={() => navigate('/run-plays')} href="#">Playbook</a>
        <a onClick={() => navigate('/recent-plays')} href="#">Film</a>
        <a onClick={() => navigate('/notes')} href="#">Notes</a>
      </nav>
      <input type="text" placeholder="Search plays..." className="search-bar" />
    </header>
  );
}

export default Header;