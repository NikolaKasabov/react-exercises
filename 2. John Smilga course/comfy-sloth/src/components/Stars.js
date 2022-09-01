import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { getStarsAsArray } from '../utils/helpers';

const Stars = ({stars, reviews}) => {
  return (
    <Wrapper>
      <div className="stars">
        {getStarsAsArray(stars).map((num, index) => {
          if (num === 1) {
            return <span key={index}><BsStarFill /></span>;
          } else if (num === 0) {
            return <span key={index}><BsStar /></span>;
          } else {
            return <span key={index}><BsStarHalf /></span>;
          }
        })}
      </div>

      <p className="reviews">
        {`(${reviews}) customer reviews`}
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;

export default Stars;
