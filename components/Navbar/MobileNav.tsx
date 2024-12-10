"use client";

import React from "react";
import { MobileNavLink } from "./MobileNavLink";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { Logo } from "../Logo";
import { cn } from "@/utils/twcn";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

const PAGES = {
  "/": "home",
  "/about": "about",
  "/contact": "contact",
} as const;

const MobileNav: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  const t = useTranslations("Navbar");

  return (
    <div className={className}>
      <nav>
        <Menu>
          {({ open }) => (
            <>
              <MenuButton
                className={cn(
                  "uppercase flex justify-between items-center gap-2 py-1.5 font-semibold px-2 bg-white border-2 border-black shadow-box-black-sm transition-all",
                  "hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none",
                  open && "translate-x-[5px] translate-y-[5px] shadow-none",
                )}
              >
                <Logo width={32} />
                <span>Sparkify</span>
              </MenuButton>
              <AnimatePresence>
                {open && (
                  <MenuItems
                    static
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    anchor="bottom"
                    className="origin-top bg-white border-2 border-black shadow-box-black-sm w-3/4 mt-2 p-3 ms-8"
                  >
                    {(Object.keys(PAGES) as Array<keyof typeof PAGES>).map(
                      (page) => (
                        <MobileNavLink
                          key={page}
                          path={page}
                          isActive={pathname === page}
                        >
                          {t(PAGES[page])}
                        </MobileNavLink>
                      ),
                    )}
                  </MenuItems>
                )}
              </AnimatePresence>
            </>
          )}
        </Menu>
      </nav>
    </div>
  );
};

export default MobileNav;
