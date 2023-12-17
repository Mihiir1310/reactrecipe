import { combineReducers } from 'redux';
import ingredientReducer from './ingredientReducer';
import recipeReducer from './recipeReducer';

const rootReducer = combineReducers({
  ingredient: ingredientReducer,
  recipe: recipeReducer,
});

export default rootReducer;
