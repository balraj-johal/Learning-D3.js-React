import logo from './logo.svg';
import './App.css';
import Chart from './Chart.js';

function App() {
  const testData = [100, 2, 3, 4, 2, 10, 6, 7, 10, 9];
  const width = window.innerWidth - 30;
  const height = 500;
  const color = 'tomato';

  return (
    <div className="App">
      <Chart data={testData} width={width} height={height} color={color}></Chart>
    </div>
  );
}

export default App;
