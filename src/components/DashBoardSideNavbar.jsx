import React from "react";
import "../css/Dashboardsidenavbar.css";

const DashBoardSideNavbar = () => {
  return (
    <div className="sidebar">
      <div className="menu-section">
        <h4 className="menu-title">MAIN MENU</h4>
        <ul className="menu-list">
          <li className="menu-item active">
            <span className="icon"><i class="ri-home-3-fill"></i></span> Dashboard
          </li>
          <li className="menu-item">
            <span className="icon"><i class="ri-car-line"></i></span> Car Rent
          </li>
          <li className="menu-item">
            <span className="icon"><i class="ri-line-chart-line"></i></span> Insight
          </li>
          <li className="menu-item">
            <span className="icon"><i class="ri-wallet-3-fill"></i></span> Reimburse
          </li>
          <li className="menu-item">
            <span className="icon"><i class="ri-chat-new-fill"></i></span> Inbox
          </li>
          <li className="menu-item">
            <span className="icon"><i class="ri-calendar-2-line"></i></span> Calendar
          </li>
        </ul>
      </div>

      <div className="menu-section2">
        <h4 className="menu-title">PREFERENCES</h4>
        <ul className="menu-list">
          <li className="menu-item">
            <span className="icon"><i class="ri-settings-line"></i></span> Settings
          </li>
          <li className="menu-item">
            <span className="icon"><i class="ri-error-warning-line"></i></span> Help & Center
          </li>

          <li className="menu-item dark-mode">
            <span className="icon"><i class="ri-shopping-bag-4-line"></i></span> <p className="dark-light">Dark Mode</p>
            <span className="dark-toggle"> <span className="light-icon">  <i class="ri-sun-line"></i> </span>  <i class="ri-moon-fill"></i></span>
          </li>

        </ul>
      </div>

      <div className="logout">
        <span className="icon"><i class="ri-logout-box-r-line"></i></span> Log Out
      </div>
    </div>
  );
};

export default DashBoardSideNavbar;
