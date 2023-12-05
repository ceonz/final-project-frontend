import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAnimals } from '../store/actions/animalActions';
import TextInput from './TextInput';

function AnimalProfiles() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: animals, loading, error } = useSelector(state => state.animals);
  const [searchText, setSearchText] = useState("");
  
  const handleViewDetails = (animalId) => {
    navigate(`/animal-profiles/${animalId}`);
  };

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  const handleSearchInputChange = (text) => {
    setSearchText(text);
    
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1> Animal Profiles </h1>
      <TextInput onInputChange={handleSearchInputChange} />
      <ul>
        {filteredAnimals.map(animal => (
          <li key={animal.id}>
            <strong>{animal.name}</strong> - {animal.species}
            <button onClick={() => handleViewDetails(animal.id)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalProfiles;