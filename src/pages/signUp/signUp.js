import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Input from "../../Components/Input/Input";
import Footer from "../../Components/Footer/Footer";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Combined Shape 2@2x.png";
import { motion } from "framer-motion";
import useOverlay from "../../hooks/useOverlay";

function SignUp() {
  const [clickButton, setClickButton] = useState(true);
  const [countryCode, setCountryCode] = useState(true);
  const [animation] = useOverlay();
  const clickSelect = () => {
    clickButton ? setClickButton(false) : setClickButton(true);
  };
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
          animate="animateText"
          exit="exit"
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
            <span className="main_body_top_header">Create your account</span>
            <p className="main_body_top_paragraph">
              {" "}
              A short description about account types{" "}
            </p>
          </div>{" "}
          {/* Sub Div 2 Header*/}
          {/* Sub Div 2 Form*/}
          <div className="main_body_middle">
            <form className="main_body_middle_form">
              <div className="main_body_middle_form_full_name_container">
                <Input name="firstName" text="Full Name" type="text" />
              </div>
              <div className="main_body_middle_form_last_name_container">
                <Input name="lastName" text="Last Name" type="text" />
              </div>

              <div className="main_body_middle_form_number_container">
                <div className="main_body_middle_form_number_container_select">
                  <div
                    className="main_body_middle_form_number_container_select_country"
                    onClick={clickSelect}
                  >
                    <span className="main_body_middle_form_number_container_select_country_text">
                      Country
                    </span>
                    <span className="main_body_middle_form_number_container_select_country_number">
                      {countryCode}
                    </span>
                  </div>
                  <div
                    className="main_body_middle_form_number_container_select_icon"
                    onClick={clickSelect}
                  >
                    <span
                      className={` icon ${
                        clickButton ? "icon_spin_on" : " icon_spin_off"
                      }`}
                    >
                      <FontAwesomeIcon icon={faChevronDown} className="icon" />
                    </span>
                  </div>

                  <ul
                    className={`main_body_middle_form_number_container_select_options ${
                      clickButton ? "disappear" : "appear"
                    }`}
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
                <div className="main_body_middle_form_number_container_input">
                  <Input name="mobileNumber" text="Mobile Number" type="text" />
                </div>
              </div>
              <div className="main_body_middle_form_email_container">
                <Input name="email" text="Email" type="email" />
              </div>
            </form>
          </div>{" "}
          {/* Sub Div 2 Form*/}
          {/* Sub Div 2 Button*/}
          <div className="main_body_bottom">
            <Link to="/signUpBusiness">
              {" "}
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
}

export default SignUp;
