import React from 'react';
import { useSelector } from 'react-redux';

import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { productsView } = useSelector(store => store.products.sort);

  if (productsView === 'grid') {
    return <GridView />;
  } else {
    return <ListView />;
  }
}

export default ProductList;
