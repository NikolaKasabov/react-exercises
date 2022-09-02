import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import { fetchSingleProductThunk, productsActions } from '../store/productsSlice';

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, isLoading, error } = useSelector(store => store.products);

  useEffect(() => {
    dispatch(fetchSingleProductThunk(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div className="page-100">
      <Loading />
    </div>;
  }

  if (error) {
    return <div className="page-100">
      <Error />
    </div>;
  }

  return (
    <Wrapper>
      <PageHero steps={['products', selectedProduct?.name]} />
      <div className="section section-center page">
        <Link to='/products' className='btn'>back to products</Link>
        <div className="product-center">
          <ProductImages images={selectedProduct?.images || []} />
          <section className="content">
            <h2>{selectedProduct?.name}</h2>
            <Stars reviews={selectedProduct?.reviews} stars={selectedProduct?.stars} />
            <h5 className="price">{formatPrice(selectedProduct?.price)}</h5>
            <p className="desc">{selectedProduct?.description}</p>

            <p className="info">
              <span>Available:</span>
              {selectedProduct?.stock === 0
                ? 'out of stock'
                : 'in stock'
              }
            </p>
            <p className="info">
              <span>SKU:</span>
              {selectedProduct?.id}
            </p>
            <p className="info">
              <span>Brand:</span>
              {selectedProduct?.company}
            </p>
            <hr />

            {selectedProduct?.stock > 0 && <AddToCart product={selectedProduct} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
