import React from "react";
import "./style.css";
const DashboardAccountCard = ({ current, bank, accountNo, balance, kobo }) => {
  return (
    <div className="accCard">
      <div className="accCard_top">
        <div className="accCard_top_text">
          <span className="accCard_top_text_header">
            {current ? "current account" : "savings account"}
          </span>
          <p className="accCard_top_text_paragraph">
            {bank} - {accountNo}
          </p>
        </div>
        <div
          className={`accCard_top_icon ${
            current ? null : "accCard_top_icon--bgc"
          }`}
        >
          <div
            className={`accCard_top_icon_inner ${
              current ? null : "accCard_top_icon_inner--bgc"
            }`}
          ></div>
        </div>
      </div>
      <div className="accCard_bottom">
        <span className="accCard_bottom_price">₦{balance}</span>
        <span className="accCard_bottom_unit">.{kobo}</span>
      </div>
    </div>
  );
};

export default DashboardAccountCard;
