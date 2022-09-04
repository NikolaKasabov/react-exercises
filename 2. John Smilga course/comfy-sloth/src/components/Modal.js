import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

function Modal({ children, okClick, closeClick }) {

  function overlayClickHandler() {
    console.log('overlay clicked');
    if (closeClick) {
      closeClick();
    }
  }

  function okClickHandler() {
    if (okClick) {
      okClick();
    }
  }

  function closeClickHandler() {
    if (closeClick) {
      closeClick();
    }
  }

  return (
    <Wrapper onClick={overlayClickHandler}>
      <div className="content" onClick={ev => ev.stopPropagation()}>
        <button className="close-btn" onClick={closeClickHandler}>
          <FaTimes />
        </button>

        <main>
          {children}
        </main>

        <footer>
          {okClick && <button className="btn" onClick={okClickHandler}>ok</button>}
          {/* {closeClick && <button className="btn" onClick={closeClickHandler}>cancel</button>} */}
        </footer>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    position: relative;
    padding: 2.5rem 2rem 2rem 2rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
  }

  footer {
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    margin-top: 1rem;
  }

  .btn {
    max-width: 150px;
  }
`;

export default Modal;
