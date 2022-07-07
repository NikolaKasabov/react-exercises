import { useDispatch } from 'react-redux';
import { shoppingCartActions } from '../../store/shoppingCartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  function decreaseHandler() {
    dispatch(shoppingCartActions.decreaseProductQuantity(id));
  }

  function increaseHandler() {
    dispatch(shoppingCartActions.increaseProductQuantity(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
