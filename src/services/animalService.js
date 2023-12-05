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
