import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to="/Buttons">
        <button>Buttons</button>
      </Link>
    </div>
  );
};

export default Button;
