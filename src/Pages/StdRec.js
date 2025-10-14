import { useState } from "react";
import { NavBarAdm } from "./NavBarAdm";

export default function StdRec() {
  const [students] = useState([
    {
      id: 1,
      rollNo: "101",
      name: "Aarav",
      class: "1",
      section: "A",
      percentage: 85,
    },
    {
      id: 2,
      rollNo: "102",
      name: "Himank",
      class: "1",
      section: "B",
      percentage: 90,
    },
    {
      id: 3,
      rollNo: "103",
      name: "Karan",
      class: "2",
      section: "A",
      percentage: 78,
    },
    {
      id: 4,
      rollNo: "104",
      name: "Mia",
      class: "2",
      section: "B",
      percentage: 92,
    },
    {
      id: 5,
      rollNo: "105",
      name: "Rohan",
      class: "3",
      section: "A",
      percentage: 88,
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="container-fluid min-vh-100 p-0">
      <NavBarAdm />
      <div className="row g-0 flex-wrap">
        <div
          className="col-lg-4 col-md-12 d-flex flex-column justify-content-start align-items-center p-4"
          style={{
            backgroundImage: "url('/img/lftsec.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: "10px",
              padding: "20px",
              width: "100%",
              maxWidth: "350px",
            }}
          >
            <h4>Student Details</h4>
            <div className="mt-3">
              {selectedStudent ? (
                <div>
                  <p>
                    <strong>Name:</strong> {selectedStudent.name}
                  </p>
                  <p>
                    <strong>Class:</strong> {selectedStudent.class}
                  </p>
                  <p>
                    <strong>Section:</strong> {selectedStudent.section}
                  </p>
                  <p>
                    <strong>Percentage:</strong> {selectedStudent.percentage}%
                  </p>
                </div>
              ) : (
                <p>Select a student from the table</p>
              )}
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div
          className="col-lg-8 col-md-12 d-flex flex-column justify-content-start align-items-center p-4"
          style={{
            backgroundImage: "url('/img/rgtsec.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: "10px",
              padding: "20px",
              width: "100%",
              maxWidth: "900px",
            }}
          >
            <h4>Student Records</h4>
            <div className="table-responsive mt-3">
              <table className="table table-striped table-bordered mb-3">
                <thead className="table-dark">
                  <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id}>
                      <td>{s.rollNo}</td>
                      <td>{s.name}</td>
                      <td>{s.class}</td>
                      <td>{s.section}</td>
                      <td>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => setSelectedStudent(s)}
                        >
                          View
                        </button>
                        <button className="btn btn-warning btn-sm ms-2">
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm ms-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-success w-100 mt-3">Add Student</button>
          </div>
        </div>
      </div>
    </div>
  );
}
