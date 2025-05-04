import React from 'react';
import './PassProtection.css';

function PassProtection() {
  return (
    <section className="pass-protection">
      <h2>Pass Protection</h2>
      <div className="protection">
        <h3>Black (Slide Left)</h3>
        <img src="/Black.png" alt="Black Diagram" />
        <img src="/path/to/black-slide-left-diagram.jpg" alt="Black Slide Left Diagram" />
        <p>6-Man Protection</p>
        <p>Key Points: Slide left, each OL on the call side is responsible for their outside gap...</p>
      </div>
      <div className="protection">
        <h3>Purple (Slide Right)</h3>
        <img src="/Purple.jpg" alt="Purple Diagram" />
        <img src="/path/to/purple-slide-right-diagram.jpg" alt="Purple Slide Right Diagram" />
        <p>6-Man Protection</p>
        <p>Key Points: Slide right, each OL on the call side is responsible for their outside gap...</p>
      </div>
    </section>
  );
}

export default PassProtection;