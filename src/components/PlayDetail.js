import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayDetail.css';

function PlayDetail() {
  const navigate = useNavigate();

  const playDetails = {
    name: 'LA / RAMS',
    category: 'Run',
    scheme: 'Inside Zone (Zone Scheme)',
    formation: 'Shotgun',
    personnel: '11 Personnel (1 RB, 1 TE)',
    description: 'A zone blocking concept that creates horizontal movement and gives the running back multiple cutback options based on defensive flow.',
    diagram: '/Black.png', // Added Black diagram for play detail
  };

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