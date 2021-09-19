import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Input from "../../Components/Input/Input";
import Footer from "../../Components/Footer/Footer";
import Select from "../../Components/Select/Select";
import "./style.css";
import logo from "../../assets/Combined Shape 2@2x.png";
import { motion } from "framer-motion";
import useOverlay from "../../hooks/useOverlay";

function SignUp() {
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
                <Select />
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
