import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { productsActions } from './store/productsSlice';

const availableProducts = [
  {
    id: 1,
    title: 'Product 1',
    price: 6,
    description: 'Nice product.'
  },
  {
    id: 2,
    title: 'Product 2',
    price: 16,
    description: 'Better product.'
  },
  {
    id: 3,
    title: 'Product 3',
    price: 26,
    description: 'The best product.'
  },
];

function App() {
  const dispatch = useDispatch();
  const shoppingCartIsShown = useSelector(state => state.shoppingCart.isShown);

  // add the available products to the store
  useEffect(() => {
    dispatch(productsActions.saveProducts(availableProducts));
  }, [dispatch]);

  return (
    <Layout>
      {shoppingCartIsShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
