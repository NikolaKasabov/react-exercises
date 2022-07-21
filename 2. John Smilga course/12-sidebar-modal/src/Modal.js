import React from 'react';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { appContext } from './context';

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(appContext);

  return (
    <div className={`modal-overlay ${isModalOpen ? 'show-modal' : ''}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}><FaTimes /></button>
      </div>
    </div>
  );
}

export default Modal;
