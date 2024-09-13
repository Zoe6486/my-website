// import React from 'react'
import { navLinkData } from "@/assets/data";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="flex justify-center items-center">
      {navLinkData.map((item) => {
        return (
          <NavLink key={item.key} to={item.to}>
            {item.content}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default Navbar;
