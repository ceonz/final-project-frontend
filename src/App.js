import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AnimalProfiles from './pages/AnimalProfiles';
import ShelterTasks from './pages/ShelterTasks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animal-profiles" element={<AnimalProfiles />} />
        <Route path="/shelter-tasks" element={<ShelterTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
