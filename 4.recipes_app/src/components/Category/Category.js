import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Category.scss';
import Loader from '../Loader/Loader';
import RecipeCard from '../RecipeCard/RecipeCard';

function Category() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const { categoryId } = params;
    setIsLoading(true);

    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
      .then(data => {
        setRecipes(data?.data?.meals);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  function recipeClickHandler(recipe) {
    // console.log(recipe);
    navigate(`/recipe/${recipe.idMeal}`)
  }

  if (isLoading) {
    return (
      <div className='category'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='category'>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.idMeal}
          recipe={recipe}
          onClick={() => recipeClickHandler(recipe)}
        />
      ))}
    </div>
  );
}

export default Category;
