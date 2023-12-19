import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTasks } from "../store/actions/shelterActions";
import TaskDescriptionCard from "../components/TaskDescriptionCard";
import Search from "../components/Search";

function ShelterTasks() {
  const dispatch = useDispatch();
  const { data: tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const [searchText, setSearchText] = useState("");

  const filteredTasks = useMemo(
    () =>
      tasks
        .toSorted((a, b) => b.dueDate.localeCompare(a.dueDate))
        .toSorted((a, b) => {
          if (a.priority === b.priority) return 0;
          if (a.priority === "High") return -1;
          if (a.priority === "Medium" && b.priority === "Low") return -1;
          return 1;
        })
        .filter((task) => {
          const descriptionMatch = task.description.match(
            new RegExp(searchText, "gi")
          );
          const assignedToMatch =
            task.assignedTo.toLowerCase().includes(searchText.toLowerCase());

          return descriptionMatch || assignedToMatch;
        }),
    [tasks, searchText]
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <header>
        <h1>Shelter Tasks</h1>
      </header>
      <Search onTextInput={setSearchText} />
      <div className="assigned-search">
        {filteredTasks.map((task) => (
          <Link key={`task-${task.id}`} to={`/shelter-tasks/${task.id}`}>
            <TaskDescriptionCard key={task.id} task={task} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ShelterTasks;
