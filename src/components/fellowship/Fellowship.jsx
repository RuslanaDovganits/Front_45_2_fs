import styles from "./fellowship.module.css";

export default function Fellowship({ name, age, weapons, isDark, image }) {
  return (
    <div className={styles.heroCard} style={{ backgroundColor: isDark ? "grey" : "green" }}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Weapons: {weapons}</p>
      <p> {isDark ? "Villain 😈" : "Hero 🦸‍♂️"} </p>
      <img className={styles.img} src={image} alt={name} />
    </div>
  );
}
