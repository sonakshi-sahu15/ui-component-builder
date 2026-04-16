import React from "react";

const Toggle = ({ isOn, handleToggle }) => {
  return (
    <label style={{ display: "inline-block", cursor: "pointer", margin: "10px 0" }}>
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span style={{ marginLeft: "8px" }}>{isOn ? "ON" : "OFF"}</span>
    </label>
  );
};

export default Toggle;