import React from 'react';
import './Formations.css';

function Formations() {
  const formations = [
    {
      title: '2x2 Formation',
      description: 'Two receivers on each side. Can be run with or without a tight end. Balanced for quick passes, inside zone runs, and RPOs.',
    },
    {
      title: '3x1 Formation',
      description: 'Three receivers on one side and one on the other. Can be run with or without a tight end. Creates spacing advantages for passes and outside zone runs.',
    },
  ];

  return (
    <section className="formations">
      <h2>Formations</h2>
      {formations.map((f, idx) => (
        <div key={idx} className="formation-card">
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Formations;