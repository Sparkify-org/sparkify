import React from "react";
import MobileNav from "../Navbar/MobileNav";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { motion } from "motion/react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { animationVariants } from "./LargeHeader";


const SmallHeader = () => {
  return (
    <header className="flex z-50 mt-4 fixed w-full justify-between px-16">
      <motion.div
        variants={animationVariants}
        initial={["hidden"]}
        animate={["visible"]}
      >
        <ThemeSwitcher />
      </motion.div>
      <motion.div variants={animationVariants} initial={"hidden"} animate={"visible"}>
        <MobileNav />
      </motion.div>
      <motion.div 
        variants={animationVariants}
        initial={["hidden"]}
        animate={["visible"]}
      >
        <LangSwitcher />
      </motion.div>
    </header>
  );
};

export default SmallHeader;
