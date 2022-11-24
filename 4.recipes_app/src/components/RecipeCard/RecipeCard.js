import './RecipeCard.scss';

function RecipeCard({recipe, onClick}) {
  return (
    <div className='recipe-card' onClick={onClick}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strMeal}</p>
    </div>
  );
}

export default RecipeCard;
