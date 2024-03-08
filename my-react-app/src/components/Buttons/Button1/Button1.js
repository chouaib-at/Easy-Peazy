import React from "react";
import "./Button1.css";

const Button1 = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://github.com/chouaib-at/Easy-Peazy/tree/master/my-react-app/src/components/Buttons/Button1";
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
