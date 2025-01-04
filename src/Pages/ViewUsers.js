import React, { useState, useEffect } from "react";
import SideBarNavbar from "../Components/Shared/SideBarNavbar";
import TopNavbar from "../Components/Shared/TopNavbar";
import DataTable from "react-data-table-component";


const ViewUsers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Everett C. Green",
      phone: "+ 802 - 370 - 2430",
      email: "EverettCGreen@rhyta.com",
    },
    {
      id: 2,
      name: "Caroline L. Harris",
      phone: "+ 720 - 276 - 9403",
      email: "CarolineLHarris@rhyta.com",
    },
    {
      id: 3,
      name: "Lucy J. Morile",
      phone: "+ 351 - 756 - 6549",
      email: "LucyMorile456@gmail.com",
    },
    {
      id: 4,
      name: "Jennifer A. Straight",
      phone: "+ 912 - 265 - 1550",
      email: "JenniferAStraight@rhyta.com",
    },
    {
      id: 5,
      name: "Megan T. Davidson",
      phone: "+ 415 - 370 - 4621",
      email: "MeganTDavidson@gmail.com",
    },
    {
      id: 6,
      name: "Charles B. Kingston",
      phone: "+ 555 - 320 - 1942",
      email: "CharlesBKingston@rhyta.com",
    },
    {
      id: 7,
      name: "Olivia M. Brooks",
      phone: "+ 306 - 743 - 2146",
      email: "OliviaMBrooks@yahoo.com",
    },
    {
      id: 8,
      name: "Samuel K. White",
      phone: "+ 212 - 643 - 8339",
      email: "SamuelKWhite@aol.com",
    },
    {
      id: 9,
      name: "Grace F. Simmons",
      phone: "+ 432 - 564 - 1912",
      email: "GraceFSimmons@rhyta.com",
    },
    {
      id: 10,
      name: "Daniel S. Hale",
      phone: "+ 543 - 234 - 8090",
      email: "DanielSHale@outlook.com",
    },
  ]);
  

  // Define table columns
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
  ];

  // Filtering users based on search input
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search)
  );

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
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
          <h2 className="mb-3">All Users</h2>
          <p>Here you can view all registered users.</p>

          {/* Search Input */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* User Data Table */}
          <DataTable
            columns={columns}
            data={filteredUsers}
            pagination
            highlightOnHover
            responsive
            striped
          />
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
