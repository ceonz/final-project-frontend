import React, { useState } from "react";
import TextInput from "./TextInput";
import { Link } from "react-router-dom";
import "./Home";

function AnimalProfiles() {
  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = (text) => {
    setSearchText(text);
  };

  const animals = [
    { name: "Tom", species: "Feline", age: 2 },
    { name: "Jerry", species: "Mouse", age: 3 },
  
  ];

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Animal Profiles</h1>
      <TextInput onInputChange={handleSearchInputChange} />
      <ul>
        {filteredAnimals.map((animal, index) => (
          <li key={index}>
            <Link to={`/animal/${animal.name}`}>{animal.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalProfiles;