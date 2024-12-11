"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { Logo } from "../Logo";
import Link from "next/link";
import { motion } from "motion/react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useYPosition } from "@/hooks/useYPosition";
import { useTheme } from "next-themes";
import { LogoLight } from "../LogoLight";
import { ThemeSwitcher } from "../ThemeSwitcher";

function LargeHeader() {
  const [inContainer, setInContainer] = React.useState(false);
  const yPosition = useYPosition();

  const { theme } = useTheme();

  const currWidth = useWindowWidth();

  React.useEffect(() => {
    if (yPosition >= 90) setInContainer(true);
    else setInContainer(false);
  }, [yPosition]);

  return (
    <header className="flex justify-between mt-4 fixed w-full">
      <motion.div
        animate={
          inContainer
            ? {
                paddingInlineStart: currWidth > 1024 ? "10rem" : "6rem",
              }
            : {
                paddingInlineStart: currWidth > 1024 ? "5rem" : "2rem",
              }
        }
        className="w-1/4 flex items-center ps-20"
      >
        <Link
          href={"/"}
          className="border-2 border-foreground flex justify-between items-center gap-4 py-2 px-4 shadow-box-black-sm hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none transition-all bg-white dark:bg-black dark:shadow-box-white-sm dark:hover:shadow-none"
        >
          {theme === "light" ? <Logo width={32} /> : <LogoLight width={32} />}
          <span className="lg:block hidden">Sparkify</span>
        </Link>
      </motion.div>
      <div className="w-1/2">
        <Navbar className="mx-auto" />
      </div>
      <motion.div
        animate={
          inContainer
            ? {
                paddingInlineEnd: currWidth > 1024 ? "10rem" : "6rem",
              }
            : {
                paddingInlineEnd: currWidth > 1024 ? "5rem" : "2rem",
              }
        }
        className="w-1/4 flex items-center pe-20 justify-end"
      >
        <ThemeSwitcher />
        <LangSwitcher className="ms-5 w-fit" />
      </motion.div>
    </header>
  );
}

export default LargeHeader;
