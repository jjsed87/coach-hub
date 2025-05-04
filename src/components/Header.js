import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>Gridiron Playbook Pro</h1>
      <nav>
        <button onClick={() => navigate('/')} className="link-button">Home</button>
        <button onClick={() => navigate('/run-plays')} className="link-button">Playbook</button>
        <button onClick={() => navigate('/recent-plays')} className="link-button">Film</button>
        <button onClick={() => navigate('/notes')} className="link-button">Notes</button>
      </nav>
      <input type="text" placeholder="Search plays..." className="search-bar" />
    </header>
  );
}

export default Header;