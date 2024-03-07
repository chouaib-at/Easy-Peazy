import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Buttons" element={<Button />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
