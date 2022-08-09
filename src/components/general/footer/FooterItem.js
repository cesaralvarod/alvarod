import React from "react";

const FooterItem = ({ path, children }) => {
  return (
    <li className="pb-[5px]">
      <span className="pr-[8px] font-sans">&#8594;</span>
      <a href={path} className="hover:underline">
        {children}
      </a>
    </li>
  );
};

export default FooterItem;
