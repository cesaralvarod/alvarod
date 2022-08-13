import React from "react";

import landingIcon from "../../../assets/img/random_illustrations_1.svg";
import webDesignIcon from "../../../assets/img/seo_illustrations_8.svg";
import cartIcon from "../../../assets/img/black_friday_icon_1.svg";

const HomeServices = () => {
  return (
    <section className="text-fontColor z-1">
      <div className="max-w-[1500px] mx-auto py-20 px-[20px]">
        <h2 className="uppercase text-center text-[32px] font-bold text-titleColor">
          Nuestros Servicios
        </h2>
        <div className="pt-20 grid md:grid-cols-3 gap-10">
          <div className="text-center bg-white border-2 border-solid border-fontColorGray rounded-xl p-10 transition sm:hover:shadow-lg sm:hover:translate-y-[-10px]">
            <div className="flex items-center justify-center mb-8">
              <img src={cartIcon} alt="" style={{ width: "100px" }} />
            </div>
            <h3 className="text-[20px] font-semibold">
              Desarrollo de Tiendas Online
            </h3>
            <p className="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, accusantium?</p>
          </div>
          <div className="text-center bg-white border-2 border-solid border-fontColorGray rounded-xl p-10 transition sm:hover:shadow-lg sm:hover:translate-y-[-10px]">
            <div className="flex items-center justify-center mb-8">
              <img src={webDesignIcon} alt="" style={{ maxWidth: "150px" }} />
            </div>
            <h3 className="text-[20px] text-bold font-semibold">
              Diseño de Páginas Web
            </h3>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              mollitia!
            </p>
          </div>
          <div className="text-center bg-white border-2 border-solid border-fontColorGray rounded-xl p-10 transition sm:hover:shadow-lg sm:hover:translate-y-[-10px]">
            <div className="flex items-center justify-center mb-8">
              <img src={landingIcon} alt="" style={{ maxWidth: "150px" }} />
            </div>
            <h3 className="text-[20px] font-semibold">
              Diseño de Landing Pages
            </h3>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              id!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
