import React, { useRef, useState } from 'react';

import logo from './assets/EBLogoWhite.png'

import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Drawer from './components/DrawerButton/Drawer';
import Contact from './components/Contact/Contact';

function App() {

  const [section, setSection] = useState('welcome')
  const [drawerStatus, setDrawerStatus] = useState(false);

  const projRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  let scrollToAbout = () => {
    setSection('about');
    if (drawerStatus) setDrawerStatus(!drawerStatus);
    window.scrollTo(0, aboutRef.current.offsetTop);
  }

  let scrollToProj = () => {
    setSection('project');
    setDrawerStatus(!drawerStatus);
    window.scrollTo(0, projRef.current.offsetTop);
  }

  let scrollToContact = () => {
    setSection('contact');
    setDrawerStatus(!drawerStatus);
    window.scrollTo(0, contactRef.current.offsetTop);
  }

  let handleDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  }

  return (
    <div className="App">
      <Welcome scroll={scrollToAbout}/>
      <div>
        <Header currentSection={section} click={handleDrawerStatus}/>
        <Drawer show={drawerStatus} toAbout={scrollToAbout} toProject={scrollToProj} toContact={scrollToContact}/>
        <About refProp={aboutRef}/>
        <Projects refProp={projRef}/>
        <Contact refProp={contactRef}/>
      </div>
    </div>
  );
}

export default App;
