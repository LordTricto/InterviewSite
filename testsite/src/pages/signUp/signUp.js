import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Input from "../../Components/Input/Input";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  const [clickButton, setClickButton] = useState(true);
  const [countryCode, setCountryCode] = useState(true);

  const clickSelect = () => {
    clickButton ? setClickButton(false) : setClickButton(true);
  };

  return (
    <div className="container">
      <aside className="side_content">
        <Sidebar />
      </aside>
      <section className="main">
        <div className="main_head">
          <Navbar />
        </div>
        <div className="main_body">
          <div className="main_body_top">
            <span className="main_body_top_header">Create your account</span>
            <p className="main_body_top_paragraph">
              {" "}
              A short description about account types{" "}
            </p>
          </div>{" "}
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
          <div className="main_body_bottom">
            <Link to="/signUpBusiness">
              {" "}
              <button>Next</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
