import { useMemo } from "react";
import styles from "./TaskDescriptionCard.module.css";

export default function TaskDescriptionCard({ task }) {
  const animal = useMemo(() => task.animal, [task.animal]);

  return (
    <div className={styles.card}>
      <img
        src={animal.image}
        alt={`A ${animal.species} named ${animal.name}`}
      />
      <section>
        <div>
          <p>Name: {animal.name}</p>
          <p>Species: {animal.species}</p>
          <p>Breed: {animal.breed}</p>
          <p>Age: {animal.age}</p>
          <p>Health Status: {animal.healthStatus}</p>
          <p>
            Arrival Date:{" "}
            {new Date(animal.arrivalDate).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
        </div>
        <i className={styles.divider} />
        <div>
          <p>Assigned To: {task.assignedTo}</p>
          <p>Description: {task.description}</p>
          <p>
            Due Date:{" "}
            {new Date(task.dueDate).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
        </div>
      </section>
    </div>
  );
}
