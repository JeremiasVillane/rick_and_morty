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
            const favsFiltered = fav => fav.id !== Number(payload)
            return {
                ...state,
                myFavorites: state.myFavorites.filter(favsFiltered),
                allCharacters: state.allCharacters.filter(favsFiltered)
            };
        case FILTER:
            const charsFiltered = state.allCharacters.filter(char => char.gender === payload) 
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters' 
                    ? [...state.allCharacters]
                    : charsFiltered
            }
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                    payload === 'A'
                    ? allCharactersCopy.sort((a, b) => a.id - b.id)
                    : allCharactersCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state};
    }
};

export default reducer;