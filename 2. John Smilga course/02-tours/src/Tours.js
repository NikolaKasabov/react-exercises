import React from 'react';
import Tour from './Tour';

const Tours = (props) => {

  return <>
    <h2 className='centered-text'>Our Tours</h2>
    <div className="underline"></div>
    <ul>
      {props.tours.map(tour => {
        return <Tour tour={tour} onDeleteTour={props.onDeleteTour} key={tour.id} />
      })}
    </ul>
  </>;
};

export default Tours;
