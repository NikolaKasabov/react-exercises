import './ExpandingCard.scss';

function ExpandingCard({isActive, index, onClick}) {

  return (
    <div className={`expandingCard ${isActive ? 'active' : ''}`}
      onClick={() => onClick(index)}
    >
      <h3>Lorem ipsum dolor sit amet.</h3>
    </div>
  );
}

export default ExpandingCard;
