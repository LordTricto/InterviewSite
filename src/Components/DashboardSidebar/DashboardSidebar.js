import React from "react";
import logo from "../../assets/Combined Shape 2@2x.png";
import image1 from "../../assets/Group11@2x.png";
import image2 from "../../assets/Group@2x.png";
import image3 from "../../assets/Group14@2x.png";
import image4 from "../../assets/Group9@2x.png";
import image5 from "../../assets/Oval@2x.png";
import "./style.css";
import DashboardSelect from "../DashboardSelect/DashboardSelect";
const DashboardSidebar = () => {
  const options = [
    {
      name: "Clayvant Inc",
    },
    {
      name: "Business name 2",
    },
    {
      name: "Business name 3",
    },
  ];

  return (
    <div className="dashboardSidebar ">
      <div className="dashboardSidebar_head">
        <DashboardSelect options={options} />
      </div>
      <div className="dashboardSidebar_body">
        <div className="dashboardSidebar_body_head">
          <div className="dashboardSidebar_body_head_body">
            <div className="dashboardSidebar_body_head_body_icon">
              <img src={image1} alt="account" />
            </div>
            <span className="dashboardSidebar_body_head_body_text">
              Account
            </span>
          </div>
          <div className="dashboardSidebar_body_head_body">
            <div className="dashboardSidebar_body_head_body_icon">
              <img src={image2} alt="transfer" />
            </div>
            <span className="dashboardSidebar_body_head_body_text">
              Transfer
            </span>
          </div>
          <div className="dashboardSidebar_body_head_body">
            <div className="dashboardSidebar_body_head_body_icon">
              <img src={image3} alt="invoice" />
            </div>
            <span className="dashboardSidebar_body_head_body_text">
              Invoice
            </span>
          </div>
          <div className="dashboardSidebar_body_head_body">
            <div className="dashboardSidebar_body_head_body_icon">
              <img src={image4} alt="management" />
            </div>
            <span className="dashboardSidebar_body_head_body_text">
              Management
            </span>
          </div>
          <div className="dashboardSidebar_body_head_body">
            <div className="dashboardSidebar_body_head_body_icon">
              <img src={image4} alt="security" />
            </div>
            <span className="dashboardSidebar_body_head_body_text">
              Security
            </span>
          </div>
          <div className="dashboardSidebar_body_head_body">
            <div className="dashboardSidebar_body_head_body_icon">
              <img src={image4} alt="support" />
            </div>
            <span className="dashboardSidebar_body_head_body_text">
              Support
            </span>
          </div>
        </div>

        <div className="dashboardSidebar_body_body">
          <img src={logo} alt="logo" />
        </div>
        <div className="dashboardSidebar_userPicture">
          <img src={image5} alt="user profile" />
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
