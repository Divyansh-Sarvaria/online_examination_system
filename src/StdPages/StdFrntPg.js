import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function StdFrntPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { username, studentClass, studentSection } = state || "";

  const options = [
    {
      title: "View Results",
      text: "Check your exam results",
      link: "/StdRec",
      color: "primary",
    },
    {
      title: "Attempt Exam",
      text: "Take a new test",
      link: "/CrtExm",
      color: "success",
    },
  ];

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Sidebar: Student Info */}
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center bg-light">
          <h2>Student</h2>
          <p>Name: {username}</p>
          <p>Class: {studentClass}</p>
          <p>Section: {studentSection}</p>
          <p>Role: Student</p>
        </div>

        {/* Right Side: Cards */}
        <div className="col-md-8 d-flex flex-column justify-content-center align-items-center flex-wrap gap-4">
          {options.map((option, index) => (
            <div
              key={index}
              className={`card text-white bg-${option.color} shadow`}
              style={{
                width: "100%",
                maxWidth: "500px",
                minHeight: "180px",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => navigate(option.link, { state })}
            >
              <div className="card-body">
                <h5 className="card-title">{option.title}</h5>
                <p className="card-text">{option.text}</p>
              </div>
              <i
                className="bi bi-arrow-right-circle-fill fs-3 position-absolute"
                style={{ bottom: "10px", right: "10px" }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
