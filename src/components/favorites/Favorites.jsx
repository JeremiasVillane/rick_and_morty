import { connect } from 'react-redux';
import Card from '../card/Card';

export const Favorites = ({ myFavorites }) => {
  return (
    <div>
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
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, null)(Favorites);
