import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import './RandomRecipe.scss';
import Loader from '../Loader/Loader';

function RandomRecipe() {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getRecipe() {
    setIsLoading(true);
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(data => {
        // console.log(data);
        setRecipe(data?.data?.meals[0]);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getRecipe();
  }, []);

  if (isLoading) {
    return (
      <div className='random-recipe'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='random-recipe'>
      <button className='get-another-recipe-btn' onClick={getRecipe}>View another recipe</button>
      <RecipeDetails recipe={recipe} />
    </div>
  );
}

export default RandomRecipe;
