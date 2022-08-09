import React from "react";

import Header from "../../components/header/Header";
import SocialNetworksList from "../../components/general/footer/SocialNetworksList";

import logo from "../../assets/img/logo2.svg";

const NotFoundPage = () => {
  return (
    <div className="text-newSlate">
      <Header />
      <div className="my-[300px]">
        <h1 className="text-[80px] text-center">404</h1>
      </div>
      <footer className="text-darkSlate">
        <div className="bg-newSlate px-[20px] select-none">
          <div className="max-w-[1500px] mx-auto py-[20px] flex items-center justify-between flex-wrap gap-[30px]">
            <div className="max-w-[150px]">
              <img src={logo} alt="" />
            </div>
            <SocialNetworksList />
          </div>
        </div>

        <div className="max-w-[1500px] mx-auto p-[15px]">
          <p className="text-[16px] text-center text-lightSlate">
            &copy; Alvarod 2022 - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;
