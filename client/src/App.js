import React from 'react';
import './App.css';
import GetData from './components/GetData';
import { useDarkMode } from './hooks/useDarkMode';
import { useRWBmode } from './hooks/useRWBmode';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [rwbMode, setrwbMode] = useRWBmode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
  }

  const toggleMode2 = e => {
    e.preventDefault();
    setrwbMode(!rwbMode)
  }

  return (
    <div className='App'>
      <div className='dark-mode-setup'>
        <button onClick={toggleMode} className="dark-mode-button">Dark Mode</button>
        <button onClick={toggleMode2} className="rwb-mode-button">RWB Mode</button>
      </div>
      <h1 className="usa">USA World Cup Team!</h1>
      <GetData />
    </div>
  )
}

export default App;
