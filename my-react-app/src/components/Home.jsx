import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/Buttons" className="Button">
        Buttons
      </Link>

      <Link to="/Navbar" className="Navbar">
        Navbar
      </Link>

      <Link to="/Footer" className="Footer">
        Footer
      </Link>
    </div>
  );
};

export default Home;
