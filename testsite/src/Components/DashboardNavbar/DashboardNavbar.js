import React from "react";
import image1 from "../../assets/Group 8@2x.png";
import image2 from "../../assets/Oval@2x.png";
import "./style.css";

const DashboardNavbar = () => {
  return (
    <nav className="dashboardNav">
      <div className="dashboardNav_text">
        <span> Dashboard</span>
      </div>
      <div className="dashboardNav_user">
        <div className="dashboardNav_user_notification">
          <img src={image1} alt="notification" />
        </div>
        <div className="dashboardNav_user_picture">
          <img src={image2} alt="user profile" />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
