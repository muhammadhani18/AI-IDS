import './App.css';
import Navbar from './components/navbar/Navbar';
import Graphs from './components/Graphs';

function App() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Navbar />
        
        <Graphs/>
      </div>
    </div>
  );
}

export default App;