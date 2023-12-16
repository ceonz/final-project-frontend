import { useNavigate, useParams } from "react-router-dom";
import AnimalForm from "../components/AnimalForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addAnimal,
  deleteAnimal,
  fetchAnimalById,
  updateAnimal,
} from "../store/actions/animalActions";

export default function EditAnimalProfile() {
  const { animalId } = useParams();
  const dispatch = useDispatch();
  const animal = useSelector((state) => state.animals.currentAnimal);
  const loading = useSelector((state) => state.animals.loading);
  const error = useSelector((state) => state.animals.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (animalId) {
      dispatch(fetchAnimalById(animalId));
    }
    return () => {
      dispatch({ type: "CLEAR_CURRENT_ANIMAL" });
    };
  }, [dispatch, animalId]);

  if (!animal && loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  async function handleSubmit(formData) {
    if (animal && formData) {
      dispatch(updateAnimal(animal.id, formData));
    } else if (animal && !formData) {
      dispatch(deleteAnimal(animal.id));
    } else {
      dispatch(addAnimal(formData));
    }

    do {
      await new Promise((resolve) => setTimeout(resolve, 300));
    } while (loading);

    if (animal && !formData) {
      navigate(`/animal-profiles`, { replace: true });
    } else {
      navigate(-1);
    }
  }

  return (
    <div>
      <h1>{animalId ? "Edit Animal Details" : "Register New Animal"}</h1>
      <AnimalForm animal={animal} onSubmit={handleSubmit} />
    </div>
  );
}
