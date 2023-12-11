import React from "react";
import "./AnimalProfiles";
import "./ShelterTasks";
import AnimalProfileCard from "../components/AnimalProfileCard";
import { Link } from "react-router-dom";

function Home() {
  const animals = [...Array(10).keys()].map((n) => {
    let description = "";
    if (Math.random() > 0.5) description += "This animal is very friendly. ";
    if (Math.random() > 0.5) description += "This animal is very energetic. ";
    if (Math.random() > 0.5) description += "This animal is very playful. ";
    if (Math.random() > 0.5) description += "This animal is very shy. ";
    if (Math.random() > 0.5) description += "This animal is very quiet. ";
    if (Math.random() > 0.5) description += "This animal is very loud. ";
    if (Math.random() > 0.5) description += "This animal is very lazy. ";
    if (Math.random() > 0.5) description += "This animal is very smart. ";

    return {
      id: n + 1,
      name: "Fido",
      imageUrl: "https://cdn2.thecatapi.com/images/ZUumV9qmY.jpg", // from https://api.thecatapi.com/v1/images/search
      species: "Dog",
      breed: "Labrador Retriever",
      age: 5,
      healthStatus: "Healthy",
      isNeutered: Math.random() > 0.5,
      isVaccinated: Math.random() > 0.5,
      adoptionStatus: "Available",
      arrivalDate: "2021-01-01",
      description,
    };
  });

  return (
    <main>
      <header>
        <h1>Animal Shelter Management System</h1>
      </header>
      <h2>Recently Arrived Animals</h2>
      <div className="horizontal-scrollable-container">
        {animals.map((animal) => (
          <Link to={`/animal-profiles/${animal.id}`}>
            <AnimalProfileCard key={animal.id} animal={animal} />
          </Link>
        ))}
      </div>
      <h2>Animals Need Care</h2>
      <div className="horizontal-scrollable-container">
        {animals
          .filter((animal) => !animal.isNeutered || !animal.isVaccinated)
          .map((animal) => (
            <Link to={`/animal-profiles/${animal.id}`}>
              <AnimalProfileCard
                key={animal.id}
                animal={animal}
                requires={[
                  !animal.isNeutered && "Neutering",
                  !animal.isVaccinated && "Vaccination",
                ].filter((x) => x)}
              />
            </Link>
          ))}
      </div>
    </main>
  );
}

export default Home;
