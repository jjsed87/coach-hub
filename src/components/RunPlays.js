import React from 'react';
import './RunPlays.css';

function RunPlays() {
  return (
    <section className="run-plays">
      <h2>Run Plays</h2>
      <div className="play">
        <h3>Atlanta/Falcons</h3>
        <img src="/path/to/atlanta-falcons-diagram.jpg" alt="Atlanta/Falcons Diagram" />
        <p>Counter (Backside Guard & Tackle/Wing Pull)</p>
        <p>Key Points: Identify the Mike Linebacker, Backside Guard pulls, play-side tackle/wing lead...</p>
      </div>
      <div className="play">
        <h3>Mid Zone Run</h3>
        <img src="/path/to/mid-zone-run-diagram.jpg" alt="Mid Zone Run Diagram" />
        <p>Zone Blocking – Mid Zone Read</p>
        <p>Key Points: Everyone blocks his “zone” or gap, RB aiming point is the outside leg of the play-side tackle...</p>
      </div>
    </section>
  );
}

export default RunPlays;