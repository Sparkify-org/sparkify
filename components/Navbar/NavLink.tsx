"use client";

import Link from "next/link";
import React, { SetStateAction } from "react";
import { cn } from "@/utils/twcn";
import { motion } from "motion/react";

interface CursorProps {
  left: number;
  width: number;
  opacity: number;
}

function NavLink({
  path,
  children,
  isActive,
  setPosition,
}: {
  path: string;
  children: React.ReactNode;
  isActive: boolean;
  setPosition: React.Dispatch<SetStateAction<CursorProps>>;
}) {
  const ref = React.useRef<HTMLLIElement>(null);

  return (
    <motion.li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft + 6,
          width: width - 12,
          opacity: 1,
        });
      }}
      className={cn(
        "relative z-10 text-white mix-blend-difference",
      )}
    >
      <Link
        href={path}
        className="block py-2 px-5 rounded-full"
      >
        {children}
      </Link>
      {
        isActive && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute z-0 inset-0 border-2 border-white"
        ></motion.span>
      )
      }
    </motion.li>
  );
}

export function Cursor({ position }: { position: CursorProps }) {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute bg-foreground z-0 h-7"
    />
  );
}

export default NavLink;
