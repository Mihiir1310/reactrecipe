import { SET_RECIPES, SET_SELECTED_RECIPE, SET_ERROR } from "../actions/actionTypes";

const initialState = {
  recipes: [],
  selectedRecipe: [],
  error: '',
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, recipes: action.payload, error: '' };
    case SET_SELECTED_RECIPE:
      return { ...state, selectedRecipe: action.payload, error: '' };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
