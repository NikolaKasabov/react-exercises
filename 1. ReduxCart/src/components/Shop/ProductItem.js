import { useDispatch } from 'react-redux';

import { shoppingCartActions } from '../../store/shoppingCartSlice';
import { uiActions } from '../../store/uiSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;

  function addToCartHandler() {
    dispatch(shoppingCartActions.addProduct({ id, title, price, description }));
    dispatch(uiActions.addNotification({type: 'info', message: 'Product added to cart.'}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
