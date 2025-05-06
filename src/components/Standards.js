import React from 'react';
import './Standards.css';

function Standards() {
  const nonNegotiables = [
    { title: 'RELENTLESS EFFORT & FINISH EVERY BLOCK', description: 'We play with maximum effort every snap, between the whistles. We don’t just get in the way — we finish defenders. Make sure they feel you every play. Effort and finish are who we are.' },
    { title: 'RESPECT THE GAME AND YOUR OPPONENT', description: 'Play tough, play physical, but always with class. No cheap shots, no talking after the play. We dominate the right way.' },
    { title: 'PROTECT THE QB & RB AT ALL COSTS', description: 'Our QB and RB should never pick themselves up. Keep them clean during the play, and help them up after. We protect our own—always.' },
    { title: 'MENTALLY PREPARED — KNOW YOUR JOB', description: 'Study your playbook. Know what to do, how to do it, and when to do it. There are no excuses for mental mistakes.' },
    { title: 'Chargers don’t beat Chargers.', description: 'No pre- or post-snap penalties. No busted assignments. We control what we can control.' },
    { title: 'COMMUNICATION IS KEY', description: 'Talk loud, talk often. Echo every call. Identify threats. We win as a unit when everyone’s on the same page.' },
    { title: 'NEXT PLAY MENTALITY', description: 'Good or bad, we move on. One snap at a time. Reset and dominate the next rep—always forward.' },
    { title: 'BE THE TOUGHEST, SMARTEST, MOST PHYSICAL UNIT ON THE FIELD', description: 'We lead this team by example. Toughness, intelligence, discipline — that’s our standard.' },
  ];

  return (
    <section className="standards">
      <div className="content">
        <h2>Offensive Line Rules — Non-Negotiables</h2>
        <p className="subtitle">"The Standard is the Standard"</p>
        <div className="rules-grid">
          {nonNegotiables.map((rule, index) => (
            <div key={index} className="rule-card">
              <h3>{rule.title}</h3>
              <p>{rule.description}</p>
            </div>
          ))}
        </div>
        <p className="footer-quote">"If we take care of the little things, the big things take care of themselves." — OL Brotherhood</p>
      </div>
    </section>
  );
}

export default Standards;