import { getAllAnimals, getAnimalById, addAnimal as addAnimalService, updateAnimal as updateAnimalService } from '../../services/animalService';

export const fetchAnimals = () => async dispatch => {
  dispatch({ type: 'FETCH_ANIMALS_REQUEST' });
  try {
    const animals = await getAllAnimals();
    dispatch({ type: 'FETCH_ANIMALS_SUCCESS', payload: animals });
  } catch (error) {
    dispatch({ type: 'FETCH_ANIMALS_FAILURE', payload: error.message });
  }
};

export const fetchAnimalById = (animalId) => async dispatch => {
  dispatch({ type: 'FETCH_ANIMAL_REQUEST' });
  try {
    const animal = await getAnimalById(animalId);
    dispatch({ type: 'FETCH_ANIMAL_SUCCESS', payload: animal });
  } catch (error) {
    dispatch({ type: 'FETCH_ANIMAL_FAILURE', payload: error.message });
  }
}

export const addAnimal = (formData) => async dispatch => {
  dispatch({ type: 'ADD_ANIMAL_REQUEST' });
  try {
    const response = await addAnimalService(formData);
    dispatch({ type: 'ADD_ANIMAL_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_ANIMAL_FAILURE', payload: error.message });
  }
};

export const updateAnimal = (animalId, formData) => async dispatch => {
  dispatch({ type: 'UPDATE_ANIMAL_REQUEST' });
  try {
    const updatedAnimal = await updateAnimalService(animalId, formData);
    dispatch({ type: 'UPDATE_ANIMAL_SUCCESS', payload: updatedAnimal });
  } catch (error) {
    dispatch({ type: 'UPDATE_ANIMAL_FAILURE', payload: error.message });
  }
};