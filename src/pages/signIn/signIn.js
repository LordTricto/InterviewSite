import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Input from "../../Components/Input/Input";

import "./style.css";

const SignIn = () => {
  return (
    <div className="container">
      <aside className="side_content">
        <Sidebar dark />
      </aside>
      <section className="main">
        <div className="main_head">
          <Navbar />
        </div>
        <div className="main_body">
          <div className="main_body_top">
            <span className="main_body_top_header">Welcome back to Prospa</span>
            <p className="main_body_top_paragraph">
              {" "}
              An account, with powerful, personalized tools all in one place{" "}
            </p>
          </div>{" "}
          <div className="main_body_middle">
            <form className="main_body_middle_form">
              <div className="main_body_middle_form_email_container">
                <Input name="email" text="Email Address" type="email" />
              </div>
              <div className="main_body_middle_form_password_container">
                <Input name="password" text="Password" type="password" />
              </div>
            </form>
          </div>{" "}
          <div className="main_body_bottom">
            <Link to="/dashboard">
              {" "}
              <button>Next</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
