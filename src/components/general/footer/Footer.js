import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import FooterItem from "./FooterItem";

// Icons
import { faCalendarAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// Images
import logo from "../../../assets/img/logo2.svg";

const Footer = () => {
  const socialNetworks = [faFacebookF, faInstagram, faLinkedinIn, faWhatsapp];

  return (
    <footer className="text-titleColor">
      <div className="px-[20px] text-newSlate">
        <div className="max-w-[1500px] mx-auto py-[40px] lg:py-[60px] sm:grid grid-cols-3 lg:grid-cols-4 gap-y-[10px] lg:gap-[20px]">
          <div className="col-span-3 lg:col-span-1 py-[10px] lg:p-0">
            <h4 className="text-[20px] text-titleColor">Alvarod</h4>

            <ul className="pt-[10px] text-[14px] flex gap-[10px] flex-wrap">
              <li>
                <Link to="/">Términos y Condiciones</Link>
              </li>
              |
              <li>
                <Link to="/">Política de Privacidad</Link>
              </li>
              |
              <li>
                <Link to="/">Preguntas Frecuentes</Link>
              </li>
            </ul>
          </div>

          <div className="border-solid border-t-2 border-newSilver sm:border-none py-[10px] sm:p-0">
            <ul className="pt-[10px] flex flex-col">
              <FooterItem path="/">Nosotros</FooterItem>
              <FooterItem path="/">Servicios</FooterItem>
              <FooterItem path="/">Portafolio</FooterItem>
              <FooterItem path="/">Tecnologías</FooterItem>
              <FooterItem path="/">Charlemos</FooterItem>
            </ul>
          </div>

          <div className="border-solid border-t-2 border-newSilver sm:border-none py-[10px] sm:p-0">
            <ul className="pt-[10px] flex flex-col">
              <FooterItem path="/">Páginas Web</FooterItem>
              <FooterItem path="/">Desarrollo Web a Medida</FooterItem>
              <FooterItem path="/">Landing Pages</FooterItem>
              <FooterItem path="/">Tiendas Virtuales</FooterItem>
              <FooterItem path="/">Mantenimiento Web</FooterItem>
            </ul>
          </div>

          <div className="border-solid border-t-2 border-newSilver sm:border-none py-[10px] sm:p-0">
            <ul className="pt-[10px] flex flex-col">
              <FooterItem name="" path="/">
                <FontAwesomeIcon icon={faCalendarAlt} className="pr-2" />
                Lunes a Sábado 8am-6pm
              </FooterItem>
              <FooterItem path="/">
                <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
                hola@alvarod.pe
              </FooterItem>
              <FooterItem path="/">
                <FontAwesomeIcon icon={faWhatsapp} className="pr-2" />
                +51 963242353
              </FooterItem>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-fontColor px-[20px] select-none">
        <div className="max-w-[1500px] mx-auto py-[20px] flex items-center justify-between flex-wrap gap-[30px]">
          <div className="max-w-[150px]">
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-8 items-center flex-wrap">
            {socialNetworks.map((icon, index) => (
              <a
                href="/"
                target="_blank"
                key={"social-" + index}
                className="bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-primary hover:text-white transition"
              >
                <FontAwesomeIcon icon={icon} className="text-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto p-[15px]">
        <p className="text-[16px] text-center text-lightSlate">
          &copy; Alvarod 2022 - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
