import React from "react";
import MainLayout from "../layouts/MainLayout";
import DoForYou from "../components/general/DoForYou";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="text-fontColor py-20 sm:py-48">
        <h3 className="font-bold font-raleway text-[120px] text-center">404</h3>
        <p className="text-center text-[24px]">
          Ups! No se ha encontrado contenido
        </p>
      </div>
      <DoForYou />
    </MainLayout>
  );
};

export default NotFoundPage;
