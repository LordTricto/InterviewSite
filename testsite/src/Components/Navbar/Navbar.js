import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ back }) => {
  return (
    <>
      <nav>
        <ul className="nav">
          <li className={`nav_back ${back ? null : "disappear"}`}>
            <FontAwesomeIcon icon={faChevronLeft} className="icon" />
          </li>
          <li className="nav_sign_in">
            <span> Already a member?</span>{" "}
            <span className="nav_sign_in--danger">
              <Link to="/">Sign In</Link>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
