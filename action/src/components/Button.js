// src/components/Button.js


import PropTypes from "prop-types";
import React, { useState } from "react";

function Button({ label, type = "Default", status = "Default", size = "md", handleClick, icon, display }) {
  const [hovered, setHovered] = useState(false);
  
  let scale = 1;
  if (size === "Default") scale = 28 / 16;
  if (size === "Small") scale = 24 / 16;
  if (size === "X-Small") scale = 22 / 16;

  let backgroundColor = "";
  let color = "";
  let iconColor = "";

  switch (type) {
    case "Default":
      backgroundColor = hovered ? "#e5efe7" : "#f1eded";
      color = "green";
      iconColor = "green";
      break;
    case "Neutral":
      backgroundColor = hovered ? "#e6e6e6" : "#f1eded";
      color = "black";
      iconColor = "black";
      break;
    case "Reverse":
      backgroundColor = hovered ? "#887c7ca1" : "black";
      color = "white";
      iconColor = "white";
      break;
    default:
      backgroundColor = "#f1eded"; 
      color = "green"; 
      iconColor = "green"; 
  }

  switch (status) {
    case "Disabled":
      
      if (type === "Default") {
      backgroundColor = "#a7a7a752";
      color = "#07ca0052";
      iconColor = "#07ca0052";
      } 
      else if (type === "Neutral") {
        backgroundColor = "#a7a7a752"; 
        color = "#29252552";
        iconColor = "#29252552";

      } 
      else if (type === "Reverse") {
        backgroundColor = "black"; 
        color = "#887c7c6b";
        iconColor = "#887c7c6b";
      }
      break;
    default:
      
      break;
  }

  const style = {
    backgroundColor,
    color,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    display: "flex",
    alignItems: "center",
  };

  return (
    <button 
    onClick={handleClick} 
    style={style} 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      {(display === "iconOnly" || display === "iconWithText") && icon && (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={iconColor} viewBox="0 0 256 256">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
        </svg>
      )}
      {(display === "textOnly" || display === "iconWithText") && <span>{label}</span>}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["Default", "Neutral", "Reverse"]),
  status: PropTypes.oneOf(["Default", "Disabled"]),
  size: PropTypes.oneOf(["Default", "Small", "X-Small"]),
  icon: PropTypes.bool,
  label: PropTypes.string,
  handleClick: PropTypes.func,
  display: PropTypes.oneOf(["textOnly", "iconOnly", "iconWithText"]),
};

export default Button;
