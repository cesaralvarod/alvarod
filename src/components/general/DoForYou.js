import React from "react";

const DoForYou = () => {
  return (
    <div className="px-[20px] bg-fontColorWhite">
      <div className="max-w-[1500px] mx-auto py-[80px] text-center">
        <h3 className="text-[28px] font-semibold">
          ¿Qué podemos hacer por ti?
        </h3>
        <p>Estamos encantados de poder construir tu próximo proyecto.</p>
        <a
          href="https://api.whatsapp.com/send?phone=51963242353&text=Hola, estoy interesado en contruir mi web."
          target="_blank"
          rel="noreferrer"
          className="inline-block py-[10px] px-[20px] bg-second text-white font-semibold text-[18px] mt-[30px] rounded animate-boung"
        >
          Empecemos
        </a>
      </div>
    </div>
  );
};

export default DoForYou;
