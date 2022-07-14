import React, { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function selectRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

const Review = () => {
  const [people, setPeople] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState(0);

  function selectPreviousHandler() {
    setSelectedIndex(prev => {
      if (prev === 0) {
        return people.length - 1;
      } else {
        return prev - 1;
      }
    });
  }

  function selectNextHandler() {
    setSelectedIndex(prev => {
      if (prev === people.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  function selectRandomHandler() {
    const index = selectRandomIndex(people.length);
    // check if the random index is the same as the selected index
    if (index === selectedIndex) {
      selectRandomHandler();
    } else {
      setSelectedIndex(index);
    }
  }

  return <section className="container">
    <div className="title">
      <h2>our reviews</h2>
      <div className='underline'></div>
    </div>

    <article className="review">
      <div className="img-container">
        <img className='person-img' src={people[selectedIndex].image} alt={people[selectedIndex].name} />
        <span className="quote-icon"><FaQuoteRight /></span>
      </div>
      <h4 className="author">{people[selectedIndex].name}</h4>
      <p className="job">{people[selectedIndex].job}</p>
      <p className="info">{people[selectedIndex].text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={selectPreviousHandler}><FaChevronLeft /></button>
        <button className="next-btn" onClick={selectNextHandler}><FaChevronRight /></button>
      </div>
      <button className="random-btn" onClick={selectRandomHandler}>surprise me</button>
    </article>
  </section>;
};

export default Review;
