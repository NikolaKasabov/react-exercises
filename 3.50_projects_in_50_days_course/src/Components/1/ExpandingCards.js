import { useState } from 'react';
import ExpandingCard from './ExpandingCard';

import './ExpandingCards.scss';

function ExpandingCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cards = [];

  for (let i = 0; i < 5; i++) {
    cards.push((
      <ExpandingCard
        key={i}
        isActive={activeCardIndex === i}
        index={i}
        onClick={cardClickHandler} />
    ));
  }

  function cardClickHandler(index) {
    console.log(index);
    setActiveCardIndex(index);
  }

  return (
    <div className='expandingCards'>
      {cards}
    </div>
  );
}


export default ExpandingCards;
