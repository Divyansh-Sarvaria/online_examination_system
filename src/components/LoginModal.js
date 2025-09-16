import React from "react";

import { useNavigate } from "react-router-dom";

export function LoginModal({ role, onClose }) {
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (role === "Admin") {
      navigate("/Admin");
    } else {
      navigate("/Student");
    }
  };
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 1050 }}
    >
      <div
        className="bg-white rounded-3 shadow p-4"
        style={{ width: "90%", maxWidth: "420px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">
            {role === "Admin" ? "Admin Login" : "Student Login"}
          </h2>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>

        {/* Different layout based on role */}
        {role === "Admin" ? (
          <div className="container-fluid">
            <form onSubmit={handlesubmit}>
              <div className="mb-3">
                <label for="username" className=" form-label">
                  {" "}
                  Username
                </label>
                <input
                  type="username"
                  className=" form-control"
                  id="usernameAdmin"
                  aria-describedby="UserName"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label for="Password" className=" form-label">
                  {" "}
                  Password
                </label>
                <input
                  type="Password"
                  className=" form-control"
                  id="PasswordAdmin"
                  aria-describedby="Password"
                  required
                ></input>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn  btn-primary w-75 " type="Submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="container-fluid">
            <form onSubmit={handlesubmit}>
              <div className="mb-3">
                <label for="username" className=" form-label">
                  {" "}
                  Username
                </label>
                <input
                  type="username"
                  className=" form-control"
                  id="usernameStudent"
                  aria-describedby="UserName"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="studentClass" className="form-label">
                  Class
                </label>
                <select className="form-select" id="studentClass" required>
                  <option selected disabled>
                    Choose your class
                  </option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="studentSection" className="form-label">
                  Section
                </label>
                <select className="form-select" id="studentSection" required>
                  <option selected disabled>
                    Choose your Section
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="Password" className=" form-label">
                  {" "}
                  Password
                </label>
                <input
                  type="Password"
                  className=" form-control"
                  id="PasswordStudent"
                  aria-describedby="Password"
                  required
                ></input>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn  btn-primary w-75 " type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
