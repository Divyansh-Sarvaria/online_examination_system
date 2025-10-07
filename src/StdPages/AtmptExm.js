import React, { useState } from "react";
import StdNavBar from "./StdNavBar.";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AtmptExm() {
  const { state } = useLocation();
  const { username, studentClass, studentSection } = state || {};

  const questions = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option B",
    },
    {
      id: 2,
      question: "Vestibulum ante ipsum primis in faucibus orci luctus et?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option D",
    },
    {
      id: 3,
      question:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option A",
    },
    {
      id: 4,
      question: "Donec sollicitudin molestie malesuada?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option C",
    },
    {
      id: 5,
      question:
        "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option B",
    },
  ];

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) s++;
    });
    setScore(s);
  };

  return (
    <div className="container-fluid p-0">
      <StdNavBar />

      <div className="row vh-100 m-0">
        {/* Left Student Info Section */}
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-start bg-light p-4 shadow-sm">
          <h4 className="mb-3 text-primary">Student Info</h4>
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

        {/* Right Exam Section */}
        <div className="col-md-9 bg-white p-4 overflow-auto">
          <h3 className="text-center mb-4 fw-semibold">📝 Attempt Exam</h3>

          {questions.map((q, index) => (
            <div key={q.id} className="card mb-3 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-semibold">
                  Q{index + 1}. {q.question}
                </h5>
                {q.options.map((opt) => (
                  <div className="form-check" key={opt}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question-${q.id}`}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleOptionChange(q.id, opt)}
                    />
                    <label className="form-check-label">{opt}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button className="btn btn-primary px-4" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          {score !== null && (
            <div className="alert alert-info text-center mt-4">
              You scored <strong>{score}</strong> out of {questions.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
