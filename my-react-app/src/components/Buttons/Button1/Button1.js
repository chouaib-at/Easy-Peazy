import React from "react";
import "./Button1.css";

const Button1 = () => {
  const handleButtonClick = () => {
    // Replace 'your-github-url' with the actual GitHub URL you want to navigate to
    window.location.href = "https://github.com/your-username/your-repository";
  };

  return (
    <div className="buttons-container">
      <button className="button-arounder" onClick={handleButtonClick}>
        Hover Me
      </button>
    </div>
  );
};

export default Button1;
