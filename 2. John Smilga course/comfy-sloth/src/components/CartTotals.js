import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { formatPrice } from '../utils/helpers';
import { shippingFee } from '../utils/constants';
import Modal from './Modal';
import { cartActions } from '../store/cartSlice';

const CartTotals = ({ totalSum }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModalHandler() {
    setIsModalOpen(false);
    dispatch(cartActions.clearCart());
    navigate('/');
  }

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal :
            <span>{formatPrice(totalSum)}</span>
          </h5>
          <p>
            shipping fee :
            <span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4>
            order total :
            <span>{formatPrice(totalSum + shippingFee)}</span>
          </h4>
        </article>
        <button className="btn" onClick={() => setIsModalOpen(true)}>complete order</button>
      </div>

      {isModalOpen && (
        <Modal closeClick={closeModalHandler}
          okClick={closeModalHandler}
        >
          <div className='message'>Your order will be sent to you.</div>
        </Modal>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  .message{
    font-size: 1.5rem;
  }
`;

export default CartTotals;
