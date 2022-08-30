import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { getUniqueValues, formatPrice } from '../utils/helpers';
import { productsActions } from '../store/productsSlice';

const Filters = () => {
  const dispatch = useDispatch();
  const {
    allCategories,
    category,
    allCompanies,
    company,
    allColors,
    color,
  } = useSelector(store => store.products.filters);

  function filterChangeHandler(ev) {
    let { name, value, type } = ev.target;
    if (type === 'button') {
      value = ev.target.dataset.value;
    }
    dispatch(productsActions.changeFilter({ name, value }));
  }

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={ev => ev.preventDefault()}>
          {/* input search start */}
          <div className="form-control">
            <input type="text" name='text' className="search-input" placeholder='search' onChange={filterChangeHandler} />
          </div>
          {/* input search end */}

          {/* category start */}
          <div className="form-control">
            <h5>category</h5>
            {allCategories.map(c => {
              return (
                <button type='button'
                  key={c}
                  name='category'
                  className={c === category ? 'active' : ''}
                  data-value={c}
                  onClick={filterChangeHandler}
                >
                  {c}
                </button>
              );
            })}
          </div>
          {/* category end */}

          {/* company start */}
          <div className="form-control">
            <h5>company</h5>
            <select name="company" value={company} className="company" onChange={filterChangeHandler}>
              {allCompanies.map(c => {
                return (
                  <option key={c} value={c}>{c}</option>
                );
              })}
            </select>
          </div>
          {/* company end */}

          {/* colors start */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {allColors.map(c => {
                if (c === 'all') {
                  return (
                    <button type='button'
                      name='color'
                      data-value={c}
                      className={`all-btn ${c === color ? 'active' : ''}`}
                      onClick={filterChangeHandler}
                    >
                      all
                    </button>
                  );
                } else {
                  return (
                    <button type='button'
                      name='color'
                      data-value={c}
                      className={`color-btn ${c === color ? 'active' : ''}`}
                      style={{ backgroundColor: c }}
                      onClick={filterChangeHandler}
                    >
                      {c === color && <FaCheck />}
                    </button>
                  );
                }
              })}
            </div>
          </div>
          {/* colors end */}

          <div className="form-control"></div>
          <div className="form-control"></div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters;
