// import {
//   getAllTasks,
//   getTaskById,
//   addTask as addTaskService,
//   updateTask as updateTaskService,
// } from "../../services/tasksService";

import * as tasksService from "../../services/tasksService";

export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: "FETCH_TASKS_REQUEST" });
  try {
    const tasks = await tasksService.getAllTasks();
    dispatch({ type: "FETCH_TASKS_SUCCESS", payload: tasks });
  } catch (error) {
    dispatch({ type: "FETCH_TASKS_FAILURE", payload: error.message });
  }
};

export const fetchTaskById = (taskId) => async (dispatch) => {
  dispatch({ type: "FETCH_TASK_REQUEST" });
  try {
    const task = await tasksService.getTaskById(taskId);
    dispatch({ type: "FETCH_TASK_SUCCESS", payload: task });
  } catch (error) {
    dispatch({ type: "FETCH_TASK_FAILURE", payload: error.message });
  }
};

export const addTask = (formData) => async (dispatch) => {
  dispatch({ type: "ADD_TASK_REQUEST" });
  try {
    const task = await tasksService.addTask(formData);
    dispatch({ type: "ADD_TASK_SUCCESS", payload: task });
  } catch (error) {
    dispatch({ type: "ADD_TASK_FAILURE", payload: error.message });
  }
};

export const updateTask = (taskId, formData) => async (dispatch) => {
  dispatch({ type: "UPDATE_TASK_REQUEST" });
  try {
    const updatedTask = await tasksService.updateTask(taskId, formData);
    dispatch({ type: "UPDATE_TASK_SUCCESS", payload: updatedTask });
  } catch (error) {
    dispatch({ type: "UPDATE_TASK_FAILURE", payload: error.message });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  dispatch({ type: "DELETE_TASK_REQUEST" });
  try {
    await tasksService.deleteTask(taskId);
    dispatch({ type: "DELETE_TASK_SUCCESS", payload: taskId });
  } catch (error) {
    dispatch({ type: "DELETE_TASK_FAILURE", payload: error.message });
  }
};
