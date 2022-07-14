import React, { useState, useEffect, useCallback } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';


function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function deleteTourHandler(id) {
    setTours(prev => prev.filter(tour => tour.id !== id));
  }

  const fetchData = useCallback(() => {
    setIsLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(data => setTours(data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <main>
      <Loading />
    </main>;
  }

  if (tours.length === 0) {
    return <main className='centered-text'>
      <h2>no tours left</h2>
      <button className='btn' onClick={fetchData}>refresh</button>
    </main>;
  }

  return <main>
    <Tours tours={tours} onDeleteTour={deleteTourHandler} />
  </main>;
}

export default App
