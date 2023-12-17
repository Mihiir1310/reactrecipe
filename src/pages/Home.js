import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import IngredientSearchForm from '../components/IngredientSearchForm';
import RecipeList from '../components/RecipeList';

const Home = () => {
  const allIngredients = useSelector((state) => state.ingredient.ingredients);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (term) => {
    // Update the search term
    setSearchTerm(term);

    // Filter ingredients based on the search term
    const filtered = allIngredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(term.toLowerCase())
    );

    // Set the filtered ingredients and reset current page to 1
    setFilteredIngredients(filtered);
    setCurrentPage(1);
  };

  const handlePagination = (page) => {
    // Update the current page
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedIngredients = filteredIngredients.slice(startIndex, endIndex);

  return (
    <div>
      <IngredientSearchForm onSearch={handleSearch} />
      {filteredIngredients.length > 0 ? (
        <>
          <RecipeList recipes={paginatedIngredients} />
          <div>
            <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
              Previous Page
            </button>
            <button onClick={() => handlePagination(currentPage + 1)} disabled={endIndex >= filteredIngredients.length}>
              Next Page
            </button>
          </div>
        </>
      ) : (
        <p>No matching ingredients found.</p>
      )}
    </div>
  );
};

export default Home;
