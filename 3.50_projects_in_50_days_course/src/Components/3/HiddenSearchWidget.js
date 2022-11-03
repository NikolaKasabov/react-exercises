import { useRef, useState } from 'react';
import { FcSearch } from "react-icons/fc";

import './HiddenSearchWidget.scss';

function HiddenSearchWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  function searchClickHandler() {
    setIsOpen(prev => {
      if (!prev) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
      return !prev;
    });
  }

  function submitHandler(ev) {
    ev.preventDefault();
    setIsOpen(false);
    inputRef.current.value = '';
  }

  return (
    <div className={`hidden-search-widget ${isOpen ? 'open' : ''}`}>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='search...' ref={inputRef} />
        <button type='button'>
          <FcSearch className='icon' onClick={searchClickHandler} />
        </button>
      </form>
    </div>
  );
}

export default HiddenSearchWidget;
