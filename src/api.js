import axios from 'axios';

const API_ID = '<your_edamam_api_id>';
const API_KEY = '<your_edamam_api_key>';

export const searchRecipes = async (query) => {
  const response = await axios.get(
    `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
  );
  return response.data.hits;
};