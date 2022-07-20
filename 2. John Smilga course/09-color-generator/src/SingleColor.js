import React, { useState, useEffect } from 'react';

const SingleColor = ({ color }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => { 
        setShowMessage(false);
      }, 3000);
    }
  }, [showMessage]);
  
  function clickHandler() {
    navigator.clipboard.writeText('#' + color.hex);
    setShowMessage(true);
  }
  
  return (
    <article className={`color ${color.type === 'shade' ? 'color-light' : null}`}
      style={{ backgroundColor: '#' + color.hex }}
      onClick={clickHandler}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
      {showMessage && <p className="alert">copied to clipboard</p>}
    </article>
  );
}

export default SingleColor
