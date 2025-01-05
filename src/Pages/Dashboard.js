import React, { useState, useEffect } from "react";
import SideBarNavbar from "../Components/Shared/SideBarNavbar";
import TopNavbar from "../Components/Shared/TopNavbar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState); // Toggle the sidebar state
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true); // Keep sidebar open for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dashboard-container">
      <SideBarNavbar isSidebarOpen={isSidebarOpen} />
      <div className={`dashboard-main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <TopNavbar onToggle={handleSidebarToggle} />
        <div className="dashboard-content">
          <h1>Dashboard</h1>
          <p>Welcome to your dashboard! Here’s an overview of your data.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
