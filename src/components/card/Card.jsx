import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
  return (
    <div className={styles.card}>
      <div className={styles.nameContainer}>
        <img className={styles.cardImage} src={image} alt={name} />
        <Link to={`/detail/${id}`}><h1>{name}</h1></Link>
      </div>
      <div className={styles.divData}>
        <h3>{status}</h3>
        <h3>{species}</h3>
        <h3>{gender}</h3>
        <h3>{origin}</h3>
      </div>
      <button className={styles.cardButton} onClick={() => onClose(id)}>
        <span className={styles.cardButtonTransition}></span>
        <span className={styles.cardButtonLabel}>X</span>
      </button>
    </div>
   );
}
