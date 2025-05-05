import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>Gridiron Playbook Pro</h1>
      <nav>
        <NavLink to="/" className="link-button">Home</NavLink>
        <NavLink to="/playbook" className="link-button">Playbook</NavLink>
        <button onClick={() => navigate('/recent-plays')} className="link-button">Film</button>
        <button onClick={() => navigate('/standards')} className="link-button">Standards</button>
        <button onClick={() => navigate('/formations')} className="link-button">Formations</button>
        <button onClick={() => navigate('/notes')} className="link-button">Notes</button>
      </nav>
      <input type="text" placeholder="Search plays..." className="search-bar" />
    </header>
  );
}

export default Header;