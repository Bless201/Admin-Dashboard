import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import Upload from './components/Upload';

function App() {
  return (
    <div className="App">
      <Router basename="/Admin-Dashboard">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

