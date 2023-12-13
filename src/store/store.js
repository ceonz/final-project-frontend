import { configureStore } from "@reduxjs/toolkit";
import animalReducer from "./reducers/animalReducer";
import taskReducer from "./reducers/taskReducer";

const store = configureStore({
  reducer: {
    animals: animalReducer,
    tasks: taskReducer,
  },
});

export default store;
