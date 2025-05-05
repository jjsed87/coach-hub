import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  // Added a quiz section for non-negotiables
  const quizQuestions = [
    {
      question: 'What is the standard for effort and finishing blocks?',
      answer: 'Relentless effort and finish every block.',
    },
    {
      question: 'How should you protect the QB and RB?',
      answer: 'At all costs. Keep them clean during the play and help them up after.',
    },
  ];

  return (
    <section id="home" className="dashboard">
      <h2>Welcome to Gridiron Playbook</h2>
      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate('/run-plays')}>
          <h3>Run Plays</h3>
          <p>Power, zone, and counter run plays</p>
          <span>15 plays</span>
        </div>
        <div className="card" onClick={() => navigate('/pass-protection')}>
          <h3>Pass Protection</h3>
          <p>Protection schemes for passing plays</p>
          <span>12 plays</span>
        </div>
        <div className="card" onClick={() => navigate('/screen-plays')}>
          <h3>Screen Plays</h3>
          <p>RB, WR, and TE screen concepts</p>
          <span>8 plays</span>
        </div>
      </div>
      <div className="quiz-section">
        <h3>Non-Negotiables Quiz</h3>
        {quizQuestions.map((q, index) => (
          <div key={index} className="quiz-item">
            <p><strong>Q:</strong> {q.question}</p>
            <p><strong>A:</strong> {q.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;