import React from "react";

export function Frontpg() {
  const options = [
    {
      title: "Student Records",
      text: "View and manage student data",
      link: "/students",
      color: "primary",
    },
    {
      title: "Create New Exam",
      text: "Add a new test or exam",
      link: "/create-exam",
      color: "success",
    },
  ];

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left side: Info */}
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center bg-light">
          <h2>Admin / Teacher Info</h2>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Role: Teacher</p>
        </div>

        {/* Right side: Cards */}
        <div className="col-md-8 d-flex flex-column justify-content-center align-items-center flex-wrap gap-4">
          {options.map((option, index) => (
            <div
              key={index}
              className={`card text-white bg-${option.color} shadow`}
              style={{
                width: "100%", // full width inside col
                maxWidth: "500px", // cap size on large screens
                minHeight: "180px", // ensures good height
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
              ></i>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
