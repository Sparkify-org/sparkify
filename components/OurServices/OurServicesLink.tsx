"use client";

import React, { ReactNode } from "react";
import { useTheme } from "next-themes"; // Import useTheme hook
import { cn } from "@/utils/twcn"; // Import cn utility

interface OurServicesLinkProps {
  title: string;
  icon: ReactNode;
  text: string;
}

const OurServicesLink: React.FC<OurServicesLinkProps> = ({
  title,
  icon,
  text,
}) => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      className={cn(
        "border grid lg:grid-flow-col grid-flow-row m-4 w-full max-w-2xl shadow-box-black-sm lg:shadow-box-black-md lg:min-h-48",
        theme === "dark" ? "bg-background text-foreground" : "bg-foreground text-background"
      )}
    >
      <div
        className={cn(
          "lg:grid-flow-row grid p-2",
          theme === "dark" ? "bg-background" : "bg-foreground"
        )}
      >
        <label
          className={cn(
            "text-sm md:text-base lg:text-2xl lg:mx-4",
            theme === "dark" ? "text-foreground" : "text-background"
          )}
        >
          {title}
        </label>
        <label
          className={cn(
            "flex items-center justify-center mt-2 lg:text-2xl lg:ml-4",
            theme === "dark" ? "text-foreground" : "text-background"
          )}
        >
          {icon}
        </label>
      </div>
      <div className="mt-2 p-2">
        <label
          className={cn(
            "text-xs md:text-sm lg:text-base",
            theme === "dark" ? "text-foreground" : "text-background"
          )}
        >
          {text}
        </label>
      </div>
    </div>
  );
};

export default OurServicesLink;
