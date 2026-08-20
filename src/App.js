import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
