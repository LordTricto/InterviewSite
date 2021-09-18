import React, { useState, useEffect } from "react";
import image1 from "../../assets/Group6@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
const DashboardSelect = ({ options }) => {
  const [businessName, setBusinessName] = useState();
  const [clickButton, setClickButton] = useState(true);
  useEffect(() => {
    setBusinessName(options[0].name);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const clickSelect = () => {
    clickButton ? setClickButton(false) : setClickButton(true);
  };

  return (
    <>
      <div className="dashboardSelect">
        <div className="dashboardSelect_accDetails">
          <div className="dashboardSelect_accDetails_img">
            <img src={image1} alt="businessImg" />
          </div>
          <div className="dashboardSelect_accDetails_text">
            <span className="dashboardSelect_accDetails_text_header">
              {businessName}
            </span>
            <span className="dashboardSelect_accDetails_text_paragraph">
              Manage account
            </span>
          </div>
        </div>
        <div className="dashboardSelect_icon" onClick={clickSelect}>
          <span
            className={` icon ${
              clickButton ? "icon_spin_on" : " icon_spin_off"
            }`}
          >
            <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </span>
        </div>
        <div
          className={`dashboardSelect_options ${
            clickButton ? "disappear" : "appear"
          }`}
          onClick={clickSelect}
        >
          <ul className="dashboardSelect_options_container">
            {options.map((option) => {
              return (
                <li
                  className={`dashboardSelect_options_container_option ${
                    businessName === option.name
                      ? "dashboardSelect_options_container_option--active"
                      : null
                  }`}
                  onClick={() => {
                    setBusinessName(option.name);
                  }}
                >
                  {option.name}
                </li>
              );
            })}
            <span className="dashboardSelect_options_container_cta">
              Add a business
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSelect;
