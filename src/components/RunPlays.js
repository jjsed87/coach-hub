import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RunPlays.css';

function RunPlays() {
  const navigate = useNavigate();

  return (
    <section className="run-plays">
      <h2>Run Plays</h2>
      <div className="play" onClick={() => navigate('/play-detail')}>
        <h3>Atlanta/Falcons</h3>
        <img src="/path/to/atlanta-falcons-diagram.jpg" alt="Atlanta/Falcons Diagram" />
      </div>
      <div className="play" onClick={() => navigate('/play-detail')}>
        <h3>Mid Zone Run</h3>
        <img src="/path/to/inside-zone-diagram.jpg" alt="Mid Zone Run Diagram" />
      </div>
    </section>
  );
}

export default RunPlays;