"use client";

import React from "react";
import { locales, Locale } from "@/utils/i18n/config";
import { setUserLocale } from "@/services/locale";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/twcn";
import { Check, Languages } from "lucide-react";
import { useTheme } from "next-themes";

interface Props {
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

export const LangSwitcher: React.FC<Props> = ({ className }) => {
  const currLocale = useLocale();
  const { theme } = useTheme();
  const [isPending, startTransition] = React.useTransition();

  const changeLocale = (val: string) => {
    const locale = val as Locale;

    startTransition(async () => {
      await setUserLocale(locale);
    });
  };

  return (
    <div className={className}>
      <Menu>
        {({ open }) => (
          <>
            <MenuButton
              disabled={isPending}
              className={clsx(
                "uppercase flex gap-2 py-2 font-semibold px-3 bg-background border-2 border-foreground shadow-box-black-sm dark:shadow-box-white-sm transition-all",
                "hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none dark:hover:shadow-none",
                open &&
                  "translate-x-[5px] translate-y-[5px] shadow-none dark:shadow-none",
                isPending && "disabled:cursor-not-allowed",
              )}
            >
              <Languages />
            </MenuButton>
            <AnimatePresence>
              {open && (
                <MenuItems
                  modal={false}
                  static
                  anchor="bottom end"
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={cn(
                    "bg-background border-2 border-foreground px-3 py-2 mt-2 shadow-box-black-sm dark:shadow-box-white-sm font-semibold origin-top",
                  )}
                >
                  {locales.map((item) => (
                    <MenuItem key={item}>
                      <motion.button
                        initial={{
                          backgroundColor: theme === "light" ? "#ffffff" : "#1f2937",
                        }}
                        whileHover={{
                          backgroundColor: theme === "light" ?  "#e1e1e1" : "#313131",
                          transition: {
                            type: "ease",
                            duration: 0.1,
                          },
                        }}
                        className="w-full uppercase px-2 py-1 my-1 flex rtl:flex-row-reverse gap-3 text-right"
                        onClick={() => changeLocale(item)}
                      >
                        {item}
                        {currLocale === item && <Check />}
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
