import './App.css';
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react'

import Home from "./pages/Homepage";
import Catalog from './pages/CatalogPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
