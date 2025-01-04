import React, { useState, useEffect } from "react";
import SideBarNavbar from "../Components/Shared/SideBarNavbar";
import TopNavbar from "../Components/Shared/TopNavbar";

const AddNewsUser = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(prevState => !prevState);
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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        console.log("Form Submitted", formData);
        setError("");
        alert("User added successfully!");

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="dashboard-container">
            <SideBarNavbar isSidebarOpen={isSidebarOpen} />
            <div className={`dashboard-main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
                <TopNavbar onToggle={handleSidebarToggle} />
                <div className="d-flex justify-content-center align-items-center  ">
                    <div className=" mt-4 d-flex justify-content-center  align-items-center ">
                        <div className="card shadow w-50 p-4">
                            <h2 className="mb-3">Add New User</h2>

                            {error && <div className="alert alert-danger">{error}</div>}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddNewsUser;
