import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ name, path }) => {
  const activeStyle = {
    color: "#f93e3e",
  };

  return (
    <NavLink
      to={path}
      className="text-[20px] font-semibold font-raleway hover:text-second"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {name}
    </NavLink>
  );
};

export default NavbarLink;
