import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";

import Buttons from "./components/Button.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ButtonsPage from "./components/Buttonpage.js";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Route path="/buttons" component={ButtonsPage} />

        <Buttons />
        <Footer />
        <NavLink to="/" className="nav-link">
          <button>Back</button>
        </NavLink>
      </div>
    </Router>
  );
};

export default App;
