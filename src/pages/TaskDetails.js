import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTaskById } from "../store/actions/shelterActions";
import TaskForm from "../components/TaskForm";
import { fetchAnimalById } from "../store/actions/animalActions";
import AnimalForm from "../components/AnimalForm";

function TaskDetails() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.currentTask);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTaskById(taskId));
  }, [dispatch, taskId]);

  const handleSave = () => {
    navigate("/shelter-tasks");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Task Details</h1>
      {task && (
        <>
          <div>
            <h2>{task.name}</h2>
            <p>
                <strong>Id:</strong> {task.id}
            </p>
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
            <p>
                <strong>Animal:</strong> {task.animal}
            </p>
            {/* <div>
                <p>
                    <strong>Species:</strong> {AnimalForm.species}
                </p>
                <p>
                    <strong>Breed:</strong> {AnimalForm.breed}
                </p>
                <p>
                    <strong>Age:</strong> {AnimalForm.age}
                </p>
                <p>
                    <strong>Health Status:</strong> {AnimalForm.healthStatus}
                </p>
                <p>
                    <strong>Adoption Status:</strong> {AnimalForm.adoptionStatus}
                </p>
                <p>
                    <strong>Arrival Date:</strong> {AnimalForm.arrivalDate}
                </p>
                <p>
                    <strong>Description:</strong> {AnimalForm.description}
                </p>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default TaskDetails;