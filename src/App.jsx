import React, { useState } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Alert from "./Components/Alert";
import Input from "./Components/Input";
import Toggle from "./Components/Toggle";
import Modal from "./Components/Modal";
import "./App.css";

const App = () => {
  const components = ["Button", "Card", "Alert", "Input", "Toggle", "Modal"];
  const [selectedComponent, setSelectedComponent] = useState("Button");
  const [darkMode, setDarkMode] = useState(false);

  // Button States
  const [btnText, setBtnText] = useState("Click Me");
  const [btnColor, setBtnColor] = useState("#667eea");
  const [btnSize, setBtnSize] = useState(16);
  const [btnPadding, setBtnPadding] = useState(10);
  const [btnRadius, setBtnRadius] = useState(8);

  // Card States
  const [cardTitle, setCardTitle] = useState("Card Title");
  const [cardDesc, setCardDesc] = useState("Card description here.");

  // Alert States
  const [alertMsg, setAlertMsg] = useState("This is an alert message");
  const [alertColor, setAlertColor] = useState("red");

  // Input States
  const [inputPlaceholder, setInputPlaceholder] = useState("Enter text");
  const [inputWidth, setInputWidth] = useState(200);

  // Toggle / Modal
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Copy Code
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    alert("Code copied!");
  };





  // Download JSX
  const downloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([generateCode()], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedComponent}.jsx`;
    document.body.appendChild(element);
    element.click();
  };

  // Reset Component
  const resetComponent = () => {
    switch (selectedComponent) {
      case "Button":
        setBtnText("Click Me");
        setBtnColor("#667eea");
        setBtnSize(16);
        setBtnPadding(10);
        setBtnRadius(8);
        break;
      case "Card":
        setCardTitle("Card Title");
        setCardDesc("Card description here.");
        break;
      case "Alert":
        setAlertMsg("This is an alert!");
        setAlertColor("red");
        break;
      case "Input":
        setInputPlaceholder("Enter text");
        setInputWidth(200);
        break;
      case "Toggle":
        setToggle(false);
        break;
      case "Modal":
        setShowModal(false);
        break;
      default:
        break;
    }
  };

  // Render Controls
  const renderControls = () => {
    switch (selectedComponent) {
      case "Button":
        return (
          <>
            <label>Text:</label>
            <input className="input-field" value={btnText} onChange={e => setBtnText(e.target.value)} />
            <label>Background Color:</label>
            <input type="color" className="input-field" value={btnColor} onChange={e => setBtnColor(e.target.value)} />
            <label>Font Size (px):</label>
            <input type="number" className="input-field" value={btnSize} onChange={e => setBtnSize(e.target.value)} />
            <label>Padding (px):</label>
            <input type="number" className="input-field" value={btnPadding} onChange={e => setBtnPadding(e.target.value)} />
            <label>Border Radius (px):</label>
            <input type="number" className="input-field" value={btnRadius} onChange={e => setBtnRadius(e.target.value)} />
          </>
        );
      case "Card":
        return (
          <>
            <label>Title:</label>
            <input className="input-field" value={cardTitle} onChange={e => setCardTitle(e.target.value)} />
            <label>Description:</label>
            <input className="input-field" value={cardDesc} onChange={e => setCardDesc(e.target.value)} />
          </>
        );
      case "Alert":
        return (
          <>
            <label>Message:</label>
            <input className="input-field"  value={alertMsg} onChange={e => setAlertMsg(e.target.value)} />
            <label>Type:</label>
            <select className="input-field" value={alertColor} onChange={e => setAlertColor(e.target.value)}>
              <option value="red">❌ Error</option>
              <option value="green">✅ Success</option>
              <option value="orange">⚠️ Warning</option>
            </select>
          </>
        );
      case "Input":
        return (
          <>
            <label>Placeholder:</label>
            <input className="input-field" value={inputPlaceholder} onChange={e => setInputPlaceholder(e.target.value)} />
            <label>Width (px):</label>
            <input type="number" className="input-field" value={inputWidth} onChange={e => setInputWidth(e.target.value)} />
          </>
        );
      case "Toggle":
        return (
          <>
            <label>Status:</label>
            <Toggle isOn={toggle} handleToggle={() => setToggle(!toggle)} />
          </>
        );
      case "Modal":
        return (
          <>
            <button className="primary-btn" onClick={() => setShowModal(true)}>Show Modal</button>
          </>
        );
      default:
        return null;
    }
  };

  // Render Preview
  const renderPreview = () => {
    switch (selectedComponent) {
      case "Button":
        return <Button text={btnText} bgColor={btnColor} fontSize={btnSize} padding={btnPadding} borderRadius={btnRadius} />;
      case "Card":
        return <Card title={cardTitle} description={cardDesc} />;
      case "Alert":
        return <Alert message={alertMsg} color={alertColor} />;
      case "Input":
        return <Input placeholder={inputPlaceholder} width={inputWidth} />;
      case "Toggle":
        return <Toggle isOn={toggle} handleToggle={() => setToggle(!toggle)} />;
      case "Modal":
        return <Modal show={showModal} onClose={() => setShowModal(false)}>Modal Content</Modal>;
      default:
        return null;
    }
  };

  // Generate JSX code
  const generateCode = () => {
    switch (selectedComponent) {
      case "Button":
        return `<Button text="${btnText}" bgColor="${btnColor}" fontSize={${btnSize}} padding={${btnPadding}} borderRadius={${btnRadius}} />`;
      case "Card":
        return `<Card title="${cardTitle}" description="${cardDesc}" />`;
      case "Alert":
        return `<Alert message="${alertMsg}" color="${alertColor}" />`;
      case "Input":
        return `<Input placeholder="${inputPlaceholder}" width={${inputWidth}} />`;
      case "Toggle":
        return `<Toggle isOn={${toggle}} handleToggle={() => {}} />`;
      case "Modal":
        return `<Modal show={${showModal}} onClose={() => {}}>Modal Content</Modal>`;
      default:
        return "";
    }
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      {/* Left Panel */}
      <div className="left-panel">
        <h2>Components</h2>
        <select className="input-field" value={selectedComponent} onChange={e => setSelectedComponent(e.target.value)}>
          {components.map(comp => <option key={comp} value={comp}>{comp}</option>)}
        </select>
        {renderControls()}
        <button className="primary-btn" onClick={resetComponent}>Reset Component</button>
      </div>

      {/* Preview Panel */}
      <div className="preview-panel">
        <h2>Preview</h2>
        {renderPreview()}
      </div>

      {/* Code Panel */}
      <div className="code-panel">
        <h3>Generated Code</h3>
        <div className="code-box">
          <code>{generateCode()}</code>
        </div>
        <button className="primary-btn" onClick={copyToClipboard}>Copy Code</button>
        <button className="primary-btn" onClick={downloadCode}>Download JSX</button>
      </div>

      {/* Dark Mode Toggle */}
      <div style={{ position: "fixed", top: 15, right: 25 }}>
        <label>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default App;