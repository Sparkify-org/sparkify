"use client";

import React from "react";
import { locales, Locale } from "@/utils/i18n/config";
import { setUserLocale } from "@/services/locale";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/twcn";

interface Props {
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

export const LangSwitcher: React.FC<Props> = ({ className }) => {
  const currLocale = useLocale();
  const [isPending, startTransition] = React.useTransition();

  const changeLocale = (val: string) => {
    const locale = val as Locale;

    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <div className={className}>
      <Menu>
        <MenuButton
          disabled={isPending}
          className={clsx(
            "uppercase p-2 bg-white border-2 border-black rounded-full",
            isPending && "disabled:cursor-not-allowed",
          )}
        >
          {
            // TODO: add an icon to appear before the currently used language
            currLocale
          }
        </MenuButton>
        <AnimatePresence>
          <MenuItems
            anchor="bottom"
            as={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
              "bg-white border-2 border-black rounded-xl px-3 py-2 mt-2"
            )}
          >
            {locales.map((item) => (
              <MenuItem key={item}>
                <motion.button
                  initial={{
                    backgroundColor: "#ffffff",
                  }}
                  whileHover={{
                    backgroundColor: "#e1e1e1",
                    transition: {
                      type: "ease",
                      duration: 0.1
                    }
                  }}
                  className="block w-full uppercase px-2 py-1 my-1 rounded-md"
                  onClick={() => changeLocale(item)}
                >
                  {item}
                </motion.button>
              </MenuItem>
            ))}
          </MenuItems>
        </AnimatePresence>
      </Menu>
    </div>
  );
};
