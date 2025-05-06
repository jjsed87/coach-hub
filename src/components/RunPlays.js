import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RunPlays.css';
import AddPlay from './AddPlay';

function RunPlays() {
  const navigate = useNavigate();
  // initial built-in run plays
  const initialPlays = [
    { id: 'falcons', name: 'Atlanta/Falcons', diagram: '/Falcons.jpg' },
    { id: 'zone', name: 'Mid Zone Run', diagram: '/Zone.png' },
    { id: 'power', name: 'Power', diagram: '/Power.jpg' },
    { id: 'pin-pull', name: 'Pin & Pull', diagram: '/Pinpull.jpg' },
  ];
  const [plays, setPlays] = useState(initialPlays);
  const handleAdd = (play) => setPlays([...plays, play]);

  return (
    <section className="run-plays">
      <h2>Run Plays</h2>
      <div className="play-grid">
        {plays.map(play => (
          <div key={play.id} className="play" onClick={() => navigate(`/play-detail/${play.id}`)}>
            <h3>{play.name}</h3>
            <img src={play.diagram} alt={`${play.name} Diagram`} />
          </div>
        ))}
        <AddPlay onAdd={handleAdd} />
      </div>
    </section>
  );
}

export default RunPlays;