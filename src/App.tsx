import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesktopHeader from './components/Header/DesktopHeader';
import HamburgerHeader from './components/Header/HamburgerHeader';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe';
import ProjectsPage from './components/Projects/Projects';
import Accomplishments from './components/Accomplishments/Accomplishments';
import ContactMe from './components/ContactMe/ContactMe';
import HuskerNet from './components/Husker-Net/Husker-Net'
import DMSiAutomatedWarehouseInventory from './components/SeniorDesign/DMSi';
import OpenECUs from './components/OpenECUs/OpenECUs';
import './App.css'


const App = () => {
  const isMobile = () => {
    return window.innerWidth <= 576; // Adjust this breakpoint as needed
  };
  return (
    <Router>
          <div className='masterPage'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/accomplishments" element={<Accomplishments />} />
              <Route path="/contactme" element={<ContactMe />} />
              <Route path="/huskernet" element={<HuskerNet />} />
              <Route path='/dmsi' element={<DMSiAutomatedWarehouseInventory/>} />
              <Route path='/openecus' element={<OpenECUs/>}/>
            </Routes>
          </div>
          {isMobile() ? (<HamburgerHeader/>) : (<DesktopHeader/>)}
        <Footer />
    </Router>
  );
}

export default App;
