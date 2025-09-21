import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBus,
  FaInfoCircle,
  FaPhone,
  FaAmbulance,
  FaUserCircle,
  FaSignInAlt,
  FaTachometerAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  // When profile icon clicked:
  // If sidebar collapsed, expand it (setCollapsed false)
  // If sidebar expanded, toggle profile menu as usual
  const handleProfileClick = () => {
    if (collapsed) {
      setCollapsed(false); // expand sidebar if currently collapsed
      setProfileOpen(true); // open profile menu on expand
    } else {
      setProfileOpen(!profileOpen); // toggle profile menu when expanded
    }
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="brand">
  {!collapsed && (
    <>
      <img
        src={logo2}
        alt="NextBus Logo"
        className="brand-logo"
      />
      <span className="brand-name">NEXTBUS</span>
    </>
  )}
</div>

        <button className="collapse-btn" onClick={toggleSidebar}>
          {collapsed ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      <nav className="nav">
        <NavLink to="/" className="nav-item" activeclassname="active">
          <FaHome />
          {!collapsed && <span>Home</span>}
        </NavLink>
        <NavLink to="/track" className="nav-item" activeclassname="active">
          <FaBus />
          {!collapsed && <span>Track Bus</span>}
        </NavLink>
        <NavLink to="/emergency" className="nav-item" activeclassname="active">
          <FaAmbulance />
          {!collapsed && <span>Emergency</span>}
        </NavLink>
        <NavLink to="/about" className="nav-item" activeclassname="active">
          <FaInfoCircle />
          {!collapsed && <span>About</span>}
        </NavLink>
        <NavLink to="/contact" className="nav-item" activeclassname="active">
          <FaPhone />
          {!collapsed && <span>Contact</span>}
        </NavLink>
      </nav>

      <div className="profile-section">
        <button className="profile-btn" onClick={handleProfileClick}>
          <FaUserCircle className="avatar-icon" />
          {!collapsed && (
            <div className="profile-info">
              <span className="profile-name">Guest</span>
              <span className="profile-sub">Profile</span>
            </div>
          )}
        </button>
        {!collapsed && profileOpen && (
          <div className="profile-menu">
            <NavLink to="/signin" className="profile-menu-item">
              <FaSignInAlt />
              <span>Sign in / Sign up</span>
            </NavLink>
            <NavLink to="/dashboard" className="profile-menu-item">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </NavLink>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
