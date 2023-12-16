import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/animal-profiles">Animal Profiles</Link>
      <Link to="/shelter-tasks">Shelter Tasks</Link>
      <Link to="/register-animal">Register Animal</Link>
    </nav>
  );
}

export default Navbar;
