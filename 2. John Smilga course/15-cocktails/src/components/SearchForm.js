import React, { useContext } from 'react';
import { AppContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useContext(AppContext);

  function inputChangeHandler(ev) {
    setSearchTerm(ev.target.value);
  }

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text"
            id='name'
            onChange={inputChangeHandler}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
