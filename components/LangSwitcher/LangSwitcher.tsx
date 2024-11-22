"use client";

import React from "react";
import { locales, Locale } from "@/utils/i18n/config";
import { setUserLocale } from "@/services/locale";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { useLocale } from "next-intl";

export const LangSwitcher: React.FC = () => {
  const currLocale = useLocale();
  const [isPending, startTransition] = React.useTransition();

  const changeLocale = (val: string) => {
    const locale = val as Locale;

    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <Menu>
      <MenuButton
        disabled={isPending}
        className={clsx(
          "uppercase p-2",
          isPending && "disabled:cursor-not-allowed",
        )}
      >
        {currLocale}
      </MenuButton>
      <MenuItems anchor="bottom">
        {locales.map((item) => (
          <MenuItem key={item}>
            <button
              className="block w-full uppercase"
              onClick={() => changeLocale(item)}
            >
              {item}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
