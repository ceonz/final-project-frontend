import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home";
import { Link } from "react-router-dom";
import { fetchTasks } from "../store/actions/shelterActions";
import TaskDescriptionCard from "../components/TaskDescriptionCard";
// import TextInput from "./TextInput";

function ShelterTasks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {
  //   data: tasks,
  //   loading,
  //   error,
  // } = useSelector((state) => state.tasks);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

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

    const [searchText, setSearchText] = useState("");

    const handleViewDetails = (taskId) => {
      navigate(`/shelter-tasks/${taskId}`);
    };

    const handleSearchInputChange = (text) => {
      setSearchText(text);
    };

    useEffect(() => {
      dispatch(fetchTasks());
    }, [dispatch]);

  return (
    <main>
      <header>
        <h1>Shelter Tasks</h1>
      </header>
      <div className="vertical-scrollable-container">
        {tasks.map((task) => (
          <Link to={`/shelter-tasks/${task.id}`}>
            <TaskDescriptionCard key={task.id} task={task} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ShelterTasks;
