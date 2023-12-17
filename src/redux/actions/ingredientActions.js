import { SET_INGREDIENTS, SET_ERROR } from "./actionTypes";
import { fetchIngredients } from '../../services/api';

export const getIngredients = () => async (dispatch) => {
  try {
    const ingredients = await fetchIngredients();
    dispatch({ type: SET_INGREDIENTS, payload: ingredients });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: 'Error fetching ingredients' });
  }
};
