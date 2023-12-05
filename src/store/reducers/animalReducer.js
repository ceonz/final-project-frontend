const initialState = {
  data: [],
  currentAnimal: null, 
  loading: false,
  error: null,
};

const animalReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch all animals
    case 'FETCH_ANIMALS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_ANIMALS_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ANIMALS_FAILURE':
      return { ...state, loading: false, error: action.payload };

    // Fetch single animal
    case 'FETCH_ANIMAL_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_ANIMAL_SUCCESS':
      return { ...state, loading: false, currentAnimal: action.payload };
    case 'FETCH_ANIMAL_FAILURE':
      return { ...state, loading: false, error: action.payload };

    // Add animal
    case 'ADD_ANIMAL_REQUEST':
      return { ...state, loading: true, error: null };
    case 'ADD_ANIMAL_SUCCESS':
      return { ...state, loading: false, data: [...state.data, action.payload] };
    case 'ADD_ANIMAL_FAILURE':
      return { ...state, loading: false, error: action.payload };

    // Update animal
    case 'UPDATE_ANIMAL_REQUEST':
      return { ...state, loading: true, error: null };
    case 'UPDATE_ANIMAL_SUCCESS':
      return {
        ...state,
        loading: false,
        data: state.data.map(animal => animal.id === action.payload.id ? action.payload : animal),
      };
    case 'UPDATE_ANIMAL_FAILURE':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default animalReducer;
