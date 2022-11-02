import './ProgressStepsCircle.scss';

function ProgressStepsCircle({ isActive, number }) {

  return (
    <div className={`progressStepsCircle ${isActive ? 'active' : ''}`}>
      {number}
    </div>
  );
}

export default ProgressStepsCircle;
