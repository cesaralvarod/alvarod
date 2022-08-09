import React from "react";

import Footer from "../components/general/footer/Footer";
import Header from "../components/general/header/Header";
import ResponsiveMenu from "../components/general/header/ResponsiveMenu";

const MainLayout = ({ children }) => {
  return (
    <div className="text-fontColor relative">
      <Header />
      <ResponsiveMenu />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
