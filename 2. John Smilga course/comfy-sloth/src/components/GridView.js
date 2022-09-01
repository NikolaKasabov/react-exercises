import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Product from './Product';

const GridView = () => {
  const { filteredProducts } = useSelector(store => store.products);

  if (filteredProducts.length === 0) {
    return <Wrapper>
      <h5 style={{ textTransform: 'none' }}>Sorry, no products matched your search.</h5>
    </Wrapper>;
  }

  return (
    <Wrapper>
      <div className="products-container">
        {filteredProducts.map(product => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
