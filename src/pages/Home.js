import React from "react";
import { Link } from "react-router-dom";
import "./AnimalProfiles";
import "./ShelterTasks";

function Home() {
  return (
    <div>
      <h1> Animal Shelter Management System </h1>
        <div>
            <Link to="/animal-profiles">
            <button>Animal Profiles</button>
            </Link>
        </div>
        <div>
            <Link to="/shelter-tasks">
            <button>Shelter Tasks</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;
