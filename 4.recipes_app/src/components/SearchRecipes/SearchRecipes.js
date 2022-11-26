import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import RecipeCard from '../RecipeCard/RecipeCard';
import './SearchRecipes.scss';

function SearchRecipes() {
  const params = useParams();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.searchTerm}`)
      .then(data => {
        setRecipes(data?.data?.meals)
      })
      .catch(err => console.log(err))
  }, [params.searchTerm]);

  function recipeClickHandler(recipe) {
    navigate(`/recipe/${recipe.idMeal}`)
  }

  if (!recipes) {
    return (
      <div className='search-recipes'>
        <h2 className='error-message'>Please try another search.</h2>
      </div>
    );
  }

  return (
    <div className='search-recipes'>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.idMeal}
          recipe={recipe}
          onClick={() => recipeClickHandler(recipe)}
        />
      ))}
    </div>
  );
}

export default SearchRecipes;
