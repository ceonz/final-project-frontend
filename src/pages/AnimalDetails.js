import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimalById } from "../store/actions/animalActions";
import AnimalForm from "../components/AnimalForm";

function AnimalDetails() {
  const { animalId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const animal = useSelector((state) => state.animals.currentAnimal);
  const loading = useSelector((state) => state.animals.loading);
  const error = useSelector((state) => state.animals.error);

  useEffect(() => {
    dispatch(fetchAnimalById(animalId));
  }, [dispatch, animalId]);

  const handleSave = () => {
    navigate("/animal-profiles");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Animal Details</h1>
      {animal && (
        <>
          {/* TODO, refactor animalform */}
          {/* <AnimalForm animal={animal} onSave={handleSave} />  */}
          <div>
            <h2>{animal.name}</h2>
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
              <strong>Arrival Date:</strong> {animal.arrivalDate}
            </p>
            <p>
              <strong>Description:</strong> {animal.description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default AnimalDetails;
