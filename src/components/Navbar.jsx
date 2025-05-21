import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <>
      <div className="navbar">
        <h1>MORENT</h1>

        <div className="search">
          <i className="ri-search-line"></i>
          <input type="text" placeholder="  Search Something here..." />
          <i className="ri-equalizer-fill" onClick={toggleDrawer}></i>
        </div>

        <div className="right-corner">
          {/* Links hidden on mobile */}
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/dashboard">DashBoard</Link>
            <Link to="/category">Category</Link>
            <Link to="/info">INFO</Link>
          </div>

          <div className="circle1">
            <i className="ri-heart-fill"></i>
          </div>
          <div className="circle1">
            <i className="ri-notification-3-fill"></i>
            <span className="dot"></span>
          </div>
          <div className="circle1">
            <i className="ri-settings-4-fill"></i>
          </div>

          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1740153204804-200310378f2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Smooth Slide Drawer */}
      <div className={`mobile-drawer ${showDrawer ? "open" : ""}`}>
        <h1>MORENT</h1>
        <i className="ri-close-line close-icon" onClick={closeDrawer}></i>
        <Link to="/" onClick={closeDrawer}>Home</Link>
        <Link to="/dashboard" onClick={closeDrawer}>Dashboard</Link>
        <Link to="/category" onClick={closeDrawer}>Category</Link>
        <Link to="/info" onClick={closeDrawer}>Info</Link>
      </div>
    </>
  );
};

export default Navbar;
