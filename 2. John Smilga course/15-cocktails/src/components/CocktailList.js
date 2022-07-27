import React, { useContext } from 'react';
import { AppContext } from '../context';
import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
  const { cocktails, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <Loading />;
  }

  if (cocktails.length === 0) {
    return <h2 className="section-title">no cocktails matched your search criteria</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(cocktail => {
          return <Cocktail key={cocktail.idDrink} cocktail={cocktail} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;