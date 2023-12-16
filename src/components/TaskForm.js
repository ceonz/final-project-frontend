import React, { useState, useEffect } from "react";

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
    gap: "1rem",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },
  imageBox: {
    width: "350px",
    height: "590px",
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

function buildFormData(task) {
  return {
    assignedTo: task?.assignedTo || "",
    description: task?.description || "",
    dueDate: task
      ? (() => {
          const date = new Date(task.dueDate);
          const offset = date.getTimezoneOffset();
          date.setMinutes(date.getMinutes() - offset);
          return date.toISOString().slice(0, 16);
        })()
      : "",
    status: task?.status || "",
    priority: task?.priority || "Medium",
  };
}

function TaskForm({ task, animal, onSubmit }) {
  const [formData, setFormData] = useState(buildFormData(task));

  useEffect(() => {
    setFormData(buildFormData(task));
  }, [task]);

  function handleValueChanges(e) {
    const name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function deleteTask() {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onSubmit?.();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.({ ...formData, animalId: animal.id });
  }

  return (
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <section style={styles.section}>
        <label style={styles.label}>
          <div style={styles.imageBox}>
            {animal ? (
              <img
                src={animal.image}
                alt="animal profile"
                width={350}
                style={styles.image}
              />
            ) : (
              <p>Click the button below to select an image</p>
            )}
          </div>
        </label>
        <div style={{ width: "300px" }}>
          {animal && (
            <div style={styles.forms}>
              <label style={styles.label}>
                <span>Name, Age</span>
                <input
                  type="text"
                  value={`${animal.name}, ${animal.age}`}
                  readOnly
                />
              </label>
              <label style={styles.label}>
                <span>Species, Breed</span>
                <input
                  type="text"
                  value={`${animal.species}, ${animal.breed}`}
                  readOnly
                />
              </label>
              <label style={styles.label}>
                <span>Adoption Status</span>
                <input type="text" value={animal.adoptionStatus} readOnly />
              </label>
              <label style={styles.label}>
                <span>Health Status</span>
                <input
                  type="text"
                  value={`${animal.healthStatus}, ${
                    animal.isNeutered ? "Neutered" : "Not Neutered"
                  }, ${animal.isVaccinated ? "Vaccinated" : "Not Vaccinated"}`}
                  readOnly
                />
              </label>
            </div>
          )}
          <hr style={{ margin: "1rem 0" }} />
          <div style={styles.forms}>
            <label style={styles.label}>
              <span>Assigned To</span>
              <input
                type="text"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleValueChanges}
                placeholder="Assigned To"
                required
              />
            </label>
            <label style={styles.label}>
              <span>Description</span>
              <textarea
                rows={5}
                name="description"
                value={formData.description}
                onChange={handleValueChanges}
                placeholder="Description"
                required
              />
            </label>
            <label style={styles.label}>
              <span>Due Date</span>
              <input
                type="datetime-local"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleValueChanges}
                placeholder="Due Date"
                required
              />
            </label>
            <label style={styles.label}>
              <span>Status</span>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleValueChanges}
                placeholder="Status"
                required
              />
            </label>
            <label style={styles.label}>
              <span>Priority</span>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleValueChanges}
                required
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
          </div>
        </div>
      </section>
      <div style={styles.buttonGroup}>
        {task ? (
          <button
            type="button"
            style={{
              ...styles.button,
              border: "1px solid red",
              borderRadius: "0.1rem",
              color: "red",
            }}
            onClick={deleteTask}
          >
            Delete
          </button>
        ) : (
          <div />
        )}
        <button type="submit" style={styles.button}>
          {task ? "Edit" : "Add"} Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
