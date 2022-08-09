import React from "react";
import ContactButton from "./ContactButton";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <div className="hidden md:flex gap-[30px] items-center">
      <NavbarLink name="Servicios" path="/servicios" />
      <NavbarLink name="Portafolio" path="/portafolio" />
      <NavbarLink name="Tecnologías" path="/tecnologias" />
      <ContactButton />
    </div>
  );
};

export default Navbar;
