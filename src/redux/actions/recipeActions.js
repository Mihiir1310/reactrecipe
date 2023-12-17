import { SET_RECIPES, SET_SELECTED_RECIPE, SET_ERROR } from './actionTypes';
import { fetchRecipesByIngredient, fetchRecipeDetails } from '../../services/api';





export const searchRecipes = (ingredient) => async (dispatch) => {
  try {
    const recipes = await fetchRecipesByIngredient(ingredient);
    dispatch({type: SET_RECIPES, payload:recipes});
  } catch (error) {
    dispatch({type: SET_ERROR, payload: 'Error fetching recipes'});
  }
};


export const getRecipesByIngredient = (ingredient) => async (dispatch) => {
  try {
    const recipes = await fetchRecipesByIngredient(ingredient);
    dispatch({ type: SET_RECIPES, payload: recipes });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: 'Error fetching recipes' });
  }
};

export const getRecipeDetails = (recipeId) => async (dispatch) => {
  try {
    const recipeDetails = await fetchRecipeDetails(recipeId);
    dispatch({ type: SET_SELECTED_RECIPE, payload: recipeDetails });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: 'Error fetching recipe details' });
  }
};
