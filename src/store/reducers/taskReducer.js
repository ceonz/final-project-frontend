const initialState = {
    data: [],
    currentTask: null, 
    loading: false,
    error: null,
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      // Fetch all tasks
      case 'FETCH_TASKS_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_TASKS_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_TASKS_FAILURE':
        return { ...state, loading: false, error: action.payload };
  
      // Fetch single task
      case 'FETCH_TASK_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_TASK_SUCCESS':
        return { ...state, loading: false, currentTask: action.payload };
      case 'FETCH_TASK_FAILURE':
        return { ...state, loading: false, error: action.payload };
  
      // Add task
      case 'ADD_TASK_REQUEST':
        return { ...state, loading: true, error: null };
      case 'ADD_TASK_SUCCESS':
        return { ...state, loading: false, data: [...state.data, action.payload] };
      case 'ADD_TASK_FAILURE':
        return { ...state, loading: false, error: action.payload };
  
      // Update task
      case 'UPDATE_TASK_REQUEST':
        return { ...state, loading: true, error: null };
      case 'UPDATE_TASK_SUCCESS':
        return {
          ...state,
          loading: false,
          data: state.data.map(task => task.id === action.payload.id ? action.payload : task),
        };
      case 'UPDATE_TASK_FAILURE':
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default taskReducer;