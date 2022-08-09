import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// Logo

import logo from "../../../assets/img/logo.svg";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <header className="select-none px-[10px] py-[18px] font-titles shadow">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center">
        <Link to="/" className="max-w-[180px]">
          <img src={logo} alt="Alvarod Logotipo" />
        </Link>
        <Navbar />
        <MenuButton />
      </div>
    </header>
  );
};

export default Header;
