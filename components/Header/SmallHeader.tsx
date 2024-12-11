import React from "react";
import MobileNav from "../Navbar/MobileNav";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { motion } from "motion/react";
import { useYPosition } from "@/hooks/useYPosition";
import { ThemeSwitcher } from "../ThemeSwitcher";

const SmallHeader = () => {
  const yPosition = useYPosition();
  const [inContainer, setInContainer] = React.useState(false);

  React.useEffect(() => {
    if (yPosition >= 70) setInContainer(true);
    else setInContainer(false);
  }, [yPosition]);

  return (
    <motion.header
      animate={inContainer ? { padding: "0 5rem" } : { padding: "0 3rem" }}
      className="flex z-50 mt-4 fixed w-full justify-between"
    >
      <ThemeSwitcher />

      <MobileNav />

      <LangSwitcher />
    </motion.header>
  );
};

export default SmallHeader;
