import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import List from './List';
import Alert from './Alert';

function getItems() {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  return items;
}

function App() {
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItemId, setEditedItemId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    setItems(getItems());
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  function submitHandler(ev) {
    ev.preventDefault();

    if (!itemName) {
      setAlert({ show: true, message: 'please enter value', type: 'danger' });
      return;
    }

    if (isEditing) {
      setItems(items => {
        return items.map(item => {
          if (item.id === editedItemId) {
            return { ...item, title: itemName };
          } else {
            return item;
          }
        });
      });

      setIsEditing(false);
      setEditedItemId(null);
      setAlert({ show: true, message: 'value changed', type: 'success' });
    } else {
      setItems(items => ([
        ...items,
        { id: nanoid(), title: itemName }
      ]));
      setAlert({ show: true, message: 'item added to the list', type: 'success' });
    }

    setItemName('');
  }

  function editItemHandler(itemId) {
    setIsEditing(true);
    const editedItem = items.find(item => item.id === itemId);
    setItemName(editedItem.title);
    setEditedItemId(itemId);
  }

  function deleteItemHandler(itemId) {
    setItems(items => {
      return items.filter(item => item.id !== itemId);
    });
    setAlert({ show: true, message: 'item removed', type: 'danger' });
  }

  function clearItemsHandler() {
    setItems([]);
  }

  function closeAlertHandler() {
    setAlert({ show: false, message: '', type: '' });
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandler}>
        {alert.show && <Alert {...alert} onCloseAlert={closeAlertHandler} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text"
            className="grocery"
            placeholder='e.g. eggs'
            value={itemName}
            onChange={(ev) => setItemName(ev.target.value)}
          />
          <button className="submit-btn" type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      <div className="grocery-container">
        <List items={items} onEditItem={editItemHandler} onDeleteItem={deleteItemHandler} />
        <button className="clear-btn" onClick={clearItemsHandler}>clear items</button>
      </div>
    </section>
  );
}

export default App
