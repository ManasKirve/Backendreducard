import React from "react";
import { Link } from "react-router-dom";

const SideBarNavbar = ({ isSidebarOpen }) => {
  return (
    <nav className={`side-navbar ${isSidebarOpen ? "open" : "closed"}`}>
      <ul>
        <li>
          <h1 className="fw-semibold">Fast Kart</h1>
        </li>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#orders">Orders</a>
        </li>
        <li className="dropdown">
          <a href="#users" className="dropdown-toggle">
            Users
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/user-viewall-user" className="dropdown-item">
                View Users
              </Link>
            </li>
            <li>
              <Link to="/user-addnew-user" className="dropdown-item">
                Add User
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideBarNavbar;
