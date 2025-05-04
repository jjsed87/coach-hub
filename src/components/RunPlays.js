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
        <img src="/Falcons.jpg" alt="Atlanta/Falcons Diagram" />
        <img src="/Black.png" alt="Black Diagram" />
      </div>
      <div className="play" onClick={() => navigate('/play-detail')}>
        <h3>Mid Zone Run</h3>
        <img src="/Zone.png" alt="Mid Zone Run Diagram" />
        <img src="/Purple.jpg" alt="Purple Diagram" />
      </div>
    </section>
  );
}

export default RunPlays;