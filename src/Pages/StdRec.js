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
      name: "himank",
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
    <div className="container-fluid vh-100">
      <NavBarAdm />
      <div className="row h-100">
        {/* Left Partition */}
        <div className="col-md-4 bg-light p-4 d-flex flex-column justify-content-start vh-100">
          <h4>Student Details</h4>
          <div className="mt-3 flex-grow-1">
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

        {/* Right Partition */}
        <div className="col-md-8 p-4 d-flex flex-column vh-100">
          <h4>Student Records</h4>
          <div className="flex-grow-1 overflow-auto">
            <table className="table table-striped table-bordered">
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
          <button className="btn btn-success mt-3">Add Student</button>
        </div>
      </div>
    </div>
  );
}
