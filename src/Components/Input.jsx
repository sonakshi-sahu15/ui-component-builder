import React from "react";

const Input = ({ placeholder, width }) => {
  return <input style={{ padding: "8px", width: width + "px" }} placeholder={placeholder} />;
};

export default Input;