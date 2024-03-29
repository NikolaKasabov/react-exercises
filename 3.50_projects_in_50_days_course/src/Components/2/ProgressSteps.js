import { useState } from 'react';

import './ProgressSteps.scss';
import ProgressStepsCircle from './ProgressStepsCircle';

function calcInnerLineWidth(steps, activeStep) {
  const lineSteps = steps - 1;
  const oneStepWidth = 100 / lineSteps;     // in percents
  return (activeStep - 1) * oneStepWidth + '%';
}

function ProgressSteps({ steps }) {
  const [activeStep, setActiveStep] = useState(1);

  const circles = [];

  for (let i = 1; i <= steps; i++) {
    circles.push((
      <ProgressStepsCircle key={i}
        isActive={i <= activeStep}
        number={i}
      />
    ));
  }

  function prevClickHandler() {
    setActiveStep(prevValue => prevValue <= 1 ? 1 : prevValue - 1);
  }

  function nextClickHandler() {
    setActiveStep(prevValue => prevValue >= steps ? steps : prevValue + 1);
  }

  return (
    <div className='progress-steps'>
      <div className='line-container'>
        <div className='line'>
          <div className='inner-line'
            style={{ width: calcInnerLineWidth(steps, activeStep) }}
          ></div>
        </div>

        <div className='circles-container'>
          {circles}
        </div>
      </div>

      <div className='buttons'>
        <button className='button'
          onClick={prevClickHandler}
          disabled={activeStep === 1}
        >prev</button>
        <button className='button'
          onClick={nextClickHandler}
          disabled={activeStep === steps}
        >next</button>
      </div>
    </div>
  );
}

export default ProgressSteps;
