import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./components/LoginPage";
import Student from "./Pages/MainPage_Std";
import Admin from "./Pages/MainPage_adm";
import StdRec from "./Pages/StdRec";
import { Frontpg } from "./Pages/Frontpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/StdRec" element={<StdRec />} />
        <Route path="/Frontpg" element={<Frontpg />} />
      </Routes>
    </Router>
  );
}
export default App;
