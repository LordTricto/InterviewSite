import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = ({ dark }) => {
  return (
    <footer className={`footer ${dark ? "footer--dark" : null}`}>
      <p className="footer_text">
        <FontAwesomeIcon icon={faCopyright} /> 2020 Prospa Inc
      </p>
    </footer>
  );
};

export default Footer;
