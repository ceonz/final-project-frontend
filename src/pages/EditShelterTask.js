import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addTask,
  deleteTask,
  fetchTaskById,
  updateTask,
} from "../store/actions/shelterActions";
import TaskForm from "../components/TaskForm";
import { fetchAnimalById } from "../store/actions/animalActions";

export default function EditShelterTask() {
  const { taskId, animalId } = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.currentTask);
  const taskLoading = useSelector((state) => state.tasks.loading);
  const taskError = useSelector((state) => state.tasks.error);
  const animal = useSelector((state) => state.animals.currentAnimal);
  const animalLoading = useSelector((state) => state.animals.loading);
  const animalError = useSelector((state) => state.animals.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (taskId) {
      dispatch(fetchTaskById(taskId));
    } else if (animalId) {
      dispatch(fetchAnimalById(animalId));
    }
    return () => {
      dispatch({ type: "CLEAR_CURRENT_TASK" });
      dispatch({ type: "CLEAR_CURRENT_ANIMAL" });
    };
  }, [dispatch, taskId, animalId]);

  if (!task && taskLoading) return <div>Loading...</div>;
  if (taskError) return <div>Error: {taskError}</div>;

  if (!animal && animalLoading) return <div>Loading...</div>;
  if (animalError) return <div>Error: {animalError}</div>;

  async function handleSubmit(formData) {
    if (task && formData) {
      dispatch(updateTask(task.id, formData));
    } else if (task && !formData) {
      dispatch(deleteTask(task.id));
    } else {
      dispatch(addTask(formData));
    }

    do {
      await new Promise((resolve) => setTimeout(resolve, 300));
    } while (taskLoading);

    if (task && !formData) {
      navigate(`/shelter-tasks`, { replace: true });
    } else {
      navigate(-1);
    }
  }

  return (
    <div>
      <h1>{taskId ? "Edit Shelter Task" : "Add New Shelter Task"}</h1>
      <TaskForm
        task={task}
        animal={task?.animal || animal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
