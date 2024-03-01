import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Button from "./components/Button.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Button />
        <Footer />
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
