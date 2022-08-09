import React from "react";

const MenuButton = () => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer md:hidden">
      <span className="block bg-fontColor w-[40px] h-[4px]"></span>
      <span className="block bg-fontColor w-[40px] h-[4px]"></span>
      <span className="block bg-fontColor w-[40px] h-[4px]"></span>
    </div>
  );
};

export default MenuButton;
