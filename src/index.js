import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimalProfiles from './pages/AnimalProfiles';
import ShelterTasks from './pages/ShelterTasks';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/animal-profiles" element={<AnimalProfiles />} />
          <Route path="/shelter-tasks" element={<ShelterTasks />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
