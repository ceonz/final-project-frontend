import React from "react";
import { Link } from "react-router-dom";
import "./Home";

function AnimalProfiles() {
  return (
    <div>
      <h1> Animal Profiles </h1>
      <div>
        <Link to="/home">
          <button>Home Page</button>
        </Link>
      </div>
    </div>
  );
}

export default AnimalProfiles;
