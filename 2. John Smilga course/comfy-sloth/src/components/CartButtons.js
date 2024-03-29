import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { uiActions } from '../store/uiSlice';

const CartButtons = ({ closeSidebar }) => {
  const dispatch = useDispatch();
  const { productsAmount } = useSelector(store => store.cart);

  function clickHandler() {
    if (closeSidebar) {
      dispatch(uiActions.closeSidebar());
    }
  }

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='cart' className='cart-btn' onClick={clickHandler}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{productsAmount}</span>
        </span>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // align-items: center;
  // width: 225px;
  display: flex;
  justify-content: center;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
`;

export default CartButtons;
