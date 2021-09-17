import React from "react";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import AccountCard from "../../Components/DashboardAccountCard/DashboardAccountCard";
import "./style.css";
const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <aside className="dashboardSideContent">
        <DashboardSidebar />
      </aside>
      <section className="dashboardMain">
        <div className="dashboardMain_head">
          <DashboardNavbar />
        </div>
        <div className="dashboardMain_body">
          <div className="dashboardMain_body_head">
            <div className="dashboardMain_body_head_text">
              <span className="dashboardMain_body_head_text_header">
                Welcome back, Kathy
              </span>
              <p className="dashboardMain_body_head_text_paragraph">
                Here’s what has been happenin g in the last{" "}
                <span className="dashboardMain_body_head_text_paragraph_days">
                  7 days
                </span>
              </p>
            </div>
            <button className="dashboardMain_body_head_cta">
              Add a sub account
            </button>
          </div>{" "}
          <div className="dashboardMain_body_body">
            <div className="dashboardMain_body_body_top">
              <AccountCard
                bank="PROVIDUS BANK"
                accountNo="9906533917"
                balance="814,800"
                kobo="45"
                current
              />
              <AccountCard
                bank="SUB ACCOUNT"
                accountNo="12346789"
                balance="39,342"
                kobo="45"
              />
            </div>
            <div className="dashboardMain_body_body_middle">
              <div className="dashboardMain_body_body_middle_summary"></div>
              <div className="dashboardMain_body_body_middle_outflow"></div>
            </div>
            <div className="dashboardMain_body_body_bottom"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
