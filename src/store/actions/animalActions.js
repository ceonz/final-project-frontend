import { getAllAnimals } from '../../services/animalService';

export const fetchAnimals = () => async dispatch => {
  dispatch({ type: 'FETCH_ANIMALS_REQUEST' });
  try {
    const animals = await getAllAnimals();
    dispatch({ type: 'FETCH_ANIMALS_SUCCESS', payload: animals });
  } catch (error) {
    dispatch({ type: 'FETCH_ANIMALS_FAILURE', payload: error.message });
  }
};
