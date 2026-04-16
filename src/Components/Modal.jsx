import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
        {children}
        <button onClick={onClose} style={{ marginTop: "10px" }}>Close</button>
      </div>
    </div>
  );
};

export default Modal;