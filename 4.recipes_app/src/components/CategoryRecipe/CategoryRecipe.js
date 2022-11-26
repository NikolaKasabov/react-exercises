import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import './CategoryRecipe.scss';

function CategoryRecipe() {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => { 
    const { recipeId } = params;
    setIsLoading(true);

    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then(data => {
        if (!data.data.meals) {
          navigate('/');
          return;
        }

        setRecipe(data?.data?.meals[0])
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));

  }, []);

  if (isLoading) {
    return (
      <div className='category-recipe'>
        <Loader />
      </div>  
    );
  }

  return (
    <div className='category-recipe'>
      <RecipeDetails recipe={recipe} />
    </div>
  );
}

export default CategoryRecipe;
