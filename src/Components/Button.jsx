import React from "react";

const Button = ({ text, bgColor, fontSize, padding, borderRadius }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        fontSize: fontSize + "px",
        padding: padding + "px",
        borderRadius: borderRadius + "px",
        border: "none",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;