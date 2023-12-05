import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAnimal, updateAnimal } from '../store/actions/animalActions';

function AnimalForm({ animal, onSave }) {
  const initialFormState = {
    name: '', 
    species: '', 
    breed: '', 
    age: '', 
    healthStatus: '', 
    adoptionStatus: '', 
    arrivalDate: '', 
    description: ''
  };
  const [formData, setFormData] = useState(animal || initialFormState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (animal) {
      setFormData(animal);
    }
  }, [animal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (animal) {
      dispatch(updateAnimal(animal.id, formData)); 
    } else {
      dispatch(addAnimal(formData)); 
    }
    if (onSave) onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="species" value={formData.species} onChange={handleChange} placeholder="Species" />
      <input type="text" name="breed" value={formData.breed} onChange={handleChange} placeholder="Breed" />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="healthStatus" value={formData.healthStatus} onChange={handleChange} placeholder="Health Status" />
      <input type="text" name="adoptionStatus" value={formData.adoptionStatus} onChange={handleChange} placeholder="Adoption Status" />
      <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} placeholder="Arrival Date" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
      <button type="submit">{animal ? 'Update' : 'Add'} Animal</button>
    </form>
  );
}

export default AnimalForm;
