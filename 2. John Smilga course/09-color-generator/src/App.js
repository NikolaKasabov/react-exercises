import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [input, setInput] = useState('');
  const [hasError, setHasError] = useState(false);
  const [colors, setColors] = useState([]);

  function submitHandler(ev) {
    ev.preventDefault();

    try {
      setHasError(false);
      const color = new Values(input);
      const colors = color.all(10);
      setColors(colors);
    } catch (error) {
      setHasError(true);
      setColors([]);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input type="text"
            placeholder='#2d45fa'
            className={hasError ? 'error' : null}
            value={input}
            onChange={(ev) => setInput(ev.target.value)}
          />
          <button type="submit" className='btn'>submit</button>
        </form>
      </section>

      <section className="colors">
        {colors.map(color => {
          return <SingleColor key={color.hex} color={color} />
        })}
      </section>
    </>
  );
}

export default App
