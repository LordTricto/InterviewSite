import React, { useState } from "react";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Select = () => {
  const [clickButton, setClickButton] = useState(true);
  const [countryCode, setCountryCode] = useState("+234");
  const clickSelect = () => {
    clickButton ? setClickButton(false) : setClickButton(true);
  };
  return (
    <div className="select">
      <div className="select_country" onClick={clickSelect}>
        <span className="select_country_text">Country</span>
        <span className="select_country_number">{countryCode}</span>
      </div>
      <div className="select_icon" onClick={clickSelect}>
        <span
          className={` icon ${clickButton ? "icon_spin_on" : " icon_spin_off"}`}
        >
          <FontAwesomeIcon icon={faChevronDown} className="icon" />
        </span>
      </div>

      <ul
        className={`select_options ${clickButton ? "disappear" : "appear"}`}
        onClick={clickSelect}
      >
        <li
          onClick={() => {
            setCountryCode("+232");
          }}
        >
          +232
        </li>
        <li
          onClick={() => {
            setCountryCode("+233");
          }}
        >
          +233
        </li>
        <li
          onClick={() => {
            setCountryCode("+234");
          }}
        >
          +234
        </li>
      </ul>
    </div>
  );
};

export default Select;
