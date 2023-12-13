import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAnimals } from "../store/actions/animalActions";
import SearchForm from "./SearchForm";
import AnimalProfileCard from "../components/AnimalProfileCard";

function AnimalProfiles() {
  const [searchText, setSearchText] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: animals,
    loading,
    error,
  } = useSelector((state) => state.animals);

  function handleViewDetails(animalId) {
    navigate(`/animal-profiles/${animalId}`);
  }

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  const filteredAnimals = useMemo(
    () =>
      animals.filter((animal) =>
        animal.name.match(new RegExp(searchText, "gi"))
      ),
    [animals, searchText]
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <header>
        <h1>Animal Profiles</h1>
      </header>
      <SearchForm onTextInput={setSearchText} />
      <div
        className="masonry-container"
        style={{
          width: "1000px",
        }}
      >
        {filteredAnimals.map((animal) => (
          <Link
            key={`animal-${animal.id}`}
            className="masonry-item"
            to={`/animal-profiles/${animal.id}`}
          >
            <AnimalProfileCard
              animal={animal}
              onViewDetails={handleViewDetails}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default AnimalProfiles;
