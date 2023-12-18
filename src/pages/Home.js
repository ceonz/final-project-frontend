import React, { useEffect, useMemo } from "react";
import AnimalProfileCard from "../components/AnimalProfileCard";
import { Link } from "react-router-dom";
import { fetchAnimals } from "../store/actions/animalActions";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const {
    data: animals,
    loading,
    error,
  } = useSelector((state) => state.animals);

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  const sortedAnimals = useMemo(
    () =>
      animals
        .toSorted((a, b) => b.arrivalDate.localeCompare(a.arrivalDate))
        .slice(0, 10),
    [animals]
  );

  const filteredAnimals = useMemo(
    () =>
      animals
        .filter((animal) => !animal.isNeutered || !animal.isVaccinated)
        .slice(0, 10),
    [animals]
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <header>
        <h1>Animal Shelter Management System</h1>
      </header>
      <h2 className="sectionTitle">Recently Arrived Animals</h2>
      <div className="cardContainer">
        {sortedAnimals.map((animal) => (
          <Link
            key={`recent-${animal.id}`}
            to={`/animal-profiles/${animal.id}`}
          >
            <AnimalProfileCard
              animal={animal}
              display={{ arrivalDate: true }}
            />
          </Link>
        ))}
      </div>
      <h2 className="sectionTitle">Animals Need Care</h2>
      <div className="cardContainer">
        {filteredAnimals.map((animal) => (
          <Link key={`care-${animal.id}`} to={`/animal-profiles/${animal.id}`}>
            <AnimalProfileCard
              animal={animal}
              requires={[
                !animal.isNeutered && "Neutering",
                !animal.isVaccinated && "Vaccination",
              ].filter((x) => x)}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
