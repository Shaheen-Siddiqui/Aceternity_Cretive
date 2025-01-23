import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { VortexDemo } from "./page/Homepage";
import { CustomForm } from "./page/Query"
import { Disclaimer } from "./page/disclaimer"
import { PrivacyPolicy } from "./page/privacyPolicy"
import { TermsAndCondition } from "./page/termAndCondition"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VortexDemo />} />
        <Route path="/query" element={<CustomForm />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
      </Routes>
    </Router>
  );
}

export default App;