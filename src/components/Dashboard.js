import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <section id="home" className="dashboard">
      <h2>Welcome to Gridiron Playbook</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Run Plays</h3>
          <p>Power, zone, and counter run plays</p>
          <span>15 plays</span>
        </div>
        <div className="card">
          <h3>Pass Protection</h3>
          <p>Protection schemes for passing plays</p>
          <span>12 plays</span>
        </div>
        <div className="card">
          <h3>Screen Plays</h3>
          <p>RB, WR, and TE screen concepts</p>
          <span>8 plays</span>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;