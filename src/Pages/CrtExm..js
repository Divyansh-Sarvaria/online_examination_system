import { NavBarAdm } from "./NavBarAdm";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function CrtExm() {
  const { state } = useLocation();
  const { username, AdmEmail } = state || "";

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    if (!question.trim()) {
      alert("Question cannot be empty!");
      return;
    }
    if (correctIndex === null) {
      alert("Please select the correct answer!");
      return;
    }

    setQuestionsList([
      ...questionsList,
      {
        questionText: question,
        options: options,
        correctAnswer: correctIndex,
      },
    ]);

    // Reset fields
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectIndex(null);
  };

  return (
    <div className="container-fluid min-vh-100 p-0">
      <NavBarAdm />
      <div className="row g-0 flex-wrap">
        {/* Left side: Info */}
        <div
          className="col-md-4 d-flex flex-column justify-content-center align-items-center bg-light p-4"
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
          <p>Email: {AdmEmail}</p>
          <p>Role: Teacher</p>
        </div>

        {/* Right side: Question input */}
        <div
          className="col-md-8 p-0"
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
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.4)", // lighter overlay
              borderRadius: "10px",
              padding: "20px",
              width: "100%",
              maxWidth: "700px",
            }}
          >
            {/* Overlay for readability */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderRadius: "10px",
                padding: "20px",
                width: "100%",
                maxWidth: "700px",
              }}
            >
              {/* Question */}
              <label htmlFor="question" className="form-label fw-bold">
                Enter your question:
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={4}
                className="form-control mb-3"
                placeholder="Type your question here..."
              />

              {/* Options */}
              {options.map((opt, index) => (
                <div key={index} className="mb-2 d-flex align-items-center">
                  <input
                    type="text"
                    value={opt}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="form-control me-2"
                  />
                  <label className="mb-0">
                    <input
                      type="radio"
                      name="correctOption"
                      checked={correctIndex === index}
                      onChange={() => setCorrectIndex(index)}
                    />{" "}
                    Correct
                  </label>
                </div>
              ))}

              {/* Add Question Button */}
              <button
                onClick={handleAddQuestion}
                className="btn btn-success mt-3 w-100"
              >
                Add Question
              </button>

              {/* Questions List */}
              {questionsList.length > 0 && (
                <div className="mt-4">
                  <h5>Questions Added:</h5>
                  <ul className="list-group">
                    {questionsList.map((q, idx) => (
                      <li key={idx} className="list-group-item">
                        {q.questionText}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrtExm;
