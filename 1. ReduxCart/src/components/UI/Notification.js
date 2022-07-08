import { useEffect } from 'react';
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiSlice';

import classes from './Notification.module.css';

function Notification({notification}) {
  const dispatch = useDispatch();

  function removeNotification() {
    dispatch(uiActions.removeNotification());
  };

  useEffect(() => {
    console.log('in useEffect');
    const timer = setTimeout(() => {
      removeNotification();
    }, 5000);

    return () => {
      clearInterval(timer);
    }
  }, [notification]);

  return <div className={`${classes.container} ${notification.type ? classes[notification.type] : classes.info}`}>
    <div className={classes.wrapper}>
      <p>{notification.message}</p>
      <button onClick={removeNotification} className={classes.btn}>
        <MdClose className={classes.icon} />
      </button>
    </div>
  </div>;
}

export default Notification;
