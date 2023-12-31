import React, { useEffect, useState } from "react";
import "./AnimalForm.module.css";

const styles = {
  formContainer: {
    display: "inline-flex",
    flexDirection: "column",
    gap: "1rem",
  },
  section: {
    display: "flex",
    gap: "1rem",
  },
  forms: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: "1rem",
    width: "100%",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },
  inlineLabel: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  imageBox: {
    width: "350px",
    height: "470px",
    border: "3px solid #ccc",
    borderRadius: "0.5rem",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: "0",
    padding: "0",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
  },
  button: {
    width: "10rem",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "0.5rem",
  },
};

function buildFormData(animal) {
  return {
    name: animal?.name || "",
    species: animal?.species || "",
    breed: animal?.breed || "",
    age: animal?.age || "",
    gender: animal?.gender || "",
    healthStatus: animal?.healthStatus || "",
    adoptionStatus: animal?.adoptionStatus || "",
    isNeutered: animal?.isNeutered || false,
    isVaccinated: animal?.isVaccinated || false,
    arrivalDate: animal
      ? (() => {
          const date = new Date(animal.arrivalDate);
          const offset = date.getTimezoneOffset();
          date.setMinutes(date.getMinutes() - offset);
          return date.toISOString().slice(0, 16);
        })()
      : "",
    description: animal?.description || "",
    image: animal?.image || "",
  };
}

function AnimalForm({ animal, onSubmit }) {
  const [formData, setFormData] = useState(buildFormData(animal));
  const [animalType, setAnimalType] = useState('cat');

  useEffect(() => {
    setFormData(buildFormData(animal));
  }, [animal]);

  function handleValueChanges(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "isNeutered" || name === "isVaccinated") {
      value = e.target.checked;
    } else if (name === "age") {
      value = Math.floor(value);
    }
    setFormData({ ...formData, [name]: value });
  }

  async function fetchCatImage() {
    const catApiUrl = "https://api.thecatapi.com/v1/images/search";
    try {
      const response = await fetch(catApiUrl);
      const data = await response.json();
      const imageUrl = data[0].url;
      setFormData({ ...formData, image: imageUrl });
    } catch (error) {
      alert(`Failed to fetch cat image: ${error.message}`);
    }
  }

  async function fetchDogImage() {
    const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
    try {
      const response = await fetch(dogApiUrl);
      const data = await response.json();
      const imageUrl = data.message;
      setFormData({ ...formData, image: imageUrl });
    } catch (error) {
      alert(`Failed to fetch dog image: ${error.message}`);
    }
  }

  function deleteAnimal() {
    if (window.confirm("Are you sure you want to delete this animal?")) {
      onSubmit?.(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.image) {
      alert("Please select an image");
      return;
    }

    onSubmit?.(formData);
  }

  return (
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <section style={styles.section}>
        <label style={styles.label}>
          <span>&nbsp;</span>
          <div style={styles.imageBox}>
            {formData.image ? (
              <img
                src={formData.image}
                alt="animal profile"
                width={350}
                style={styles.image}
              />
            ) : (
              <p>Click the button below to select an image</p>
            )}
          </div>
          <div style={styles.buttonGroup}>
            <button type="button" onClick={fetchCatImage} style={styles.button}>
              Select Random Cat Image
            </button>
            <button type="button" onClick={fetchDogImage} style={styles.button}>
              Select Random Dog Image
            </button>
          </div>
        </label>
        <div>
          <div>
            <h2>Animal Profile</h2>
            <section style={styles.section}>
              <div style={styles.forms}>
                <label style={styles.label}>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleValueChanges}
                    placeholder="Name"
                    required
                  />
                </label>
                <label style={styles.label}>
                  <span>Species</span>
                  <select
                    type="text"
                    name="species"
                    value={formData.species}
                    onChange={handleValueChanges}
                    placeholder="Species"
                    required
                  >
                    <option value="">Select Species</option>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                  </select>
                </label>
              </div>
              <div style={styles.forms}>
                <label style={styles.label}>
                  <span>Breed</span>
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleValueChanges}
                    placeholder="Breed"
                    required
                  />
                </label>
                <label style={styles.label}>
                  <span>Age</span>
                  <input
                    type="number"
                    name="age"
                    value={`${formData.age}`}
                    onChange={handleValueChanges}
                    placeholder="Age"
                    required
                  />
                </label>
              </div>
            </section>
          </div>
          <div>
            <h2>Animal Health</h2>
            <section style={styles.section}>
              <div style={styles.forms}>
                <label style={styles.label}>
                  <span>Health Status</span>
                  <select
                    name="healthStatus"
                    value={formData.healthStatus}
                    onChange={handleValueChanges}
                    required
                    style={styles.input}
                  >
                    <option value="">Health Status</option>
                    <option value="healthy">Healthy</option>
                    <option value="sick">Sick</option>
                  </select>
                </label>
                <label style={styles.label}>
                  <span>Adoption Status</span>
                  <select
                    name="adoptionStatus"
                    value={formData.adoptionStatus}
                    onChange={handleValueChanges}
                    required
                    style={styles.input}
                  >
                    <option value="">Adoption Status</option>
                    <option value="available">Available</option>
                    <option value="adopted">Adopted</option>
                  </select>
                </label>
              </div>
              <div style={styles.forms}>
                <label style={styles.inlineLabel}>
                  <span>Neutered</span>
                  <input
                    type="checkbox"
                    name="isNeutered"
                    checked={formData.isNeutered}
                    onChange={handleValueChanges}
                  />
                </label>
                <label style={styles.inlineLabel}>
                  <span>Vaccinated</span>
                  <input
                    type="checkbox"
                    name="isVaccinated"
                    checked={formData.isVaccinated}
                    onChange={handleValueChanges}
                  />
                </label>
              </div>
            </section>
          </div>
          <div>
            <h2>Animal Details</h2>
            <section style={styles.section}>
              <div style={styles.forms}>
                <label style={styles.label}>
                  <span>Gender</span>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleValueChanges}
                    required
                    style={styles.input}
                  >
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </label>
                <label style={styles.label}>
                  <span>Arrival Date</span>
                  <input
                    type="datetime-local"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleValueChanges}
                    placeholder="Arrival Date"
                    required
                  />
                </label>
                <label style={styles.label}>
                  <span>Description</span>
                  <textarea
                    name="description"
                    className="textarea-description"
                    value={formData.description}
                    onChange={handleValueChanges}
                    placeholder="Description"
                    required
                  />
                </label>
              </div>
            </section>
          </div>
        </div>
      </section>
      <div style={styles.buttonGroup}>
        {animal ? (
          <button
            type="button"
            style={{
              ...styles.button,
              border: "1px solid red",
              borderRadius: "0.1rem",
              color: "red",
            }}
            onClick={deleteAnimal}
          >
            Delete
          </button>
        ) : (
          <div />
        )}
        <button type="submit" style={styles.button}>
          {animal ? "Edit" : "Register"} Animal
        </button>
      </div>
    </form>
  );
}

export default AnimalForm;
