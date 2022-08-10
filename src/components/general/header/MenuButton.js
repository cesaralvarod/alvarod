import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuVisible } from "../../../features/ui/uiSlice";

const MenuButton = () => {
  const dispatch = useDispatch();
  const { menuVisible } = useSelector((state) => state.ui);

  const handleOpenMenu = () => dispatch(setMenuVisible(!menuVisible));

  useEffect(() => {
    if (menuVisible)
      document.body.className = "overflow-y-hidden md:overflow-y-auto";
    else document.body.className = "";
  }, [menuVisible]);

  return (
    <div
      className="flex flex-col gap-3 cursor-pointer md:hidden"
      onClick={handleOpenMenu}
    >
      <span className="block bg-fontColor w-[40px] h-[4px]"></span>
      <span className="block bg-fontColor w-[40px] h-[4px]"></span>
      <span className="block bg-fontColor w-[40px] h-[4px]"></span>
    </div>
  );
};

export default MenuButton;
