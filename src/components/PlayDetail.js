import React, { useState } from 'react';
import './PlayDetail.css';

function PlayDetail() {
  const [activeTab, setActiveTab] = useState('Diagram B');

  const playDetails = {
    name: 'LA / RAMS',
    category: 'Run',
    scheme: 'Inside Zone (Zone Scheme)',
    formation: 'Shotgun',
    personnel: '11 Personnel (1 RB, 1 TE)',
    description: 'A zone blocking concept that creates horizontal movement and gives the running back multiple cutback options based on defensive flow.',
    diagrams: {
      'Diagram A': '/path/to/diagram-a.jpg',
      'Diagram B': '/path/to/diagram-b.jpg',
      'Diagram C': '/path/to/diagram-c.jpg',
      'Diagram D': '/path/to/diagram-d.jpg',
    },
  };

  return (
    <div className="play-detail">
      <header className="play-detail-header">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <h1>{playDetails.name}</h1>
      </header>
      <div className="play-detail-content">
        <div className="main-content">
          <div className="tabs">
            {Object.keys(playDetails.diagrams).map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <img
            src={playDetails.diagrams[activeTab]}
            alt={activeTab}
            className="diagram-image"
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