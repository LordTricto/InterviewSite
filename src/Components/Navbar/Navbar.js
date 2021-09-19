import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ back, signIn }) => {
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
              {signIn ? (
                <Link to="/">Sign Up</Link>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
