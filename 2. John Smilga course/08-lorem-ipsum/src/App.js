import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import data from './data';


function App() {
  const [texts, setTexts] = useState(data);
  const [amount, setAmount] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(0);

  function inputChangeHandler(ev) {
    setAmount(ev.target.value);
  }

  function submitHandler(ev) {
    ev.preventDefault();

    if (amount < 1) {
      setSelectedAmount(1);
    } else {
      setSelectedAmount(amount);
    }
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>

      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" onChange={inputChangeHandler} value={amount} />
        <button className="btn">generate</button>
      </form>

      <article className="lorem-text">
        {texts.slice(0, selectedAmount).map(text => {
          return <p key={nanoid()}>{text}</p>
        })}
      </article>
    </section>
  );
}

export default App;
