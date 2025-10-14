import React, { useState } from "react";
import { LoginModal } from "./LoginModal";

export function LoginPage() {
  const [activeRole, setActiveRole] = useState(null);
  const openWindow = (role) => setActiveRole(role);
  const closeModal = () => setActiveRole(null);

  return (
    <div
      className={`container-fluid d-flex justify-content-center align-items-center ${
        activeRole ? "blured" : ""
      }`}
      style={{
        backgroundColor: "#f9f9f9",
        backgroundImage: `url("/img/bgimg.jpeg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        transition: "background 0.3s ease",
      }}
    >
      <div
        className="shadow-lg"
        style={{
          width: "70%",
          maxWidth: "900px",
          height: "420px",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Left Column */}
        <div
          className="col-md-6 d-flex justify-content-center align-items-center p-4"
          style={{
            background: "#e0e0e0",
            color: "#333",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          <h1
            className="text-center"
            style={{ fontWeight: "700", fontSize: "2rem" }}
          >
            Online Examination Portal
          </h1>
        </div>

        {/* Right Column */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4">
          <button
            className="btn btn-light mb-3 w-75 fs-5 fw-bold"
            style={{
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "0.3s",
              backgroundColor: "#ffffff",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => openWindow("Admin")}
          >
            Admin Login
          </button>

          <button
            className="btn btn-light w-75 fs-5 fw-bold"
            style={{
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "0.3s",
              backgroundColor: "#ffffff",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => openWindow("Student")}
          >
            Student Login
          </button>
        </div>
      </div>

      {activeRole && <LoginModal role={activeRole} onClose={closeModal} />}
    </div>
  );
}
