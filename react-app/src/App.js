import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
