import React from "react";

const Alert = ({ message, color }) => {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
        color: "#fff",
        borderRadius: "5px",
        margin: "10px 0",
      }}
    >
      {message}
    </div>
  );
};

export default Alert;