import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/nav/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
