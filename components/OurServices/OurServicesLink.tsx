"use client";

import React, { ReactNode } from "react";
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

  return (
    <div
      className={cn(
        "border grid lg:grid-flow-col grid-flow-row m-4 w-full max-w-2xl relative lg:min-h-48  after:content-[''] after:absolute after:top-2.5 after:left-2.5 after:w-full after:h-full dark:after:bg-background after:border-2 after:border-foreground after:-z-10 bg-foreground text-background "
      )}
    >
      <div
        className={cn(
          "lg:grid-flow-row grid p-2 "
        )}
      >
        <label
          className={cn(
            "text-sm md:text-base lg:text-2xl lg:mx-4 "
          )}
        >
          {title}
        </label>
        <label
          className={cn(
            "flex items-center justify-center mt-2 lg:text-2xl lg:ml-4",
          )}
        >
          {icon}
        </label>
      </div>
      <div className="mt-2 p-2">
        <label
          className={cn(
            "text-xs md:text-sm lg:text-base",
          )}
        >
          {text}
        </label>
      </div>
    </div>
  );
};

export default OurServicesLink;
