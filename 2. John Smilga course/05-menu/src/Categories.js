import React from 'react';

const Categories = (props) => {
  return <div className="btn-container">
    {props.categories.map(category => {
      return <button className="filter-btn"
        key={category}
        onClick={() => props.onCategorySelect(category)}>
        {category}
      </button>
    })}
  </div>;
};

export default Categories;
