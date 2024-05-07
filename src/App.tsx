import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe';
import ProjectsPage from './components/Projects/Projects';
import Accomplishments from './components/Accomplishments/Accomplishments';
import ContactMe from './components/ContactMe/ContactMe';
import HuskerNet from './components/Husker-Net/Husker-Net'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/huskernet" element={<HuskerNet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
