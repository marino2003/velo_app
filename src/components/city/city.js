import styles from "./city.module.css";

export default function City(props) {
  return (
    <div key={props.name}>
    <h2 className={styles.city}>{props.name}</h2>
    <p>{props.country}</p>
    </div>
  );
}
