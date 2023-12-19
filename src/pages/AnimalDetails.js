import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimalById } from "../store/actions/animalActions";

const styles = {
  section: {
    display: "flex",
    gap: "1rem",
  },
  imageBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  links: {
    display: "flex",
    gap: "0.5rem",
  },
  link: {
    textDecoration: "underline",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
};

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
  if (!animal) return <div>Animal not found</div>;

  return (
    <main>
      <header>
        <h1>Animal Details</h1>
        <h3>{animal.name}</h3>
      </header>
      <section style={styles.section}>
        <div style={styles.imageBox}>
          <div style={styles.links}>
            <Link style={styles.link} to={`/animal-profiles/${animalId}/edit`}>
              Edit Profile
            </Link>
            <span>&sdot;</span>
            <Link
              style={styles.link}
              to={`/animal-profiles/${animalId}/add-shelter-task`}
            >
              Add Shelter Task
            </Link>
          </div>
          <img src={animal.image} alt={animal.name} width={350} />
        </div>
        <div style={styles.content}>
          <span>
            <strong>Species:</strong> {animal.species}
          </span>
          <span>
            <strong>Breed:</strong> {animal.breed}
          </span>
          <span>
            <strong>Gender:</strong> {animal.gender}
          </span>
          <span>
            <strong>Age:</strong> {animal.age}
          </span>
          <span>
            <strong>Health Status:</strong> {animal.healthStatus}
          </span>
          <span>
            <strong>Adoption Status:</strong> {animal.adoptionStatus}
          </span>
          <span>
            <strong>Neutered:</strong> {animal.isNeutered ? "Yes" : "No"}
          </span>
          <span>
            <strong>Vaccinated:</strong> {animal.isVaccinated ? "Yes" : "No"}
          </span>
          <span>
            <strong>Arrival Date:</strong>{" "}
            {new Date(animal.arrivalDate).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </span>
          <span>
            <strong>Description:</strong> {animal.description}
          </span>
        </div>
      </section>
    </main>
  );
}

export default AnimalDetails;
