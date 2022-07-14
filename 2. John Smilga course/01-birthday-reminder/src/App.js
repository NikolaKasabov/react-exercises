import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  function clearAllHandler() {
    setPeople([]);
  }

  return <main>
    <section className="container">
      <h3>0 birthdays today</h3>
      <List people={people} />
      <button onClick={clearAllHandler}>clear all</button>
    </section>
  </main>;
}

export default App;
