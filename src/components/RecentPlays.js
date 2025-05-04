import React from 'react';
import './RecentPlays.css';

function RecentPlays() {
  return (
    <section id="recent-plays">
      <h2>Recent Plays</h2>
      <div className="recent-plays">
        <div className="play-card">
          <img src="/path/to/image1.jpg" alt="Play 1" />
          <h3>Power Right</h3>
          <p>Category: Run</p>
          <p>Formation: I-Formation</p>
          <button>View</button>
        </div>
        <div className="play-card">
          <img src="/path/to/image2.jpg" alt="Play 2" />
          <h3>Zone Left</h3>
          <p>Category: Run</p>
          <p>Formation: Shotgun</p>
          <button>View</button>
        </div>
        <div className="play-card">
          <img src="/path/to/image3.jpg" alt="Play 3" />
          <h3>Atlanta/Falcons</h3>
          <p>Category: Run</p>
          <p>Formation: Various</p>
          <button>View</button>
        </div>
      </div>
    </section>
  );
}

export default RecentPlays;