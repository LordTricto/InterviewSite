import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Combined Shape 2@2x.png";
import { motion } from "framer-motion";
import useOverlay from "../../hooks/useOverlay";

const SignUpBusiness = () => {
  const [selectedOption, setSelectedOption] = useState(false);
  const [animation] = useOverlay();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      {/* Page Transition Div */}
      <motion.div
        className="overlay"
        variants={animation}
        animate="animate"
        exit="exit"
      >
        <motion.img
          variants={animation}
          animate="animateImg"
          exit="exitImg"
          src={logo}
          alt="logo"
        />
      </motion.div>
      {/* Page Transition Div */}
      {/* Sidebar Div */}
      <aside className="sideContent">
        <Sidebar />
      </aside>
      {/* Sidebar Div */}
      {/* Main Content Div */}
      <section className="main">
        {/* Sub Div 1 */}
        <div className="main_head">
          <Navbar />
        </div>
        {/* Sub Div 1 */}
        {/* Sub Div 2 */}
        <div className="main_body">
          {/* Sub Div 2 Header*/}
          <div className="main_body_top">
            <span className="main_body_top_header">
              Open a new business account
            </span>
            <p className="main_body_top_paragraph">
              {" "}
              A short description comes here{" "}
            </p>
          </div>{" "}
          {/* Sub Div 2 Header*/}
          {/* Sub Div 2 Form*/}
          <div className="main_body_middle">
            <form className="main_body_middle_form">
              {/* CAC Section */}
              <div
                className={`main_body_middle_form_container ${
                  selectedOption === "cac" ? "box_active" : "null"
                }`}
                onClick={() => {
                  setSelectedOption("cac");
                }}
              >
                <div className="main_body_middle_form_container_radio">
                  <div className="main_body_middle_form_container_radio_container">
                    <div
                      className={`main_body_middle_form_container_radio_container--active ${
                        selectedOption === "cac"
                          ? "show_content"
                          : "hide_content"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="main_body_middle_form_container_text">
                  <div className="main_body_middle_form_container_text_header">
                    <span>I have a registered business /</span>
                    <span>charity with CAC</span>
                  </div>
                  <div
                    className={`main_body_middle_form_container_text_body ${
                      selectedOption === "cac" ? "show_content" : "hide_content"
                    }`}
                  >
                    <div className="main_body_middle_form_container_text_body_head">
                      <p>As a registered business you'll get:</p>
                    </div>
                    <ul className="main_body_middle_form_container_text_body_body">
                      <li>
                        <span className="main_body_middle_form_container_text_body_body_icon">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <p>Account in your business name</p>
                      </li>
                      <li>
                        <span className="main_body_middle_form_container_text_body_body_icon">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <p>
                          Send to and receive transfers from all Nigerian banks
                        </p>
                      </li>
                      <li>
                        <span className="main_body_middle_form_container_text_body_body_icon">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <p>Tools for business management</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Business Not Registered Section */}
              <div
                className={`main_body_middle_form_container ${
                  selectedOption === "not" ? "box_active" : "null"
                }`}
                onClick={() => {
                  setSelectedOption("not");
                }}
              >
                <div className="main_body_middle_form_container_radio">
                  <div className="main_body_middle_form_container_radio_container">
                    <div
                      className={`main_body_middle_form_container_radio_container--active ${
                        selectedOption === "not"
                          ? "show_content"
                          : "hide_content"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="main_body_middle_form_container_text">
                  <div className="main_body_middle_form_container_text_header">
                    <span>My business is not yet registered,</span>
                    <span>I would like to register</span>
                  </div>
                  <div
                    className={`main_body_middle_form_container_text_body ${
                      selectedOption === "not" ? "show_content" : "hide_content"
                    }`}
                  >
                    <div className="main_body_middle_form_container_text_body_head">
                      <p>Everything you need to start your business</p>
                    </div>
                    <ul className="main_body_middle_form_container_text_body_body">
                      <li>
                        <span className="main_body_middle_form_container_text_body_body_icon">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <p>Registered business name with the CAC</p>
                      </li>
                      <li>
                        <span className="main_body_middle_form_container_text_body_body_icon">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <p>Tax identification number</p>
                      </li>
                      <li>
                        <span className="main_body_middle_form_container_text_body_body_icon">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <p>
                          Your account will be automatically opened on
                          completion
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Freelancer Section */}
              <div
                className={`main_body_middle_form_container ${
                  selectedOption === "freelance" ? "box_active" : "null"
                }`}
                onClick={() => {
                  setSelectedOption("freelance");
                }}
              >
                <div className="main_body_middle_form_container_radio">
                  <div className="main_body_middle_form_container_radio_container">
                    <div
                      className={`main_body_middle_form_container_radio_container--active ${
                        selectedOption === "freelance"
                          ? "show_content"
                          : "hide_content"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="main_body_middle_form_container_text">
                  <div className="main_body_middle_form_container_text_header">
                    <span>
                      I’m a freelancer I do business in my personal name
                    </span>
                  </div>
                  <div
                    className={`main_body_middle_form_container_text_body ${
                      selectedOption === "freelance"
                        ? "show_content"
                        : "hide_content"
                    }`}
                  >
                    <div className="main_body_middle_form_container_text_body_head">
                      <p>Everything you need to start your business</p>
                    </div>
                    <ul className="main_body_middle_form_container_text_body_body">
                      <li>
                        <span className="main_body_middle_form_container_text_body_body_icon">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <p>Registered business name with the CAC</p>
                      </li>
                      <li>
                        <span className="main_body_middle_form_container_text_body_body_icon">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <p>Tax identification number</p>
                      </li>
                      <li>
                        <span className="main_body_middle_form_container_text_body_body_icon">
                          {" "}
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <p>
                          Your account will be automatically opened on
                          completion
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>{" "}
          {/* Sub Div 2 Form*/}
          {/* Sub Div 2 Button*/}
          <div className="main_body_bottom">
            <Link to="/signIn">
              <button>Next</button>
            </Link>
          </div>
          {/* Sub Div 2 Button*/}
        </div>
        {/* Sub Div 2 */}
      </section>
      {/* Main Content Div */}
      <Footer />
    </div>
  );
};

export default SignUpBusiness;
