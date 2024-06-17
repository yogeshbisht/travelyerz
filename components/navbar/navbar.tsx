import React from "react";
import BrandLogo from "@/components/shared/brand-logo";
import NavbarMenu from "./navbar-menu";

const Navbar = () => {
  return (
    <div className="w-full py-4">
      <div className="max-container">
        <div className="flex flex-row items-center justify-between">
          <BrandLogo />
          <NavbarMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
