import './RecipeDetails.scss';

function getIngredients(recipe) {
  const ingredients = [];
  for (let key in recipe) {
    if (key.startsWith('strIngredient') && recipe[key]) {
      ingredients.push(recipe[key]);
    }
  }
  return ingredients;
}

function RecipeDetails({ recipe }) {
  return (
    <div className='recipe-details'>
      <h2 className='recipe-title'>{recipe?.strMeal}</h2>

      <div className='image-and-ingredients-container'>
        <div className='image'>
          <img src={recipe?.strMealThumb} alt={recipe?.strMeal} />
        </div>
        <div className='ingredients'>
          <h3>Ingredients:</h3>
          <ul>
            {getIngredients(recipe).map((ingredient, index) => (
              <li key={index}> - {ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      {recipe?.strYoutube && (
        <div className='video'>
          <h3>Video:</h3>
          <a href={recipe?.strYoutube} target='blank'>{recipe?.strYoutube}</a>
        </div>
      )}

      <div className='instructions-container'>
        <h3>Instructions:</h3>
        <p>{recipe?.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
