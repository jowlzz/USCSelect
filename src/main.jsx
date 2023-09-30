import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/Login.jsx";
import RegisterAccount from "./pages/AdminRegistration.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WelcomePg from "./pages/WelcomePage.jsx";
import A_login from "./pages/AdminLogin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<WelcomePg />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registerAdmin" element={<RegisterAccount />} />
          <Route path="/adminLogin" element={<A_login />} />
          // ADD ADDITIONAL PATHS BELOW
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

