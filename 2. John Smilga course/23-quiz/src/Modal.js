import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { showModal, closeModal, questions, correctAnswers } = useGlobalContext();

  const correctAnswersPercentage = ((correctAnswers / questions.length) * 100).toFixed(0);

  return (
    <div className={`modal-container ${showModal ? 'isOpen' : ''}`}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>You answered {correctAnswersPercentage}% of the questions correctly.</p>
        <button className="close-btn" onClick={closeModal}>play again</button>
      </div>
    </div>
  );
}

export default Modal;
