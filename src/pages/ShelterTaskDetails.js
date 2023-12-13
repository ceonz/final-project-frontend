import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTaskById } from "../store/actions/shelterActions";

function ShelterTaskDetails() {
  const { taskId } = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.currentTask);
  const animal = useSelector((state) => state.tasks.currentTask?.animal);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTaskById(taskId));
  }, [dispatch, taskId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Task Details</h1>
      {task && (
        <>
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
          <hr />
          <div>
            <h2>{task.name}</h2>
            <p>
              <strong>Assigned To:</strong> {task.assignedTo}
            </p>
            <p>
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Due Date:</strong> {task.dueDate}
            </p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
            <p>
              <strong>Priority:</strong> {task.priority}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ShelterTaskDetails;
