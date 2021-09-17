import React from "react";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import AccountCard from "../../Components/DashboardAccountCard/DashboardAccountCard";
import image1 from "../../assets/Group 38@2x.png";
import image2 from "../../assets/Group 12@2x.png";
import image3 from "../../assets/Group 13@2x.png";
import image4 from "../../assets/Group 15@2x.png";
import image5 from "../../assets/Group 17@2x.png";
import image6 from "../../assets/Group 88@2x.png";
import image7 from "../../assets/Group 18@2x.png";
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
                      <div className="dashboardMain_body_body_middle_outflow_body_type_bank_text">
                        Bank Fees
                      </div>
                    </div>
                    <div className="dashboardMain_body_body_middle_outflow_body_type_bank_range">
                      <span className="dashboardMain_body_body_middle_outflow_body_type_bank_range_price">
                        - ₦ 250, 000
                      </span>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_bank_range_progress">
                        <div className="dashboardMain_body_body_middle_outflow_body_type_bank_range_progress_inner"></div>
                      </div>
                    </div>
                  </div>
                  {/* Internet */}
                  <div className="dashboardMain_body_body_middle_outflow_body_type">
                    <div className="dashboardMain_body_body_middle_outflow_body_type_internet">
                      <div className="dashboardMain_body_body_middle_outflow_body_type_internet_image">
                        <img src={image3} alt="Internet" />
                      </div>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_internet_text">
                        Internet
                      </div>
                    </div>
                    <div className="dashboardMain_body_body_middle_outflow_body_type_internet_range">
                      <span className="dashboardMain_body_body_middle_outflow_body_type_internet_range_price">
                        - ₦ 250, 000
                      </span>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_internet_range_progress">
                        <div className="dashboardMain_body_body_middle_outflow_body_type_internet_range_progress_inner"></div>
                      </div>
                    </div>
                  </div>
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
                      <div className="dashboardMain_body_body_middle_outflow_body_type_marketing_range_progress">
                        <div className="dashboardMain_body_body_middle_outflow_body_type_marketing_range_progress_inner"></div>
                      </div>
                    </div>
                  </div>
                  {/* Transfer */}
                  <div className="dashboardMain_body_body_middle_outflow_body_type">
                    <div className="dashboardMain_body_body_middle_outflow_body_type_transfer">
                      <div className="dashboardMain_body_body_middle_outflow_body_type_transfer_image">
                        <img src={image5} alt="transfer" />
                      </div>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_transfer_text">
                        Transfer
                      </div>
                    </div>
                    <div className="dashboardMain_body_body_middle_outflow_body_type_transfer_range">
                      <span className="dashboardMain_body_body_middle_outflow_body_type_transfer_range_price">
                        - ₦ 250, 000
                      </span>
                      <div className="dashboardMain_body_body_middle_outflow_body_type_transfer_range_progress">
                        <div className="dashboardMain_body_body_middle_outflow_body_type_transfer_range_progress_inner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details_text">
                        Transfer Fee
                      </div>
                      <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details_time">
                        12:49 Am
                      </div>
                    </div>
                  </div>
                  <div className="dashboardMain_body_body_bottom_body_transactions_price">
                    -₦145.90
                  </div>
                </div>
                <div className="dashboardMain_body_body_bottom_body_transactions">
                  <div className="dashboardMain_body_body_bottom_body_transactions_transaction">
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_icon">
                      <img src={image7} alt="icon" />
                    </div>
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details">
                      <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details_text">
                        Adam Chapman
                      </div>
                      <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details_time">
                        12:49 Am
                      </div>
                    </div>
                  </div>
                  <div className="dashboardMain_body_body_bottom_body_transactions_price">
                    -₦2,000.00
                  </div>
                </div>
                <div className="dashboardMain_body_body_bottom_body_transactions">
                  <div className="dashboardMain_body_body_bottom_body_transactions_transaction">
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_icon">
                      <img src={image7} alt="icon" />
                    </div>
                    <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details">
                      <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details_text">
                        Shirley Barnes
                      </div>
                      <div className="dashboardMain_body_body_bottom_body_transactions_transaction_details_time">
                        12:49 Am
                      </div>
                    </div>
                  </div>
                  <div className="dashboardMain_body_body_bottom_body_transactions_price">
                    -₦2,000.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
