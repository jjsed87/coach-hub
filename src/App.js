import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import RecentPlays from './components/RecentPlays';
import RunPlays from './components/RunPlays';
import PassProtection from './components/PassProtection';
import PlayDetail from './components/PlayDetail';
import Standards from './components/Standards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/run-plays" element={<RunPlays />} />
          <Route path="/playbook" element={<RunPlays />} />
          <Route path="/pass-protection" element={<PassProtection />} />
          <Route path="/recent-plays" element={<RecentPlays />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/play-detail/:playId" element={<PlayDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
