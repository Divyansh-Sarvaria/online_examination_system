import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavBarAdm } from "./NavBarAdm";
export function Frontpg() {
  const Navigate = useNavigate();
  const { state } = useLocation();
  const { username, AdmEmail } = state || "";
  const options = [
    {
      title: "Student Records",
      text: "View and manage student data",
      link: "/StdRec",
      color: "primary",
    },
    {
      title: "Create New Exam",
      text: "Add a new test or exam",
      link: "/CrtExm",
      color: "success",
    },
  ];

  return (
    <div className="container-fluid vh-100">
      <NavBarAdm />

      <div className="row h-100">
        {/* Left side: Info */}
        <div
          className="col-md-4 d-flex flex-column justify-content-center align-items-center bg-light"
          style={{
            backgroundColor: "#f9f9f9",
            backgroundImage: `url("/img/lftsec.jpeg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
            transition: "background 0.3s ease",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h2>Admin</h2>
          <p>Name: {username}</p>
          <p>Email : {AdmEmail}</p>
          <p>Role: Teacher</p>
        </div>

        {/* Right side: Cards */}
        <div
          className="col-md-8 d-flex flex-column justify-content-center align-items-center flex-wrap gap-4"
          style={{
            backgroundColor: "#f9f9f9",
            backgroundImage: `url("/img/rgtsec.jpeg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
            transition: "background 0.3s ease",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={`card text-white bg-${option.color} shadow`}
              style={{
                width: "100%",
                maxWidth: "500px",
                minHeight: "180px",
                cursor: "default",
              }}
              onClick={() => (window.location.href = option.link)}
            >
              <div className="card-body">
                <h5 className="card-title">{option.title}</h5>
                <p className="card-text">{option.text}</p>
              </div>
              <i
                className="bi bi-arrow-right-circle-fill fs-3 position-absolute"
                style={{ bottom: "10px", right: "10px", cursor: "pointer" }}
                onClick={() => Navigate("/StdRec")}
              ></i>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
