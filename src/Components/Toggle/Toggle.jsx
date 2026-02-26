import React from "react";
import "./Toggle.css";

const ToggleSwitch = ({ checked, onChange, onClick }) => {
  return (
    <label className="switch" onClick={onClick}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
