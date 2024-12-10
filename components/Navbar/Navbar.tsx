"use client";

import React from "react";
import NavLink, { Cursor } from "./NavLink";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface Props {
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

const PAGES = {
  "/": "home",
  "/about": "about",
  "/contact": "contact",
} as const;

const Navbar: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const [cursorPos, setCursorPos] = React.useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const t = useTranslations("Navbar");

  return (
    <div className={className}>
      <nav>
        <ul
          className="relative mx-auto w-fit flex justify-center items-center gap-4 font-sans p-2  bg-white border-2 border-black shadow-box-black-sm"
          onMouseLeave={() => {
            setCursorPos((prev) => ({ ...prev, opacity: 0 }));
          }}
        >
          {(Object.keys(PAGES) as Array<keyof typeof PAGES>).map((page) => (
            <NavLink
              key={page}
              path={page}
              isActive={page === pathname}
              setPosition={setCursorPos}
            >
              {t(PAGES[page])}
            </NavLink>
          ))}
          {<Cursor position={cursorPos} />}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
