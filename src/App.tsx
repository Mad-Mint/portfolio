import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home'
import AboutMe from './views/AboutMe/AboutMe';
import ProjectsPage from './views/Projects/Projects';
import Accomplishments from './views/Accomplishments/Accomplishments';
import ContactMe from './views/ContactMe/ContactMe';
import HuskerNet from './views/Projects/Husker-Net/Husker-Net'

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
