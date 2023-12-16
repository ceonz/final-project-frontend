import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTaskById } from "../store/actions/shelterActions";

const styles = {
  section: {
    display: "flex",
    gap: "1rem",
  },
  taskBox: {
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "5px",
    marginBottom: "1rem",
    display: "grid",
    gap: "0.5rem",
    gridTemplateColumns: "fit-content(100%) 1fr",
  },
  label: {
    whiteSpace: "nowrap",
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
  status: {
    icon: {
      display: "inline-block",
      width: "1.5rem",
      height: "1.5rem",
      borderRadius: "50%",
    },
    complete: {
      color: "green",
    },
    incomplete: {
      color: "red",
    },
  },
};

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
  if (!task) return <div>Task not found</div>;

  return (
    <div>
      <header>
        <h1>Task Details</h1>
        <h2>{animal.name}</h2>
      </header>
      <div style={styles.taskBox}>
        <b style={styles.label}>Assigned To</b>
        <span>{task.assignedTo}</span>
        <b style={styles.label}>Description</b>
        <span>{task.description}</span>
        <b style={styles.label}>Due Date</b>
        <span>
          {new Date(task.dueDate).toLocaleString("en-US", {
            dateStyle: "long",
            timeStyle: "short",
          })}
        </span>
        <b style={styles.label}>Status</b>
        <span>{task.status}</span>
        <b style={styles.label}>Priority</b>
        <span>{task.priority}</span>
        <div />
        <Link
          style={{ ...styles.link, marginLeft: "auto" }}
          to={`/shelter-tasks/${task.id}/edit`}
        >
          Edit Task
        </Link>
      </div>
      <section style={styles.section}>
        <div style={styles.imageBox}>
          <div style={styles.links}>
            <Link
              style={styles.link}
              to={`/animal-profiles/${task.animal.id}/edit`}
            >
              Edit Profile
            </Link>
          </div>
          <img src={animal.image} alt={animal.name} width={350} />
        </div>
        <div>
          <div style={styles.content}>
            <span>
              <strong>Name: </strong> {animal.name}
            </span>
            <span>
              <strong>Species:</strong> {animal.species}
            </span>
            <span>
              <strong>Breed:</strong> {animal.breed}
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
        </div>
      </section>
    </div>
  );
}

export default ShelterTaskDetails;
