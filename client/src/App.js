import React, { useRef } from 'react';

import logo from './assets/EBLogoWhite.png'
import vid from './assets/lines.mp4'

import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';

function App() {

  const projRef = useRef(null);

  let scrollToProj = () => window.scrollTo(0, projRef.current.offsetTop);

  return (
    <div className="App">
      <Welcome scroll={scrollToProj}/>
      <div>
        <Header/>
        <Projects refProp={projRef}/>
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
