import styles from './Card.module.css'
import { Link, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { connect } from "react-redux";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if(isFav) {
      setIsFav(false)
      removeFav(id)
    } else {
      setIsFav(true)
      addFav({ id, name, species, gender, image })    //* sin destructuring sería props.addFav(props)
    }
  }
  
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  
  return (
    <div className={styles.card}>

      <div className={styles.nameContainer}>
        <img className={styles.cardImage} src={image} alt={name} />
        <Link to={`/detail/${id}`}><h1>{name}</h1></Link>
      </div>

      <div className={styles.divData}>
        <h5>id: {id}</h5>
        <h3>{species}</h3>
        <h3>{gender}</h3>
      </div>
      {
        useLocation().pathname === '/home' &&
        <button className={`${styles.cardButton} ${styles.cardButtonX}`} onClick={() => onClose(id)}>
          <span className={styles.cardButtonTransition}></span>
          <span className={styles.cardButtonLabel}>X</span>
        </button>
      }
      <button className={useLocation().pathname === '/home' 
          ? (`${styles.cardButton} ${styles.cardButtonfav}`)
          : (`${styles.cardButton} ${styles.cardButtonfavOnly}`)} 
          onClick={handleFavorite}>
        <span className={styles.cardButtonTransition}></span>
        <span className={styles.cardButtonLabel}>{isFav ? '❤️' : '🤍'}</span>
        </button>
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => { dispatch(addFav(character)) },
    removeFav: (id) => { dispatch(removeFav(id)) }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);