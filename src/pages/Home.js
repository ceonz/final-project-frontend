import React from "react";
import { Link } from "react-router-dom";
import "./AnimalProfiles";

function Home() {
  return (
    <div>
      <h1> Animal Shelter Management System </h1>
      <div>
        <Link to="./animal-profiles">
          <button>Animal Profiles</button>
        </Link>
      </div>
      <div>
        <button>Shelter Tasks</button>
      </div>
    </div>
  );
}

export default Home;
