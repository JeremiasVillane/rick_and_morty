import { connect, useDispatch} from 'react-redux';
import { useState } from 'react';
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
  // const [aux, setAux] = useState(false);  //* Ya no me hace falta

  const handleChange = (event) => {
    const {name, value} = event.target;
    (name === 'order')
    ? dispatch(orderCards(value))
    : dispatch(filterCards(value))
  }

  return (
    <>
    <div>
      <select name='order' onChange={handleChange}>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <select name='gender' onChange={handleChange}>
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
            // status={fav.status}
            // origin={fav.origin.name}
            // onClose={fav.onClose}
            />
          )
        })
      }
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, null)(Favorites);
