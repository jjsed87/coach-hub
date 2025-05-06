import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Quiz from './Quiz';
import frontLogo from './Frontpagelogo.png';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <section id="home" className="dashboard">
      <h2>Welcome to Gridiron Playbook</h2>
      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate('/playbook')}>
          <h3>Run Plays</h3>
          <p>Power, zone, and counter run plays</p>
        </div>
        <div className="logo-card">
          <img
            src={frontLogo}
            alt="Gridiron Logo"
            className="frontpage-logo"
          />
        </div>
        <div className="card" onClick={() => navigate('/pass-protection')}>
          <h3>Pass Protection</h3>
          <p>Protection schemes for passing plays</p>
        </div>
      </div>
      <Quiz />
    </section>
  );
}

export default Dashboard;