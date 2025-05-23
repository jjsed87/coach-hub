import React from 'react';
import './PassProtection.css';
import { useNavigate } from 'react-router-dom';

function PassProtection() {
  const navigate = useNavigate();

  return (
    <section className="pass-protection">
      <h2>Pass Protection</h2>
      <div className="protection" onClick={() => navigate('/play-detail/black')}>
        <h3>Black (Slide Left)</h3>
        <img src="/Black.png" alt="Black Diagram" />
        <p>6-Man Protection</p>
        <p>Key Points: Slide left, each OL on the call side is responsible for their outside gap...</p>
      </div>
      <div className="protection" onClick={() => navigate('/play-detail/purple')}>
        <h3>Purple (Slide Right)</h3>
        <img src="/Purple.jpg" alt="Purple Diagram" />
        <p>6-Man Protection</p>
        <p>Key Points: Slide right, each OL on the call side is responsible for their outside gap...</p>
      </div>
    </section>
  );
}

export default PassProtection;