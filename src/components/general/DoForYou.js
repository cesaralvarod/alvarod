import React from "react";

import { Link } from "react-router-dom";

const DoForYou = () => {
  return (
    <div className="px-[20px] bg-fontColorWhite">
      <div className="max-w-[1500px] mx-auto py-[80px] text-center">
        <h3 className="text-[28px] font-semibold">
          ¿Qué podemos hacer por ti?
        </h3>
        <p>Estamos encantados de poder construir tu próximo proyecto.</p>
        <Link
          to="/"
          className="inline-block py-[10px] px-[20px] bg-second text-white font-semibold text-[18px] mt-[30px] rounded animate-boung"
        >
          Empecemos
        </Link>
      </div>
    </div>
  );
};

export default DoForYou;
