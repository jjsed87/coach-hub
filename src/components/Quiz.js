import React from 'react';
import './Quiz.css';

function Quiz() {
  const questions = [
    { question: 'What is the standard for effort and finishing blocks?', answer: 'Relentless effort & finish every block.' },
    { question: 'How do we protect the QB & RB?', answer: 'At all costs, keeping them clean and helping them up after.' },
    { question: 'What is our mentality after each play?', answer: 'Next play mentality: reset and dominate the next rep.' },
  ];

  return (
    <section className="quiz">
      <h2>Non-Negotiables Quiz</h2>
      <div className="quiz-items">
        {questions.map((q, i) => (
          <div key={i} className="quiz-item">
            <p className="quiz-question">{q.question}</p>
            <p className="quiz-answer">{q.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Quiz;