import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AnimalProfiles from "./pages/AnimalProfiles";
import AnimalDetails from "./pages/AnimalDetails";
import ShelterTasks from "./pages/ShelterTasks";
import ShelterTaskDetails from "./pages/ShelterTaskDetails";
import EditAnimalProfile from "./pages/EditAnimalProfile";
import EditShelterTask from "./pages/EditShelterTask";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animal-profiles" element={<AnimalProfiles />} />
        <Route path="/animal-profiles/:animalId" element={<AnimalDetails />} />
        <Route
          path="/animal-profiles/:animalId/edit"
          element={<EditAnimalProfile />}
        />
        <Route
          path="/animal-profiles/:animalId/add-shelter-task"
          element={<EditShelterTask />}
        />
        <Route path="/shelter-tasks" element={<ShelterTasks />} />
        <Route path="/shelter-tasks/:taskId" element={<ShelterTaskDetails />} />
        <Route
          path="/shelter-tasks/:taskId/edit"
          element={<EditShelterTask />}
        />
        <Route path="/register-animal" element={<EditAnimalProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
