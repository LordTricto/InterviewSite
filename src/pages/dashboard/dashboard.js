import React, { useState, useEffect } from "react";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import AccountCard from "../../Components/DashboardAccountCard/DashboardAccountCard";
import Footer from "../../Components/Footer/Footer";
import image1 from "../../assets/Group 38@2x.png";
import image2 from "../../assets/Group 12@2x.png";
import image3 from "../../assets/Group 13@2x.png";
import image4 from "../../assets/Group 15@2x.png";
import image5 from "../../assets/Group 17@2x.png";
import image6 from "../../assets/Group 88@2x.png";
import image7 from "../../assets/Group 18@2x.png";
import logo from "../../assets/Combined Shape 2@2x.png";
import { motion } from "framer-motion";
import useOverlay from "../../hooks/useOverlay";
import "./style.css";

const Dashboard = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [animation] = useOverlay();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const mobileNav = () => {
    showMobile ? setShowMobile(false) : setShowMobile(true);
  };
  return (
    <div className="dashboardContainer">
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
      <aside
        className={`dashboardSideContent ${
          showMobile ? "dashboardSideContent--move" : null
        }`}
      >
        <DashboardSidebar />
      </aside>
      {/* Sidebar Div */}
      {/* Main Content Div */}
      <section className="dashboardMain">
        {/* Sub Div 1 */}
        <div className="dashboardMain_head">
          <DashboardNavbar func={mobileNav} />
        </div>
        {/* Sub Div 1 */}
        {/* Sub Div 2 */}
        <div className="dashboardMain_body">
          {/* Sub Div 2 Top */}
          <div className="dashboardMain_body_head">
            <div className="dashboardMain_body_head_text">
              <span className="dashboardMain_body_head_text_header">
                Welcome back, Kathy
              </span>
              <p className="dashboardMain_body_head_text_paragraph">
                Here’s what has been happening in the last{" "}
                <span className="dashboardMain_body_head_text_paragraph_days">
                  7 days
                </span>
              </p>
            </div>
            <button className="dashboardMain_body_head_cta">
              Add a sub account
            </button>
          </div>{" "}
          {/* Sub Div 2 Top */}
          {/* Sub Div 2 Main */}
          <div className="dashboardMain_body_body">
            {/* Accounts Div */}
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
            {/* Accounts Div */}
            {/* Summary Div */}
            <div className="dashboardMain_body_body_middle">
              <div className="dashboardMain_body_body_middle_summary">
                <span className="dashboardMain_body_body_middle_summary_month">
                  June summary
                </span>
                <div className="dashboardMain_body_body_middle_summary_transaction">
                  <div className="dashboardMain_body_body_middle_summary_transaction_text">
                    <span className="dashboardMain_body_body_middle_summary_transaction_text_top">
                      Money in
                    </span>
                    <span className="dashboardMain_body_body_middle_summary_transaction_text_bottom">
                      ₦ 5,650,000
                    </span>
                  </div>
                  <div className="dashboardMain_body_body_middle_summary_transaction_text">
                    <span className="dashboardMain_body_body_middle_summary_transaction_text_top">
                      Money out
                    </span>
                    <span className="dashboardMain_body_body_middle_summary_transaction_text_bottom">
                      ₦ 5,650,000
                    </span>
                  </div>
                  <div className="dashboardMain_body_body_middle_summary_transaction_text">
                    <span className="dashboardMain_body_body_middle_summary_transaction_text_top">
                      Difference
                    </span>
                    <span className="dashboardMain_body_body_middle_summary_transaction_text_bottom">
                      ₦ 5,650,000
                    </span>
                  </div>
                </div>
                <div className="dashboardMain_body_body_middle_summary_graph">
                  <img src={image1} alt="graph" />
                </div>
              </div>
              <div className="dashboardMain_body_body_middle_outflow">
                <span className="dashboardMain_body_body_middle_outflow_head">
                  Cash outflow
                </span>
                <div className="dashboardMain_body_body_middle_outflow_body">
                  {/* Bank */}
                  <div className="dashboardMain_body_body_middle_outflow_body_type">
                    <div className="dashboardMain_body_body_middle_outflow_body_type_bank">
                      <div className="dashboardMain_body_body_middle_outflow_body_type_bank_image">
                        <img src={image2} alt="bank" />
                      </div>
                      <span className="dashboardMain_body_body_middle_outflow_body_type_bank_text">
                        Bank Fees
                      </span>
                    </div>
                    <div className="dashboardMain_body_body_middle_outflow_body_type_bank_range">
                      <span className="dashboardMain_body_body_middle_outflow_body_type_bank_range_price">
                        - ₦ 250, 000
                      </span>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_bank_range_progress"></div>
                    </div>
                  </div>
                  {/* Bank */}
                  {/* Internet */}
                  <div className="dashboardMain_body_body_middle_outflow_body_type">
                    <div className="dashboardMain_body_body_middle_outflow_body_type_internet">
                      <div className="dashboardMain_body_body_middle_outflow_body_type_internet_image">
                        <img src={image3} alt="Internet" />
                      </div>
                      <span className="dashboardMain_body_body_middle_outflow_body_type_internet_text">
                        Internet
                      </span>
                    </div>
                    <div className="dashboardMain_body_body_middle_outflow_body_type_internet_range">
                      <span className="dashboardMain_body_body_middle_outflow_body_type_internet_range_price">
                        - ₦ 250, 000
                      </span>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_internet_range_progress"></div>
                    </div>
                  </div>
                  {/* Internet */}
                  {/* Marketing */}
                  <div className="dashboardMain_body_body_middle_outflow_body_type">
                    <div className="dashboardMain_body_body_middle_outflow_body_type_marketing">
                      <div className="dashboardMain_body_body_middle_outflow_body_type_marketing_image">
                        <img src={image4} alt="Marketing" />
                      </div>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_marketing_text">
                        Marketing
                      </div>
                    </div>
                    <div className="dashboardMain_body_body_middle_outflow_body_type_marketing_range">
                      <span className="dashboardMain_body_body_middle_outflow_body_type_marketing_range_price">
                        - ₦ 250, 000
                      </span>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_marketing_range_progress"></div>
                    </div>
                  </div>
                  {/* Marketing */}
                  {/* Transfer */}
                  <div className="dashboardMain_body_body_middle_outflow_body_type">
                    <div className="dashboardMain_body_body_middle_outflow_body_type_transfer">
                      <div className="dashboardMain_body_body_middle_outflow_body_type_transfer_image">
                        <img src={image5} alt="transfer" />
                      </div>
                      <span className="dashboardMain_body_body_middle_outflow_body_type_transfer_text">
                        Transfer
                      </span>
                    </div>
                    <div className="dashboardMain_body_body_middle_outflow_body_type_transfer_range">
                      <span className="dashboardMain_body_body_middle_outflow_body_type_transfer_range_price">
                        - ₦ 250, 000
                      </span>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_transfer_range_progress"></div>
                    </div>
                  </div>
                  {/* Transfer */}
                </div>
              </div>
            </div>
            {/* Summary Div */}
            {/* Transaction Div */}
            <div className="dashboardMain_body_body_bottom">
              <div className="dashboardMain_body_body_bottom_head">
                <span className="dashboardMain_body_body_bottom_head_text">
                  Recent transactions
                </span>
                <button className="dashboardMain_body_body_bottom_head_cta">
                  See all
                </button>
              </div>
              <div className="dashboardMain_body_body_bottom_body">
                <div className="dashboardMain_body_body_bottom_body_transactions">
                  <div className="dashboardMain_body_body_bottom_body_transactions_transaction">
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_icon">
                      <img src={image6} alt="icon" />
                    </div>
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details">
                      <span className="dashboardMain_body_body_bottom_body_transactions_transaction_details_text">
                        Transfer Fee
                      </span>
                      <span className="dashboardMain_body_body_bottom_body_transactions_transaction_details_time">
                        12:49 Am
                      </span>
                    </div>
                  </div>
                  <span className="dashboardMain_body_body_bottom_body_transactions_price">
                    -₦145.90
                  </span>
                </div>
                <div className="dashboardMain_body_body_bottom_body_transactions">
                  <div className="dashboardMain_body_body_bottom_body_transactions_transaction">
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_icon">
                      <img src={image7} alt="icon" />
                    </div>
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details">
                      <span className="dashboardMain_body_body_bottom_body_transactions_transaction_details_text">
                        Adam Chapman
                      </span>
                      <span className="dashboardMain_body_body_bottom_body_transactions_transaction_details_time">
                        12:49 Am
                      </span>
                    </div>
                  </div>
                  <span className="dashboardMain_body_body_bottom_body_transactions_price">
                    -₦2,000.00
                  </span>
                </div>
                <div className="dashboardMain_body_body_bottom_body_transactions">
                  <div className="dashboardMain_body_body_bottom_body_transactions_transaction">
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_icon">
                      <img src={image7} alt="icon" />
                    </div>
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details">
                      <span className="dashboardMain_body_body_bottom_body_transactions_transaction_details_text">
                        Shirley Barnes
                      </span>
                      <span className="dashboardMain_body_body_bottom_body_transactions_transaction_details_time">
                        12:49 Am
                      </span>
                    </div>
                  </div>
                  <span className="dashboardMain_body_body_bottom_body_transactions_price">
                    -₦2,000.00
                  </span>
                </div>
              </div>
            </div>
            {/* Transaction Div */}
          </div>
          {/* Sub Div 2 Main */}
        </div>
        {/* Sub Div 2 */}
      </section>
      {/* Main Content Div */}
      <Footer dark />
    </div>
  );
};

export default Dashboard;
