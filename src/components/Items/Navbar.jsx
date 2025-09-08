import React from "react";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "../UI/Icons";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <div className="bg-teal-200 p-4 flex justify-between items-center">
        <div>
          <p className="primary text-xl">Doogsan Enterprises</p>
          <p className="text-xs text-gray-600">Your Trusted Travel Agency</p>
        </div>

        <ul className="flex space-x-4 justify-between gap-6 hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Destinations</li>
          <li>Contact</li>
        </ul>
        <div className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
        </div>
      </div>
      <div>
        {openMenu && (
          <div className="md:hidden absolute bg-teal-200 w-full">
            <ul className="flex flex-col space-y-4 p-4">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Destinations</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
