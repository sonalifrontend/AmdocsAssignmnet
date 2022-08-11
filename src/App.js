import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ReportList from './reportList/reportList';
import OutlinedCard from './card/card'

function App() {
  return (
    <>
    <div className="App">
      <h1 className="headerPart">Amdocs Assignment</h1>
      <Router>
      <div>
        <ul className="rourterTab">
          
          <li>
            <Link to="/card">Panel Dashboard</Link>
          </li>
          <li>
            <Link to="/">Reports</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
         <Routes>
          <Route path="/card" element={<OutlinedCard/>} />
          <Route path="/" element={<ReportList/>} />
        </Routes>
      </div>
    </Router>
      
    </div>
  </>
  );
}

export default App;
