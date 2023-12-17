import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../redux/actions/recipeActions';
import RecipeDetails from '../components/RecipeDetails';

const RecipeDetailsPage = () => {
  const dispatch = useDispatch();
  const { label } = useParams();
  const selectedRecipe = useSelector((state) => state.recipe.selectedRecipe);

  useEffect(() => {
    dispatch(getRecipeDetails(label));
  }, [dispatch, label]);

  return (
    <div>
      <h2>Recipe Details Page</h2>
      <RecipeDetails recipe={selectedRecipe} />
    </div>
  );
};

export default RecipeDetailsPage;
