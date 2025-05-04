import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <section id="home" className="dashboard">
      <h2>Welcome to Gridiron Playbook</h2>
      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate('/run-plays')}>
          <h3>Run Plays</h3>
          <p>Power, zone, and counter run plays</p>
          <span>15 plays</span>
        </div>
        <div className="card" onClick={() => navigate('/pass-protection')}>
          <h3>Pass Protection</h3>
          <p>Protection schemes for passing plays</p>
          <span>12 plays</span>
        </div>
        <div className="card" onClick={() => navigate('/screen-plays')}>
          <h3>Screen Plays</h3>
          <p>RB, WR, and TE screen concepts</p>
          <span>8 plays</span>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;