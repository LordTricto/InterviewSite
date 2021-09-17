import React from "react";
import "./style.css";

const Input = ({ name, text, type }) => {
  return (
    <div className="input">
      <input type={type} name={name} required />
      <label for={name} className="label_name">
        <span className="content_name">{text}</span>
      </label>
    </div>
  );
};

export default Input;
