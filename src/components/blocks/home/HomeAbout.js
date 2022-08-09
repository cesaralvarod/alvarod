import React from "react";

import casagrilloLogo from "../../../assets/img/clients/casagrillo_logo.svg";

const HomeAbout = () => {
  return (
    <div className="px-[20px] py-[30px] overflow-hidden bg-fontColor">
      <div className="md:max-w-[1500px] mx-auto relative">
        <h2 className="uppercase text-center text-[32px] font-bold text-fontColorWhite">
          Ellos <span className="text-primary">confían</span> en nuestro talento
        </h2>
        <div className="pt-[20px] flex items-center justify-evenly select-none">
          <div>
            <img
              src={casagrilloLogo}
              alt="Casagrillo 3 Puntas Logo"
              className="max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
