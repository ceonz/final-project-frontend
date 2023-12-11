import React from "react";
import "./Home";
import { Link } from "react-router-dom";
import TaskDescriptionCard from "../components/TaskDescriptionCard";

function ShelterTasks() {
  const tasks = [...Array(10).keys()]
    .map((n) => {
      const priority = ["Low", "Medium", "High"][Math.floor(Math.random() * 3)];

      return {
        id: n + 1,
        assignedTo: "John Doe",
        description: "Vaccinate Fido",
        dueDate: "2021-01-01",
        status: "Incomplete",
        priority,
        animal: {
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
          description: "This animal is very friendly.",
        },
      };
    })
    .sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority === "High") return -1;
      if (a.priority === "Medium" && b.priority === "Low") return -1;
      return 1;
    });

  return (
    <main>
      <header>
        <h1>Shelter Tasks</h1>
      </header>
      <div className="vertical-scrollable-container">
        {tasks.map((task) => (
          <Link to={`/animal-profiles/${task.id}`}>
            <TaskDescriptionCard key={task.id} task={task} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ShelterTasks;
