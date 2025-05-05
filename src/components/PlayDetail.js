import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PlayDetail.css';

function PlayDetail() {
  const navigate = useNavigate();
  const { playId } = useParams();

  const detailsMap = {
    falcons: {
      name: 'Atlanta/Falcons',
      category: 'Run',
      scheme: 'Counter (Backside Guard & Tackle/Wing Pull)',
      formation: 'I-Formation',
      personnel: '21 Personnel (2 RB, 1 TE)',
      description: 'Power run with backside guard pull. Identify Mike LB, PST hinges on Wall-Street call, center covers backside gaps.',
      diagram: '/Falcons.jpg',
      rules: [
        'Play-side OL downblock backside gap or double-team.',
        'Backside Guard pulls to kick out edge defender.',
        'Second puller leads to block Mike LB.',
      ],
    },
    zone: {
      name: 'Mid Zone Run',
      category: 'Run',
      scheme: 'Zone Blocking – Mid Zone Read',
      formation: 'Shotgun',
      personnel: '11 Personnel (1 RB, 1 TE)',
      description: 'Zone blocking with lateral flow and mid zone aiming point. RB reads blocks for cutback.',
      diagram: '/Zone.png',
      rules: [
        'Block your assigned gap; stay square.',
        'Use backside hand on defender’s breastplate.',
        'RB cuts within first 3 steps around play-side tackle.',
      ],
    },
    power: {
      name: 'Power',
      category: 'Run',
      scheme: 'Power (Backside Guard Pull)',
      formation: 'I-Formation',
      personnel: '21 Personnel (2 RB, 1 TE)',
      description: 'Downblock play-side, backside guard pulls, lead by backside tackle.',
      diagram: '/Power.jpg',
      rules: [
        'Play-side double teams at point of attack.',
        'Backside Guard pulls to kick out C-gap.',
        'Backside tackle leads through to block Mike LB.',
      ],
    },
    'pin-pull': {
      name: 'Pin & Pull',
      category: 'Run',
      scheme: 'Pin & Pull Read',
      formation: 'Shotgun',
      personnel: '11 Personnel',
      description: 'Rules-based play: pin block by PST, SMG pulls, TE reads for cutback.',
      diagram: '/Pinpull.jpg',
      rules: [
        'PST pins down end for SMG pull.',
        'SMG pulls replacing PST gap.',
        'TE blocks first LB; RB reads pin for inside vs outside.',
      ],
      rulesDiagram: '/PPrules.jpg',
    },
  };

  const play = detailsMap[playId] || detailsMap.falcons;

  return (
    <div className="play-detail">
      <header className="play-detail-header">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <h1>{play.name}</h1>
      </header>
      <div className="play-detail-content">
        <div className="main-content">
          <img
            src={play.diagram}
            alt="Play Diagram"
            className="diagram-image"
            style={{ width: '50%', marginBottom: '1rem' }}
          />
          {play.rulesDiagram && (
            <img
              src={play.rulesDiagram}
              alt="Rules Diagram"
              className="diagram-image"
              style={{ width: '50%', marginBottom: '1rem' }}
            />
          )}
          <div className="rules-section">
            <h2>Rules & Responsibilities</h2>
            <ul>
              {play.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="sidebar">
          <h2>Play Details</h2>
          <p><strong>Category:</strong> {play.category}</p>
          <p><strong>Scheme:</strong> {play.scheme}</p>
          <p><strong>Formation:</strong> {play.formation}</p>
          <p><strong>Personnel:</strong> {play.personnel}</p>
          <p><strong>Description:</strong> {play.description}</p>
          <h2>My Notes</h2>
          <textarea placeholder="Add your personal notes about this play"></textarea>
        </aside>
      </div>
    </div>
  );
}

export default PlayDetail;