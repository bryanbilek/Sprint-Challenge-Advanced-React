import React from 'react';
import './App.css';
import GetData from './components/GetData';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
  }

  return (
    <div className='App'>
      <div className='dark-mode-setup'>
        <button onClick={toggleMode}>Dark Mode</button>
      </div>
      <GetData />
    </div>
  )
}

export default App;
