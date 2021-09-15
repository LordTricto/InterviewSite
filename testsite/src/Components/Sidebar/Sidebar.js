import React, { useState, useEffect } from "react";
import logo from "../../assets/Combined Shape@2x.png";
import image1 from "../../assets/Group3@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "./style.css";

const Sidebar = () => {
  return (
    <>
      <div className="side_bar">
        <div className="side_bar_top">
          <img src={logo} alt="logo" />{" "}
        </div>
        <div className="side_bar_middle">
          <div className="side_bar_middle_slide">
            <div className="side_bar_middle_slide_1"></div>
            <div className="side_bar_middle_slide_2"></div>
            <div className="side_bar_middle_slide_3"></div>
            <div className="side_bar_middle_slide_4"></div>
            <div className="side_bar_middle_slide_5"></div>
          </div>

          <div className="side_bar_middle_text">
            {" "}
            <div className="side_bar_middle_text_header">
              {" "}
              <span>Create multiple</span> <span>sub-account</span>
            </div>
            <div className="side_bar_middle_text_para">
              <p>
                Organize your business finances easily with multiple accounts,
                No limits!
              </p>
            </div>
          </div>

          <div className="side_bar_middle_img">
            <img src={image1} alt="money-img" />{" "}
          </div>
        </div>
        <div className="side_bar_bottom">
          <p>
            {" "}
            <FontAwesomeIcon icon={faCopyright} /> 2020 Prospa Inc
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
