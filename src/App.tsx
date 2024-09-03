import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LocationPage from "./pages/LocationPage";
import WomenPage from "./pages/WomenPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/section">
          <Route path="women" element={<WomenPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
