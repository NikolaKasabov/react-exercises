import React, { useState } from 'react';

const Tour = ({ tour, onDeleteTour }) => {
  const [isFullText, setIsFullText] = useState(false);

  function readMoreHandler() {
    setIsFullText(prev => !prev);
  }

  return <li className='single-tour'>
    <img src={tour.image} alt="" />

    <footer className="footer">
      <div className="tour-info">
        <h4>{tour.name}</h4>
        <div className="tour-price">
          ${tour.price}
        </div>
      </div>
      <div>
        {isFullText ? tour.info : `${tour.info.slice(0, 200).trim()}...`}
        <button onClick={readMoreHandler} className='.delete-btn'>{isFullText ? 'show less' : 'read more'}</button>
      </div>
      <button onClick={() => onDeleteTour(tour.id)} className="delete-btn">not interested</button>
    </footer>
  </li>;
};

export default Tour;
