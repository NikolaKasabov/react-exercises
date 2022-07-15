import React from 'react';

const Menu = (props) => {
  return <div className="section-center">
    {props.meals.map(meal => {
      return <article className="menu-item" key={meal.id}>
        <img className='photo' src={meal.img} alt={meal.title} />

        <div className="item-info">
          <header>
            <h4>{meal.title}</h4>
            <h4 className='price'>${meal.price}</h4>
          </header>

          <p className="item-text">{meal.desc}</p>
        </div>
      </article>
    })}
  </div>;
};

export default Menu;
