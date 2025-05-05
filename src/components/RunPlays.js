import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RunPlays.css';

function RunPlays() {
  const navigate = useNavigate();

  return (
    <section className="run-plays">
      <h2>Run Plays</h2>
      <p style={{ color: 'red' }}>Debug: RunPlays component loaded</p>
      <div className="play" onClick={() => navigate('/play-detail/falcons')}>
        <h3>Atlanta/Falcons</h3>
        <img src="/Falcons.jpg" alt="Atlanta/Falcons Diagram" />
      </div>
      <div className="play" onClick={() => navigate('/play-detail/zone')}>
        <h3>Mid Zone Run</h3>
        <img src="/Zone.png" alt="Mid Zone Run Diagram" />
      </div>
      <div className="play" onClick={() => navigate('/play-detail/power')}>
        <h3>Power</h3>
        <img src="/Power.jpg" alt="Power Run Diagram" />
      </div>
      <div className="play" onClick={() => navigate('/play-detail/pin-pull')}>
        <h3>Pin & Pull</h3>
        <img src="/Pinpull.jpg" alt="Pin & Pull Diagram" />
      </div>
    </section>
  );
}

export default RunPlays;