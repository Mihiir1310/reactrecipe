import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../index.css';

const RecipeDetails = ({ recipe }) => {
  console.log(recipe)
  return (
    <div className="container">
      <h1>Recipe Details</h1>
      {recipe ? (
        <div className="recipe-item">
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h4>Ingredients</h4>
          <ul>
            {Object.keys(recipe)
              .filter((key) => key.includes('strIngredient') && recipe[key])
              .map((key) => (
                <li key={key}>{recipe[key]}</li>
              ))}
          </ul>
          <h4>Instructions</h4>
          <p>{recipe.strInstructions}</p>
          <Link to="/">Back to Recipe List</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecipeDetails;
