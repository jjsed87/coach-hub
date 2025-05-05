import React from 'react';
import './RecentPlays.css';

function RecentPlays() {
  const videos = [
    {
      title: 'Zone Blocking Execution',
      url: 'https://www.youtube.com/embed/example1',
    },
    {
      title: 'Pass Protection Techniques',
      url: 'https://www.youtube.com/embed/example2',
    },
    {
      title: 'Run Play Strategies',
      url: 'https://www.youtube.com/embed/example3',
    },
  ];

  // Added a motivational pop-up for non-negotiables
  const [showPopup, setShowPopup] = React.useState(true);
  const randomRule = {
    title: 'RELENTLESS EFFORT & FINISH EVERY BLOCK',
    description: 'We play with maximum effort every snap, between the whistles. We don’t just get in the way — we finish defenders. Make sure they feel you every play. Effort and finish are who we are.',
  };

  return (
    <section id="recent-plays">
      {showPopup && (
        <div className="motivational-popup">
          <h3>{randomRule.title}</h3>
          <p>{randomRule.description}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
      <h2>Film Study</h2>
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentPlays;