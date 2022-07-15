import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ question }) => {
  const [isShownInfo, setIsShownInfo] = useState(true);

  function toggleInfoHandler() {
    setIsShownInfo(prev => !prev);
  }

  return <article className="question">
    <header>
      <h4>{question.title}</h4>
      <button className="btn" onClick={toggleInfoHandler}>
        {isShownInfo
          ? <AiOutlineMinus />
          : <AiOutlinePlus />
        }
      </button>
    </header>

    {isShownInfo && <p>
      {question.info}
    </p>}
  </article>;
};

export default Question;
