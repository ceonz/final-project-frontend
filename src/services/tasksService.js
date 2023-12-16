const API_BASE_URL = "http://localhost:8000";

export const getAllTasks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    if (!response.ok) {
      throw new Error("Error fetching shelter tasks");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getAllTasks:", error);
    throw error;
  }
};

export const getTaskById = async (taskId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`);
    if (!response.ok) {
      throw new Error("Error fetching task by ID");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getTaskById:", error);
    throw error;
  }
};

export const addTask = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Error adding task");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in addTask:", error);
    throw error;
  }
};

export const updateTask = async (taskId, formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Error updating task");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in updateTask:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error deleting task");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in deleteTask:", error);
    throw error;
  }
};
