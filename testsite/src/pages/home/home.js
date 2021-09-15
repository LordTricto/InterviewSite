import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import "./style.css";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container">
      <aside className="side_content">
        <Sidebar />
      </aside>
      <section className="main_content">
        <div className="main_content_head">
          <Navbar />
        </div>
        <div className="main_content_body">
          <div className="main_content_body_top">
            <span className="main_content_body_top_header">
              Create your account
            </span>
            <p className="main_content_body_top_para">
              {" "}
              A short description about account types{" "}
            </p>
          </div>{" "}
          <div className="main_content_body_middle">
            <form className="main_content_body_middle_form">
              <div className="main_content_body_middle_form_full_name_container">
                <input type="text" name="fullName" required />
                <label for="fullName" className="label_name">
                  <span className="content_name">Full Name</span>
                </label>
              </div>
              <div className="main_content_body_middle_form_last_name_container">
                <input type="text" name="lastName" />
                <label for="lastName" className="label_name">
                  <span className="content_name">Last Name</span>
                </label>
              </div>

              <div className="main_content_body_middle_form_number_container">
                <select>
                  <option>+233</option>
                  <option>+233</option>
                  <option>+233</option>
                </select>
                <div className="main_content_body_middle_form_number_container_input">
                  <input type="text" name="mobileNumber" />
                  <label for="mobileNumber" className="label_name">
                    <span className="content_name">Number</span>
                  </label>
                </div>
              </div>
              <div className="main_content_body_middle_form_email_container">
                <input type="email" name="email" />
                <label for="email" className="label_name">
                  <span className="content_name">Email</span>
                </label>
              </div>
            </form>
          </div>{" "}
          <div className="main_content_body_bottom">
            <button>Next</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
