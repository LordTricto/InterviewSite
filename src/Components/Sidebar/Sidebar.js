import React from "react";
import logo from "../../assets/Combined Shape@2x.png";
import image1 from "../../assets/Group3@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "./style.css";

const Sidebar = ({ dark }) => {
  return (
    <>
      <div className={`sidebar ${dark ? "sidebar--dark" : null}`}>
        <div className="sidebar_top">
          <img src={logo} alt="logo" />{" "}
        </div>
        <div className="sidebar_middle">
          <div className="sidebar_middle_slide">
            <div className="sidebar_middle_slide_1"></div>
            <div className="sidebar_middle_slide_2"></div>
            <div className="sidebar_middle_slide_3"></div>
            <div className="sidebar_middle_slide_4"></div>
            <div className="sidebar_middle_slide_5"></div>
          </div>

          <div className="sidebar_middle_text">
            {" "}
            <div className="sidebar_middle_text_header">
              {" "}
              <span>Create multiple</span> <span>sub-account</span>
            </div>
            <p className="sidebar_middle_text_paragraph">
              Organize your business finances easily with multiple accounts, No
              limits!
            </p>
          </div>

          <div className="sidebar_middle_img">
            <img src={image1} alt="money-img" />{" "}
          </div>
        </div>
        <div className="sidebar_bottom">
          <p className="sidebar_bottom_text">
            <FontAwesomeIcon icon={faCopyright} /> 2020 Prospa Inc
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
