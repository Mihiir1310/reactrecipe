import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className="container">
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal} className="recipe-item">
            <Link to={`/recipe/${recipe.idMeal}`}>
              <h3>{recipe.strMeal}</h3>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p>{recipe.strInstructions}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
