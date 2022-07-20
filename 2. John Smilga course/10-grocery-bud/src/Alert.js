import React, { useEffect } from 'react';

const Alert = ({ message, type, onCloseAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => { 
      onCloseAlert();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    }
  }, [message, onCloseAlert]);

  return <p className={`alert alert-${type}`}>{message}</p>;
}

export default Alert
