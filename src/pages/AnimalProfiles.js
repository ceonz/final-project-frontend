import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnimals } from '../store/actions/animalActions';
import TextInput from './TextInput';

function AnimalProfiles() {
  const dispatch = useDispatch();
  const { data: animals, loading, error } = useSelector(state => state.animals);

  const [searchText, setSearchText] = useState("");

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
          <li key={animal.id}>{animal.name} - {animal.species}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalProfiles;