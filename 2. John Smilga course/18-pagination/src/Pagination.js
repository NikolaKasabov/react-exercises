import React, { useEffect, useState } from 'react';

function Pagination({ pages, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesArr = Array(pages).fill(null);

  function prevClickHandler() {
    setCurrentPage(value => {
      if (value === 1) {
        return pages;
      } else {
        return value - 1;
      }
    });
  }

  function pageClickHandler(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function nextClickHandler() {
    setCurrentPage(value => {
      if (value === pages) {
        return 1;
      } else {
        return value + 1;
      }
    });
  }

  useEffect(() => { 
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  return (
    <div className="btn-container">
      <button className="prev-btn" onClick={prevClickHandler}>prev</button>

      {pagesArr.map((item, index) => {
        return (
          <button
            key={index}
            className={`page-btn ${currentPage === (index + 1) ? 'active-btn' : ''}`}
            onClick={() => pageClickHandler(index + 1)}>
            {index + 1}
          </button>
        );
      })}

      <button className="next-btn" onClick={nextClickHandler}>next</button>
    </div>
  );
}

export default Pagination;
