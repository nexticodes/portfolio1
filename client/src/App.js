import React, { useRef, useState } from 'react';

import logo from './assets/EBLogoWhite.png'
import vid from './assets/lines.mp4'

import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {

  const [section, setSection] = useState('welcome')
  const [drawerStatus, setDrawerStatus] = useState();

  const projRef = useRef(null);
  const aboutRef = useRef(null);

  let scrollToAbout = () => {
    setSection('about');
    window.scrollTo(0, aboutRef.current.offsetTop);
  }

  let scrollToProj = () => {
    setSection('project');
    window.scrollTo(0, projRef.current.offsetTop);
  }

  let handleDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  }

  return (
    <div className="App">
      <Welcome scroll={scrollToAbout}/>
      <div style={(drawerStatus) ? {background: 'white'} : {background: 'gray'}}>
        <Header currentSection={section} click={handleDrawerStatus}/>
        <About refProp={aboutRef}/>
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
