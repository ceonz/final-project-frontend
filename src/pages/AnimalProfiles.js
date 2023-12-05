import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnimals } from '../store/actions/animalActions';

function AnimalProfiles() {
  const dispatch = useDispatch();
  const { data: animals, loading, error } = useSelector(state => state.animals);

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Animal Profiles</h1>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>{animal.name} - {animal.species}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalProfiles;
