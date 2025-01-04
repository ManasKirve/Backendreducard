import React from "react";

const TopNavbar = ({ onToggle }) => {
  return (
    <header className="top-navbar">
      <button className="sidebar-toggle-btn" onClick={onToggle}>
        <i className="fas fa-bars"></i> {/* Hamburger icon */}
      </button>
      <div className="icon-group">
        <i className="fas fa-bell"></i>
        <i className="fas fa-moon"></i>
        <i className="fas fa-user-circle"></i>
      </div>
    </header>
  );
};

export default TopNavbar;
