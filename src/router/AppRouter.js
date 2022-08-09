import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import HomePage from "../pages/HomePage";

// Pages

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
