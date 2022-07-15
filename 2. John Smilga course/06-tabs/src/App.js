import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [people, setPeople] = useState([]);
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => setPeople(data))
      .catch(err => console.log('err:', err))
      .finally(() => setIsLoading(false))
  }, []);

  if (isLoading) {
    return (
      <section className="section">
        <p className='loading'>Loading...</p>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {people.map((person, index) => {
            return <button
              key={person.id}
              className={`job-btn ${index === selectedPersonIndex ? 'active-btn' : 'false'}`}
              onClick={() => setSelectedPersonIndex(index)}>
              {person.company}
            </button>;
          })}
        </div>

        <article className="job-info">
          <h3>{people[selectedPersonIndex]?.title}</h3>
          <h4>{people[selectedPersonIndex]?.company}</h4>
          <p className="job-date">{people[selectedPersonIndex]?.dates}</p>
          {people[selectedPersonIndex]?.duties?.map((duty, index) => {
            return <div className="job-desc" key={index}>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          })}
        </article>
      </div>

      <button className="btn">more info</button>
    </section>
  );
}

export default App
