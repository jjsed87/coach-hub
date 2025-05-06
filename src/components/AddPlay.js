import React, { useState } from 'react';
import './AddPlay.css';

function AddPlay({ onAdd }) {
  const [name, setName] = useState('');
  const [diagram, setDiagram] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !diagram) return;
    const id = name.toLowerCase().replace(/\s+/g, '-');
    onAdd({ id, name, diagram });
    setName('');
    setDiagram('');
  };

  return (
    <div className="add-play-card">
      <form onSubmit={handleSubmit} className="add-play-form">
        <h3>Add New Play</h3>
        <input
          type="text"
          placeholder="Play Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Diagram URL"
          value={diagram}
          onChange={(e) => setDiagram(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddPlay;