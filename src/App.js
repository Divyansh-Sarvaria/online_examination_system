import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./components/LoginPage";
import Admin from "./Pages/MainPage_adm";
import StdRec from "./Pages/StdRec";
import { Frontpg } from "./Pages/Frontpg";
import CrtExm from "./Pages/CrtExm.";
import StdFrntPage from "./StdPages/StdFrntPg";
import StdRes from "./StdPages/StdResult";
import AtmptExm from "./StdPages/AtmptExm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/StdRec" element={<StdRec />} />
        <Route path="/Frontpg" element={<Frontpg />} />
        <Route path="/CrtExm" element={<CrtExm />} />
        <Route path="/CrtExm" element={<CrtExm />} />
        <Route path="/StdFrntPage" element={<StdFrntPage />} />
        <Route path="/StdRes" element={<StdRes />} />
        <Route path="/AtmptExm" element={<AtmptExm />} />
      </Routes>
    </Router>
  );
}
export default App;
