import React from "react";
import { useLocation } from "react-router-dom";
import StdNavBar from "./StdNavBar.";

export default function StdRes() {
  const { state } = useLocation();
  const { username, studentClass, studentSection } = state || {};

  const subjects = [
    { name: "Math", percentage: 92 },
    { name: "Science", percentage: 81 },
    { name: "English", percentage: 75 },
    { name: "History", percentage: 64 },
    { name: "Computer", percentage: 95 },
    { name: "Art", percentage: 70 },
  ];

  return (
    <div className="container-fluid vh-100">
      <StdNavBar />

      <div className="row vh-100">
        {/* Left panel */}
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-start bg-light p-4 shadow-sm">
          <h2 className="mb-3">Student Info</h2>
          <p>
            <strong>Name:</strong> {username}
          </p>
          <p>
            <strong>Class:</strong> {studentClass}
          </p>
          <p>
            <strong>Section:</strong> {studentSection}
          </p>
          <p>
            <strong>Role:</strong> Student
          </p>
        </div>

        {/* Right content: Subjects */}
        <div className="col-md-9 overflow-auto py-4">
          <h2 className="text-center mb-4">Subjects Result</h2>

          <div className="row g-3 px-3">
            {subjects.map((sub, index) => {
              let color = "success";
              if (sub.percentage < 50) color = "danger";
              else if (sub.percentage < 75) color = "warning";

              return (
                <div className="col-12 col-sm-6 col-md-4" key={index}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">{sub.name}</h5>
                      <p className="card-text">
                        Percentage: <strong>{sub.percentage}%</strong>
                      </p>

                      <div className="progress">
                        <div
                          className={`progress-bar bg-${color}`}
                          style={{ width: `${sub.percentage}%` }}
                        >
                          {sub.percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
