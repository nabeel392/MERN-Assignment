import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DataList from './DataList'

function Home() {
 

  return (
    <div>
      <h1>React & Node.js Pagination</h1>
      <Link to="/data">
        <button>Get Data</button>
      </Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<DataList />} />
      </Routes>
    </Router>
  );
}

export default App
