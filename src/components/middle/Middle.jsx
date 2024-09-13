// import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { BASE_PATH } from "@/config";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Projects from "@/components/pages/Projects";

function Middle() {
  return (
    <Routes>
      <Route path={`${BASE_PATH}/home`} element={<Home />} />
      <Route path={`${BASE_PATH}/about`} element={<About />} />
      <Route path={`${BASE_PATH}/projects`} element={<Projects />} />
      <Route
        path={`${BASE_PATH}/`}
        element={<Navigate to={`${BASE_PATH}/home`} />}
      />
    </Routes>
  );
}

export default Middle;
