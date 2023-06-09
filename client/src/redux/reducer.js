import { ADD_FAV, ERROR, FILTER, ORDER, REMOVE_FAV } from './action-types';

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: false
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
                errors: false
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
                errors: false
            };
        case ERROR:
            return {
                ...state,
                errors: payload
            }
        // case REMOVE_FAV:
        //     const filteredFavs = fav => fav.id !== Number(payload)
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter(filteredFavs),
        //         allCharacters: state.allCharacters.filter(filteredFavs)
        //     };
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
            return { ...state };
    }
};

export default reducer;