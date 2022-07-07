import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartActions } from '../../store/shoppingCartSlice';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const shoppingCartProducts = useSelector(state => state.shoppingCart.products);

  const totalProductsInCart = shoppingCartProducts.reduce((acc, cur) => {
    acc += cur.quantity;
    return acc;
  }, 0);

  function clickHandler() {
    dispatch(shoppingCartActions.toggleIsShown());
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalProductsInCart}</span>
    </button>
  );
};

export default CartButton;
