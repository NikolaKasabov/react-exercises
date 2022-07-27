import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function getIngredients(cocktail) {
  const ingredients = [];
  for (const key in cocktail) {
    if (key.startsWith('strIngredient') && (cocktail[key] !== null)) {
      ingredients.push(cocktail[key]);
    }
  }
  return ingredients;
}

const SingleCocktail = () => {
  const { productId } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(url + productId)
      .then(res => res.json())
      .then(data => {
        const cocktail = data.drinks && data.drinks[0];
        setCocktail(cocktail);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  return (
    <section className="section cocktail-section">
      <Link to='/' className='btn btn-primary'>back home</Link>
      <h2 className="section-title">{cocktail.strDrink}</h2>

      <div className="drink">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {cocktail.strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {cocktail.strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {cocktail.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {cocktail.strGlass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {cocktail.strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {getIngredients(cocktail).map((ingredient, index) => {
              return <span key={index}>{ingredient}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail;
