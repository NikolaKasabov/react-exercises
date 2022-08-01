import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { formValues, changeFormHandler, submitHandler } = useGlobalContext();

  return (
    <section className="quiz quiz-small">
      <form className="setup-form" onSubmit={submitHandler}>
        <h2>setup quiz</h2>
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input type="number"
            className='form-input'
            name='amount'
            id='amount'
            min='1'
            max='50'
            value={formValues.amount}
            onChange={changeFormHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select type="number"
            className='form-input'
            name='category'
            id='category'
            value={formValues.category}
            onChange={changeFormHandler}
          >
            <option value='sports'>sports</option>
            <option value='history'>history</option>
            <option value='politics'>politics</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty">select difficulty</label>
          <select type="number"
            className='form-input'
            name='difficulty'
            id='difficulty'
            value={formValues.difficulty}
            onChange={changeFormHandler}
          >
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
        </div>

        <button className="submit-btn">start</button>
      </form>
    </section>
  );
}

export default SetupForm;
