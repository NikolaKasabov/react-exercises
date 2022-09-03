import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartContent, PageHero } from '../components';

const CartPage = () => {
  const { products } = useSelector(store => store.cart);

  if (products.length === 0) {
    return (
      <Wrapper className='page-100'>
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>fill it</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <PageHero steps={['cart']} />
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
