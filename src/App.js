import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyProfile from "./pages/CompanyProfile";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang/profil-perusahaan" element={<CompanyProfile />} />
      </Routes>
    </>
  );
}

export default App;
