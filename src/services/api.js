import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchIngredients = async () => {
  const response = await axios.get(`${API_BASE_URL}/list.php?i=list`);
  return response.data.meals;
};

export const fetchRecipesByIngredient = async (ingredient) => {
  const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
  return response.data.meals;
};

export const fetchRecipeDetails = async (recipeId) => {
  const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${recipeId}`);
  return response.data.meals[0];
};
