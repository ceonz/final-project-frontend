import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAnimals } from '../store/actions/animalActions';

function AnimalProfiles() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: animals, loading, error } = useSelector(state => state.animals);

  const handleViewDetails = (animalId) => {
    navigate(`/animal-profiles/${animalId}`);
  };

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
