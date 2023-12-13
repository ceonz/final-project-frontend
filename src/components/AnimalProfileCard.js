import styles from "./AnimalProfileCard.module.css";

export default function AnimalProfileCard({ animal, requires, display }) {
  return (
    <div className={styles.card}>
      <figure>
        <img
          src={animal.image}
          alt={`A ${animal.species} named ${animal.name}`}
        />
        <figcaption>
          <h3>{animal.name}</h3>
          <p>{animal.description}</p>
          {display?.arrivalDate && (
            <p>
              <strong>Arrival Date:</strong>{" "}
              {new Date(animal.arrivalDate).toLocaleString("en-US", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </p>
          )}
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
