import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './reducers/animalReducer';

const store = configureStore({
  reducer: {
    animals: animalReducer,
  },
});

export default store;
