import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

// Pages

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
