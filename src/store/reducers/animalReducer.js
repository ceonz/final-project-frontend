const initialState = {
  data: [],
  loading: false,
  error: null,
};

const animalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ANIMALS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_ANIMALS_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ANIMALS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default animalReducer;
