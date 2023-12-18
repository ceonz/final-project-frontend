import styles from "./AnimalProfileCard.module.css";

export default function AnimalProfileCard({ animal, requires = [], display }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{animal.name}</h3>
        <span className={styles.badge}>{animal.species}</span>
      </div>
      <div className={styles.cardContent}>
        <img
          className={styles.avatar}
          src={animal.image}
          alt={`A ${animal.species} named ${animal.name}`}
        />
        <p className={styles.description}>{animal.description}</p> 
        <p className={styles.cardDetail}>
          {display?.arrivalDate &&
            `Arrived: ${new Date(animal.arrivalDate).toLocaleDateString()}`}
        </p>
        {requires.length > 0 && (
          <div className={styles.requirements}>
            <h4>{requires.length === 1 ? "Requires" : "Require"}:</h4>
            <p>{requires.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
