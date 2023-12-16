const API_BASE_URL = 'http://localhost:8000';

export const getAllAnimals = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/animals`);
    if (!response.ok) {
      throw new Error('Error fetching animals');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getAllAnimals:', error);
    throw error;
  }
};

export const getAnimalById = async (animalId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/animals/${animalId}`);
    if (!response.ok) {
      throw new Error('Error fetching animal by ID');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getAnimalById:', error);
    throw error;
  }
}

export const addAnimal = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/animals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error('Error adding animal');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in addAnimal:', error);
    throw error;
  }
}

export const updateAnimal = async (animalId, formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/animals/${animalId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error('Error updating animal');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in updateAnimal:', error);
    throw error;
  }
}

export const deleteAnimal = async (animalId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/animals/${animalId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error deleting animal');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in deleteAnimal:', error);
    throw error;
  }
}
