import axios from 'axios';
import { ADD_FAV, ERROR, FILTER, ORDER, REMOVE_FAV } from './action-types';
const ENDPOINT = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(ENDPOINT, character);
            return dispatch({
               type: ADD_FAV,
               payload: data
              });

        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
 };

 export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${ENDPOINT}/${id}`)
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
              });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }

    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint)
       .then(({ data }) => {
        });
    };
 };

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
};