import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimalById } from "../store/actions/animalActions";

function AnimalDetails() {
  const { animalId } = useParams();
  const dispatch = useDispatch();
  const animal = useSelector((state) => state.animals.currentAnimal);
  const loading = useSelector((state) => state.animals.loading);
  const error = useSelector((state) => state.animals.error);

  useEffect(() => {
    dispatch(fetchAnimalById(animalId));
  }, [dispatch, animalId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <header>
        <h1>Animal Details</h1>
      </header>
      {animal && (
        <div>
          <h2>{animal.name}</h2>
          <img
            src={animal.image}
            alt={animal.name}
            width={350}
            style={{
              float: "left",
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
          />
          <button type="button">
            <Link to={`/animal-profiles/${animalId}/edit`}>Edit Profile</Link>
          </button>
          <p>
            <strong>Species:</strong> {animal.species}
          </p>
          <p>
            <strong>Breed:</strong> {animal.breed}
          </p>
          <p>
            <strong>Age:</strong> {animal.age}
          </p>
          <p>
            <strong>Health Status:</strong> {animal.healthStatus}
          </p>
          <p>
            <strong>Adoption Status:</strong> {animal.adoptionStatus}
          </p>
          <p>
            <strong>Neutered:</strong> {animal.isNeutered ? "Yes" : "No"}
          </p>
          <p>
            <strong>Vaccinated:</strong> {animal.isVaccinated ? "Yes" : "No"}
          </p>
          <p>
            <strong>Arrival Date:</strong>{" "}
            {new Date(animal.arrivalDate).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
          <p>
            <strong>Description:</strong> {animal.description}
          </p>
        </div>
      )}
    </main>
  );
}

export default AnimalDetails;
