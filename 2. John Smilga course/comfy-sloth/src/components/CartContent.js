import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import { cartActions } from '../store/cartSlice';

const CartContent = () => {
  const dispatch = useDispatch();
  const { products, totalSum } = useSelector(store => store.cart);

  function clearCartHandler() {
    dispatch(cartActions.clearCart());
  }

  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {products.map(product => {
        return <CartItem key={product.id} {...product} />;
      })}
      <hr />
      <div className="link-container">
        <Link to='/products' className='link-btn'>continue shopping</Link>
        <button className="link-btn clear-btn"
          type='button'
          onClick={clearCartHandler}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals totalSum={totalSum} />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

export default CartContent;
