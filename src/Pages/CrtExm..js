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
    <div className="container-fluid vh-100">
      <NavBarAdm />
      <div className="row h-100 w-75">
        {/* Left side: Info */}
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center bg-light">
          <h2>Admin</h2>
          <p>Name: {username}</p>
          <p>Email: {AdmEmail}</p>
          <p>Role: Teacher</p>
        </div>

        {/* Right side: Question input */}
        <div className="col-md-8 p-4">
          {/* Question */}
          <label
            htmlFor="question"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Enter your question:
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              resize: "vertical",
              marginBottom: "15px",
            }}
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
          <button onClick={handleAddQuestion} className="btn btn-success mt-3">
            Add Question
          </button>

          {/* Questions List */}
          {questionsList.length > 0 && (
            <div className="mt-4">
              <h5>Questions Added:</h5>
              <ul>
                {questionsList.map((q, idx) => (
                  <li key={idx}>{q.questionText}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CrtExm;
