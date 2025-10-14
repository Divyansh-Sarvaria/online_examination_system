import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginModal({ role, onClose }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentSection, setStudentSection] = useState("");
  const [AdmEmail, setAdmEmail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (role === "Admin") {
      navigate("/Admin", { state: { username, password, AdmEmail } });
    } else {
      navigate("/StdFrntPage", {
        state: { username, password, studentClass, studentSection },
      });
    }
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 1050 }}
    >
      <div
        className="bg-white rounded-3 shadow p-4 w-100"
        style={{ maxWidth: "420px" }}
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

        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor={`username${role}`} className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id={`username${role}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {role === "Admin" ? (
            <div className="mb-3">
              <label htmlFor="emailAdmin" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="emailAdmin"
                value={AdmEmail}
                onChange={(e) => setAdmEmail(e.target.value)}
                required
              />
            </div>
          ) : (
            <>
              <div className="mb-3">
                <label htmlFor="studentClass" className="form-label">
                  Class
                </label>
                <select
                  className="form-select"
                  id="studentClass"
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  required
                >
                  <option value="" disabled>
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
                <select
                  className="form-select"
                  id="studentSection"
                  value={studentSection}
                  onChange={(e) => setStudentSection(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose your Section
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
            </>
          )}

          <div className="mb-3">
            <label htmlFor={`Password${role}`} className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id={`Password${role}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary w-100 w-md-75" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
