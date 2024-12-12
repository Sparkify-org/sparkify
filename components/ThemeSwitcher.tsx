"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/twcn";
import { Check, Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useWindowWidth } from "@/hooks/useWindowWidth";

interface Props {
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

export const ThemeSwitcher: React.FC<Props> = ({ className }) => {
  const { theme, themes, setTheme } = useTheme();
  const currWidth = useWindowWidth();

  const changeTheme = (val: string) => {
    setTheme(val.toLowerCase());
  };

  return (
    <div className={className}>
      <Menu>
        {({ open }) => (
          <>
            <MenuButton
              className={clsx(
                "uppercase flex gap-2 py-2 font-semibold px-3 bg-background border-2 border-foreground shadow-box-black-sm dark:shadow-box-white-sm transition-all",
                "hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none dark:hover:shadow-none",
                open &&
                  "translate-x-[5px] translate-y-[5px] shadow-none dark:shadow-none",
              )}
            >
              {theme === "dark" ? (
                <Moon />
              ) : theme === "light" ? (
                <Sun />
              ) : (
                <SunMoon />
              )}
            </MenuButton>
            <AnimatePresence>
              {open && (
                <MenuItems
                  static
                  modal={false}
                  anchor={currWidth > 768 ? "bottom end" : "bottom start"}
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={cn(
                    "bg-background border-2 border-foreground px-3 py-2 mt-2 shadow-box-black-sm dark:shadow-box-white-sm font-semibold origin-top",
                  )}
                >
                  {themes.map((item) => (
                    <MenuItem key={item}>
                      <motion.button
                        initial={{
                          backgroundColor:
                            theme === "light" ? "#ffffff" : "#1f2937",
                        }}
                        whileHover={{
                          backgroundColor:
                            theme === "light" ? "#e1e1e1" : "#313131",
                          transition: {
                            type: "ease",
                            duration: 0.1,
                          },
                        }}
                        className="w-full uppercase px-2 py-1 my-1 flex rtl:flex-row-reverse gap-3 text-right"
                        onClick={() => changeTheme(item)}
                      >
                        {item}
                        {theme === item && <Check />}
                      </motion.button>
                    </MenuItem>
                  ))}
                </MenuItems>
              )}
            </AnimatePresence>
          </>
        )}
      </Menu>
    </div>
  );
};
