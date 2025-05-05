import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayDetail.css';

function PlayDetail() {
  const navigate = useNavigate();

  const playDetails = {
    name: 'Atlanta/Falcons',
    category: 'Run',
    scheme: 'Counter (Backside Guard & Tackle/Wing Pull)',
    formation: 'I-Formation',
    personnel: '21 Personnel (2 RB, 1 TE)',
    description: 'A power run play with backside pulling linemen to create running lanes.',
    diagram: '/Falcons.jpg', // Correct diagram for Atlanta/Falcons
  };

  if (window.location.pathname.includes('zone')) {
    playDetails.name = 'Mid Zone Run';
    playDetails.scheme = 'Zone Blocking – Mid Zone Read';
    playDetails.formation = 'Shotgun';
    playDetails.personnel = '11 Personnel (1 RB, 1 TE)';
    playDetails.description = 'A zone blocking concept with a mid-zone aiming point for the RB.';
    playDetails.diagram = '/Zone.png'; // Correct diagram for Mid Zone Run
  }

  return (
    <div className="play-detail">
      <header className="play-detail-header">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <h1>{playDetails.name}</h1>
      </header>
      <div className="play-detail-content">
        <div className="main-content">
          <img
            src={playDetails.diagram}
            alt="Play Diagram"
            className="diagram-image"
            style={{ width: '50%' }} // Adjusted size to half
          />
        </div>
        <aside className="sidebar">
          <h2>Play Details</h2>
          <p><strong>Category:</strong> {playDetails.category}</p>
          <p><strong>Scheme:</strong> {playDetails.scheme}</p>
          <p><strong>Formation:</strong> {playDetails.formation}</p>
          <p><strong>Personnel:</strong> {playDetails.personnel}</p>
          <p><strong>Description:</strong> {playDetails.description}</p>
          <h2>My Notes</h2>
          <textarea placeholder="Add your personal notes about this play"></textarea>
        </aside>
      </div>
    </div>
  );
}

export default PlayDetail;