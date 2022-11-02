import './App.scss';
import ExpandingCards from './Components/1/ExpandingCards';
import ProgressSteps from './Components/2/ProgressSteps';

function App() {
  return (
    <div className="App">
      <h2>1. Expanding Cards</h2>
      <ExpandingCards />
      <hr />
      <h2>2. Progress Steps</h2>
      <ProgressSteps steps={5} />
      <hr />
    </div>
  );
}

export default App;
