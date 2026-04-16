
// Button
export const Button = ({ text, bgColor, fontSize, padding, borderRadius }) => {
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

// Card
export const Card = ({ title, description }) => {
  return (
    <div className="gen-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Alert
export const Alert = ({ message, color }) => {
  return (
    <div
      className="gen-alert"
      style={{ backgroundColor: color }}
    >
      {message}
    </div>
  );
};

// Input
export const Input = ({ placeholder, width }) => {
  return <input className="gen-input" placeholder={placeholder} style={{ width: width + "px" }} />;
};

// Toggle
export const Toggle = ({ isOn, handleToggle }) => {
  return (
    <label className="gen-toggle">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span>{isOn ? "ON" : "OFF"}</span>
    </label>
  );
};

// Modal
export const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className="gen-modal-overlay">
      <div className="gen-modal-content">
        {children}
        <button onClick={onClose} style={{ marginTop: "10px" }}>Close</button>
      </div>
    </div>
  );
};