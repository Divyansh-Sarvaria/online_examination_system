import React, { useState } from "react";
import { LoginModal } from "./LoginModal";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [activeRole, setActiveRole] = useState(null);
  const openWindow = (role) => setActiveRole(role);
  const closeModal = () => setActiveRole(null);
  return (
    <div
      className={`container-fluid d-flex justify-content-center align-items-center ${
        activeRole ? "blured" : ""
      }`}
      style={{ backgroundColor: "#F5F5DC", minHeight: "100vh" }}
    >
      <div
        className="border border-black border-4 shadow"
        style={{
          width: "70%",
          maxWidth: "900px",
          height: "420px",
          borderRadius: "25px",
          overflow: "hidden",
          backgroundColor: "#DCD2A2",
        }}
      >
        <div className="row g-0 h-100">
          {/* Left Column */}
          <div className="col-md-6 border-end border-black d-flex justify-content-center align-items-center p-4">
            <h1 className="h2 text-center text-white">
              Online Examination Portal
            </h1>
          </div>

          {/* Right Column */}
          <div
            className={`col-md-6 d-flex flex-column justify-content-center align-items-center p-4 `}
          >
            <button
              className="btn btn-light mb-4 w-75 fs-5"
              onClick={() => openWindow("Admin")}
            >
              Admin Login
            </button>
            <button
              className="btn btn-light w-75 fs-5"
              onClick={() => openWindow("Student")}
            >
              Student Login
            </button>
          </div>
        </div>
      </div>
      {activeRole && <LoginModal role={activeRole} onClose={closeModal} />}
    </div>
  );
}
