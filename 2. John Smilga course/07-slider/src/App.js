import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import { useCallback } from 'react';


function App() {
  const [people, setPeople] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  function getClass(currentIndex) {
    if (currentIndex === activeIndex) {
      return 'activeSlide';
    }

    if ((currentIndex === activeIndex - 1)
      || (activeIndex === 0 && currentIndex === (people.length - 1))) {
      return 'lastSlide';
    }

    return 'nextSlide';
  }

  const nextSlideHandler = useCallback(() => {
    setActiveIndex(prev => {
      if (prev === people.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, []);

  function prevSlideHandler() {
    setActiveIndex(prev => {
      if (prev === 0) {
        return people.length - 1;
      } else {
        return prev - 1;
      }
    });
  }

  useEffect(() => {
    console.log('in useEffect');
    const interval = setInterval(() => {
      nextSlideHandler();
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [nextSlideHandler, activeIndex]);


  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, index) => {
          return (
            <article className={getClass(index)} key={person.id}>
              <img src={person.image} alt={person.name} className='person-img' />
              <h4>{person.name}</h4>
              <p className="title">{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}

        <button className="prev" onClick={prevSlideHandler}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlideHandler}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
