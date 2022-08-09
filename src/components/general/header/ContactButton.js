import React from "react";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <Link
      to="/contacto"
      className="px-[20px] py-[10px] text-[20px] bg-second font-semibold text-fontColorWhite rounded-full shadow hover:shadow-md hover:bg-hoverSecond transition"
    >
      Charlemos
    </Link>
  );
};

export default ContactButton;
