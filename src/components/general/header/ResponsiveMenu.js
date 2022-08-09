import React, { useEffect } from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenuVisible } from "../../../features/ui/uiSlice";

const ResponsiveMenuLink = ({ path, children }) => (
  <Link
    to={path}
    className="block uppercase font-fontColorDark text-[32px] font-semibold hover:bg-primary p-2 mb-8"
  >
    {children}
  </Link>
);

const ResponsiveMenu = () => {
  const socialNetworks = [faFacebookF, faInstagram, faLinkedinIn, faWhatsapp];

  const { menuVisible } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuVisible) document.body.className = "overflow-y-hidden";
    else document.body.className = "";
  }, [menuVisible]);

  const handleCloseMenu = () => dispatch(setMenuVisible(!menuVisible));

  return (
    <div
      className="w-full h-screen absolute inset-0 z-20 overflow-hidden flex justify-end md:hidden transition duration-500"
      style={{
        // width: menuVisible ? "100%" : 0,
        transform: !menuVisible ? "translateX(800px)" : "translateX(0)",
      }}
    >
      <div className="bg-white w-full md:w-[800px] px-10 py-6 overflow-y-auto">
        <div className="flex justify-end py-10">
          <button className="underline" onClick={handleCloseMenu}>
            cerrar
          </button>
        </div>
        <div>
          <div>
            <ResponsiveMenuLink path="/">Nosotros</ResponsiveMenuLink>
            <ResponsiveMenuLink path="/">Servicios</ResponsiveMenuLink>
            <ResponsiveMenuLink path="/">Portafolio</ResponsiveMenuLink>
            <ResponsiveMenuLink path="/">Tecnologías</ResponsiveMenuLink>
            <ResponsiveMenuLink path="/">Contacto</ResponsiveMenuLink>
          </div>
          <div className="w-full h-[5px] bg-second my-10"></div>
          <div className="text-[14px]">
            <p>
              <a href="/" target="_blank" className="inline-block mb-2">
                +51 963242353
              </a>
            </p>
            <p>
              <a
                href="/"
                target="_blank"
                className="inline-block text-second underline mb-2"
              >
                hola@alvarod.pe
              </a>
            </p>
            <div className="flex gap-6 pt-6">
              {socialNetworks.map((item, index) => (
                <a href="/" target="_blank" key={`social_menu_resp_` + index}>
                  <FontAwesomeIcon icon={item} className="text-[20px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
