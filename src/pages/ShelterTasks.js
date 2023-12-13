import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTasks } from "../store/actions/shelterActions";
import TaskDescriptionCard from "../components/TaskDescriptionCard";

function ShelterTasks() {
  const dispatch = useDispatch();
  const { data: tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const sortedTasks = useMemo(
    () =>
      tasks
        .toSorted((a, b) => b.dueDate.localeCompare(a.dueDate))
        .toSorted((a, b) => {
          if (a.priority === b.priority) return 0;
          if (a.priority === "High") return -1;
          if (a.priority === "Medium" && b.priority === "Low") return -1;
          return 1;
        }),
    [tasks]
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <header>
        <h1>Shelter Tasks</h1>
      </header>
      <div className="vertical-scrollable-container">
        {sortedTasks.map((task) => (
          <Link key={`task-${task.id}`} to={`/shelter-tasks/${task.id}`}>
            <TaskDescriptionCard key={task.id} task={task} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ShelterTasks;
