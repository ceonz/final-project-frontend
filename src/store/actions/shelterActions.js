import { getAllTasks, getTaskById, addTask as addTaskService, updateTask as updateTaskService } from '../../services/tasksService';

export const fetchTasks = () => async dispatch => {
  dispatch({ type: 'FETCH_TASKS_REQUEST' });
  try {
    const tasks = await getAllTasks();
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: tasks });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
  }
};

export const fetchTaskById = (taskId) => async dispatch => {
  dispatch({ type: 'FETCH_TASK_REQUEST' });
  try {
    const task = await getTaskById(taskId);
    dispatch({ type: 'FETCH_TASK_SUCCESS', payload: task });
  } catch (error) {
    dispatch({ type: 'FETCH_TASK_FAILURE', payload: error.message });
  }
}

export const addTask = (formData) => async dispatch => {
  dispatch({ type: 'ADD_TASK_REQUEST' });
  try {
    const response = await addTaskService(formData);
    dispatch({ type: 'ADD_TASK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_TASK_FAILURE', payload: error.message });
  }
};

export const updateTask = (taskId, formData) => async dispatch => {
  dispatch({ type: 'UPDATE_TASK_REQUEST' });
  try {
    const updatedTask = await updateTaskService(taskId, formData);
    dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: updatedTask });
  } catch (error) {
    dispatch({ type: 'UPDATE_TASK_FAILURE', payload: error.message });
  }
};