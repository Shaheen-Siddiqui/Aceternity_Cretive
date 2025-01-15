import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { VortexDemo } from "./page/Homepage";
import { CustomForm } from "./page/Query";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VortexDemo />} />
        <Route path="/query" element={<CustomForm />} />
      </Routes>
    </Router>
  );
}

export default App;
