"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { Logo } from "../Logo";
import Link from "next/link";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { LogoLight } from "../LogoLight";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { cn } from "@/utils/twcn";

export const animationVariants = {
  hidden: {
    opacity: 0,
    translateX: "10px",
    translateY: "10px",
  },
  visible: { opacity: 1, translateX: "0px", translateY: "0px" },
};

const LargeHeader = () => {
  const { theme } = useTheme();
  const width = useWindowWidth();

  return (
    <header className="flex justify-between mt-4 fixed w-full z-50">
      <motion.div
        variants={animationVariants}
        initial={["hidden"]}
        animate={["visible"]}
        className={cn("w-1/4 flex items-center ps-40", width < 1024 && "ps-20")}
      >
        <Link
          href={"/"}
          className="border-2 border-foreground flex justify-between items-center gap-4 py-2 px-4 shadow-box-black-sm hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none transition-all bg-white dark:bg-black dark:shadow-box-white-sm dark:hover:shadow-none"
        >
          {theme === "light" ? <Logo width={32} /> : <LogoLight width={32} />}
          <span className="lg:block hidden">Sparkify</span>
        </Link>
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial={["hidden"]}
        animate={["visible"]}
        className="w-1/2"
      >
        <Navbar className="mx-auto" />
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial={["hidden"]}
        animate={["visible"]}
        className={cn(
          "w-1/4 flex items-center pe-40 justify-end",
          width < 1024 && "pe-20",
        )}
      >
        <ThemeSwitcher />
        <LangSwitcher className="ms-5 w-fit" />
      </motion.div>
    </header>
  );
};

export default LargeHeader;
