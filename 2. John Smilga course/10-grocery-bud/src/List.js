import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, onEditItem, onDeleteItem }) => {
  return (
    <div className="grocery-list">
      {items.map(item => {
        return (
          <article className="grocery-item" key={item.id}>
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <button type='button'
                className="edit-btn"
                onClick={() => onEditItem(item.id)}
              >
                <FaEdit />
              </button>
              <button type='button'
                className="delete-btn"
                onClick={() => onDeleteItem(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List
