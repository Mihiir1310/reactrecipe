// IngredientSearchForm.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../redux/actions/ingredientActions';
import { searchRecipes } from '../redux/actions/recipeActions';
import '../App.css';
import '../index.css';

const IngredientSearchForm = ({ recipes }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredient.ingredients);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleSearch = (search) => {
    
    // const selectedIngredient = ingredients.find(
    //   (ingredient) => ingredient.strIngredient === searchTerm
    // );

    // if (selectedIngredient) {
    //   dispatch(searchRecipes(selectedIngredient.strIngredient));
    //   // Reset pagination when initiating a new search
    //   setCurrentPage(1);
    // } else {
    //   console.error(`Ingredient ${searchTerm} not found`);
    // }
    // setSearchTerm(value);

    // console.log(paginatedIngredients);
    // paginatedIngredients.filter((ingredient) => {

    //   // console.log(ingredient);
    //     return value && ingredient && ingredient.strIngredient.toLowerCase().includes(value);
    // });

    
  };

  // Calculate the index range of ingredients to display based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedIngredients = ingredients.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <h1>Recipe Search App</h1>
      <div className="input-group">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter ingredients..."
         
        />
        <button className="button"  onClick={() => handleSearch()} >
          Search
        </button>
      </div>
      <ul>
        {paginatedIngredients.map((ingredient) => (
          <li key={ingredient.strIngredient}>{ingredient.strIngredient}</li>
          //<li key={ingredient.strMealThumb}>{ingredient.strMealThumb}</li>
        ))}
      </ul>
      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= ingredients.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IngredientSearchForm;
