import "./AnimalProfileCard.css";

export default function AnimalProfileCard({ animal, requires }) {
  return (
    <div className="card">
      <figure>
        <img
          src={animal.imageUrl}
          alt={`A ${animal.species} named ${animal.name}`}
        />
        <figcaption>
          <h3>{animal.name}</h3>
          <p>{animal.description}</p>
          {requires && (
            <>
              <h4>{requires.length === 1 ? "Requires" : "Require"}:</h4>
              <p>{requires.join(", ")}</p>
            </>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
