import { useState } from 'react';

import './ProgressSteps.scss';

function ProgressSteps({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className='progressSteps'>
      <div className="line"></div>
    </div>
  );
}

export default ProgressSteps;
