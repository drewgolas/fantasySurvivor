import { useState } from 'react';
import './App.css';
import { SeasonPicks } from './SeasonPicks/SeasonPicks';
import { Score } from './Score/Score';
import { WeeklyPicks } from './WeeklyPicks/WeeklyPicks';

function App() {
  const [currentView, setCurrentView] = useState('Score');

  return (
    <div className="App">
      <img className="banner-image" src="./images/Survivor_48_Logo.PNG.png" />
      <div className='menu-list'>
        <button className={`menu-button ${currentView === 'Score' ? 'selected': ''}`} onClick={() => setCurrentView('Score')}>Score</button>
        <button className={`menu-button ${currentView === 'Week' ? 'selected': ''}`} onClick={() => setCurrentView('Week')}>Weekly Picks</button>
        <button className={`menu-button ${currentView === 'Season' ? 'selected': ''}`} onClick={() => setCurrentView('Season')}>Season Picks</button>
      </div>
      {currentView === 'Score' &&
        <Score />
      }
      {currentView === 'Season' &&
        <SeasonPicks />
      }
      {currentView === 'Week' &&
        <WeeklyPicks />
      }
    </div>
  );
}

export default App;
