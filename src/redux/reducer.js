import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './action-types';

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            };

        case REMOVE_FAV:
            const filteredFavs = fav => fav.id !== Number(payload)
            return {
                ...state,
                myFavorites: state.myFavorites.filter(filteredFavs),
                allCharacters: state.allCharacters.filter(filteredFavs)
            };
        case FILTER:
            const filteredCharacters = 
                payload === 'allCharacters' 
                ? [...state.allCharacters] 
                : state.allCharacters.filter(char => char.gender === payload);
            return {
              ...state,
              myFavorites: filteredCharacters
            };
        case ORDER:
            const allCharactersCopy = [...state.myFavorites];
            const sortedCharacters = 
                payload === 'A' 
                ? allCharactersCopy.sort((a, b) => a.id - b.id) 
                : allCharactersCopy.sort((a, b) => b.id - a.id);
            return {
              ...state,
              myFavorites: sortedCharacters
            };
        default:
            return {...state};
    }
};

export default reducer;