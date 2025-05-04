import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import RecentPlays from './components/RecentPlays';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Dashboard />
        <RecentPlays />
      </main>
    </div>
  );
}

export default App;
