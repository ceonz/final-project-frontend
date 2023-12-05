import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './pages/Home';
import AnimalProfiles from './pages/AnimalProfiles';
import ShelterTasks from './pages/ShelterTasks';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/AnimalProfiles' element={<AnimalProfiles />} />
          <Route path='/ShelterTasks' element={<ShelterTasks />} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
