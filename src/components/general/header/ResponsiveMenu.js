import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResponsiveMenu = () => {
  const socialNetworks = [faFacebookF, faInstagram, faLinkedinIn, faWhatsapp];

  return (
    <div className="w-full h-screen absolute inset-0 z-20 overflow-hidden flex justify-end md:hidden">
      <div className="bg-white w-full md:w-[800px] px-10 py-6">
        <div className="flex justify-end pt-6 pb-10">
          <button className="underline">cerrar</button>
        </div>
        <div>
          <div>
            <a
              href="/"
              className="block uppercase font-fontColorDark text-[32px] font-semibold hover:bg-primary p-2 mb-8"
            >
              Nosotros
            </a>
            <a
              href="/"
              className="block uppercase font-fontColorDark text-[32px] font-semibold hover:bg-primary p-2 mb-8"
            >
              Servicios
            </a>

            <a
              href="/"
              className="block uppercase font-fontColorDark text-[32px] font-semibold hover:bg-primary p-2 mb-8"
            >
              Portafolio
            </a>
            <a
              href="/"
              className="block uppercase font-fontColorDark text-[32px] font-semibold hover:bg-primary p-2 mb-8"
            >
              Tecnologías
            </a>

            <a
              href="/"
              className="block uppercase font-fontColorDark text-[32px] font-semibold hover:bg-primary p-2 mb-8"
            >
              Contacto
            </a>
          </div>
          <div className="w-full h-[5px] bg-second my-10"></div>
          <div className="text-[14px]">
            <p className="mb-2">+51 963242353</p>
            <p className="text-second underline mb-2">hola@alvarod.pe</p>
            <div className="flex gap-6 pt-6">
              {socialNetworks.map((item) => (
                <a href="/" target="_blank">
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
