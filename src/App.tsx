import { useState } from 'react';
import './App.css';
import { SeasonPicks } from './SeasonPicks/SeasonPicks';
import { Score } from './Score/Score';
import { WeeklyPicks } from './WeeklyPicks/WeeklyPicks';
import { pickUpdate, returnColumns, scoreUpdate } from './data/dataConversion';
const image = require('./assets/images/Survivor_49.png');

function App() {
  const [currentView, setCurrentView] = useState('Score');
  
  const onScoreUpdate = () => {
    scoreUpdate();
  }
  const onPickUpdate = () => {
    pickUpdate();
  }
    const onColumnUpdate = () => {
    returnColumns();
  }

  return (
    <div className="App">
      <img className="banner-image" src={image} />
      <div className='menu-list main-menu'>
        <button className={`menu-button ${currentView === 'Score' ? 'selected': ''}`} onClick={() => setCurrentView('Score')}>Score</button>
        <button className={`menu-button ${currentView === 'Week' ? 'selected': ''}`} onClick={() => setCurrentView('Week')}>Weekly Picks</button>
        <button className={`menu-button ${currentView === 'Season' ? 'selected': ''}`} onClick={() => setCurrentView('Season')}>Season Picks</button>
      </div>
      <button onClick={onPickUpdate}>Update Picks</button>
      <button onClick={onScoreUpdate}>Update Score</button>
      <button onClick={onColumnUpdate}>Update Columns</button>

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
