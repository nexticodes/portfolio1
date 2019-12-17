import React from 'react';

import logo from './assets/EBLogoWhite.png'

import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Welcome/>
        <Projects/>
      </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
