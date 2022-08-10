import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

// Images
import bannerImg from "../../../assets/img/woman_desk.svg";

const HomeBanner = () => {
  return (
    <div className="px-[20px] py-[50px] xs:py-[80px] sm:pb-[120px] overflow-hidden">
      <div className="md:max-w-[1500px] w-[95%] mx-auto relative">
        <div className="max-w-[650px] md:max-w-[800px] my-[60px] z-20">
          <h1 className="font-semibold uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px]">
            Es tu momento de crecer
          </h1>
          <h3 className="text-[20px] md:text-[24px] lg:text-[28px] text-lightSlate mt-[20px] lg:mt-[30px] max-w-[550px] lg:max-w-[800px]">
            <Link to="/" className="underline">
              Actualízate!
            </Link>{" "}
            Creamos el sitio web perfecto para tu negocio.
          </h3>
          <a
            href="/"
            className="inline-block text-second mt-[60px] sm:mt-[120px] text-[18px] md:text-[20px] lg:text-[24px] animate-bounce"
          >
            <FontAwesomeIcon icon={faArrowDown} className="pr-2" /> Tenemos más
            para ti
          </a>
        </div>
        <picture className="absolute inset-0 top-[-60px] left-[50%] min-w-[800px] max-w-[800px] z-10">
          <img src={bannerImg} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default HomeBanner;
