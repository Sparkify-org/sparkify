import { cn } from "@/utils/twcn";
import { MenuItem } from "@headlessui/react";
import Link from "next/link";
import React from "react";

interface MobileNavLinkProps {
  path: string;
  children: React.ReactNode;
  isActive: boolean;
}

export const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  path,
  children,
  isActive
}) => {
  return (
    <MenuItem>
      <Link 
        className={cn(
          "w-full block my-2 p-2 text-lg",
          isActive && "bg-foreground text-background"
        )}
        href={path}>{children}</Link>
    </MenuItem>
  );
};
