import './App.css';
import GraphComponent from './components/GraphComponent';
import PieChartComponent from './components/PieChart';
import BarGraph from './components/BarGraph';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <h1>Network Analysis</h1>
            {/* <SsidChart size={48} /> */}
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12} md={6}>
            <h2 className="text-center">Line Graph</h2>
            <GraphComponent />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text-center">Bar Graph</h2>
            <BarGraph />
          </Col>
        </Row>
      </Container>

      <PieChartComponent />
    </div>
  );
}

export default App;