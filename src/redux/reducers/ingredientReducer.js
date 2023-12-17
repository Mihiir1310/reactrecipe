import { SET_INGREDIENTS } from "../actions/actionTypes";

const initialState = {
  ingredients: [],
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    default:
      return state;
  }
};

export default ingredientReducer;
