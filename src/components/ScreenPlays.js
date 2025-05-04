import React from 'react';
import './ScreenPlays.css';

function ScreenPlays() {
  return (
    <section className="screen-plays">
      <h2>Screen Plays</h2>
      <div className="screen">
        <h3>RB Screen</h3>
        <img src="/path/to/rb-screen-diagram.jpg" alt="RB Screen Diagram" />
        <p>Key Points: Set up the screen by drawing defenders in, release OL to block downfield...</p>
      </div>
      <div className="screen">
        <h3>WR Screen</h3>
        <img src="/path/to/wr-screen-diagram.jpg" alt="WR Screen Diagram" />
        <p>Key Points: Quick pass to the WR, OL blocks the nearest defenders...</p>
      </div>
    </section>
  );
}

export default ScreenPlays;