import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav_back">
            <FontAwesomeIcon icon={faChevronLeft} />
          </li>
          <li className="nav_sign_in">
            <span> Already a member?</span>{" "}
            <span className="nav_sign_in--danger">Sign In</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
