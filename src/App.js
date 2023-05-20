import './App.css';
import GraphComponent from './components/GraphComponent';
import PieChartComponent from './components/PieChart';
import BarGraph from './components/BarGraph';
//import SsidChartIcon from '@mui/icons-material/SsidChart';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <h1>Network Analysis</h1>
          {/* <SsidChartIcon size={48} /> */}
        </div>
        
        <div className='row mt-4'>
          <div className='col xs-12 md-16'>
            <h2 className="text-center">Line Graph</h2>
            <GraphComponent />
          </div>
          <div className='col xs-12 md-6' >
            <h2 className="text-center">Bar Graph</h2>
            <BarGraph />
          </div>
        </div>
      </div>

      <PieChartComponent />
    </div>
  );
}

export default App;