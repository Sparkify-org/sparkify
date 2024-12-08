import React from "react";
import Navbar from "../Navbar/Navbar";
import { WandSparkles } from "lucide-react";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";

function Header() {
  return (
    <header className="flex justify-between z-50 mt-8 fixed w-full">
      <div className="w-1/4 flex items-center">
        <div className="ms-20 rounded-full border-2 border-black flex justify-between items-center gap-4 py-3 px-4">
          <WandSparkles color="#000000" />
          <span>Sparkify</span>
        </div>
      </div>
      <div className="w-1/2">
        <Navbar className="me-auto" />
      </div>
      <div className="w-1/4 flex items-center">
        <LangSwitcher className="ms-auto w-fit me-20" />
      </div>
    </header>
  );
}

export default Header;
