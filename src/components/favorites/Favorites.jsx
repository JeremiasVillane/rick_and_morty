import { connect, useDispatch} from 'react-redux';
// import { useState } from 'react';
import { filterCards, orderCards } from '../../redux/actions';
import Card from '../card/Card';

export const Favorites = ({ myFavorites }) => {
  const favContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '3rem',
  }

  const dispatch = useDispatch();
  const handleChange = (event) => {
    const {name, value} = event.target;
    (name === 'order') 
    ? dispatch(orderCards(value))
    : dispatch(filterCards(value))
  }

  // const [aux, setAux] = useState(false);
  // const handleChange = (event) => {
  //   const {name, value} = event.target;
  //   if (name === 'order') {
  //     dispatch(orderCards(value))
  //     setAux(true)
  //   } else {
  //     dispatch(filterCards(value))
  //   }
  // }

  return (
    <>
    <div onChange={handleChange}>
      <select name='order'>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <select name='gender'>
        <option value="allCharacters">All Characters</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>unknown</option>
      </select>
    </div>
    <div style={favContainer}>
      {
        myFavorites?.map(fav => {
          return (
            <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            />
          )
        })
      }
    </div>
    </>
  );
};

//! Cambiar por useSelector
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, null)(Favorites);
