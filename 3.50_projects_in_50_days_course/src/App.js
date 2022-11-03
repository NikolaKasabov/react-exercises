import './App.scss';
import ExpandingCards from './Components/1/ExpandingCards';
import ProgressSteps from './Components/2/ProgressSteps';
import HiddenSearchWidget from './Components/3/HiddenSearchWidget';

function App() {
  return (
    <div className="App">
      <h2>Expanding Cards</h2>
      <ExpandingCards />
      <hr />
      <h2>Progress Steps</h2>
      <ProgressSteps steps={5} />
      <hr />
      <h2>Hidden Search Widget</h2>
      <HiddenSearchWidget />
      <hr />
    </div>
  );
}

export default App;
