import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>Gridiron Playbook Pro</h1>
      <nav>
        <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/playbook" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Playbook</NavLink>
        <NavLink to="/recent-plays" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Film</NavLink>
        <NavLink to="/standards" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Standards</NavLink>
        <NavLink to="/formations" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Formations</NavLink>
        <NavLink to="/notes" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Notes</NavLink>
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <input type="text" placeholder="Search plays..." className="search-bar" />
      </div>
    </header>
  );
}

export default Header;