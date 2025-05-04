import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Gridiron Playbook Pro</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#playbook">Playbook</a>
        <a href="#film">Film</a>
        <a href="#notes">Notes</a>
      </nav>
      <input type="text" placeholder="Search plays..." className="search-bar" />
    </header>
  );
}

export default Header;