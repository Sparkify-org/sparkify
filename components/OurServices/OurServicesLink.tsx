import React from "react";
import { ReactNode } from "react";

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
    <div className="border border-black grid lg:grid-flow-col grid-flow-row m-4 w-full max-w-2xl shadow-box-black-sm lg:shadow-box-black-md lg:min-h-48 dark:border-white dark:bg-black">
      <div className="lg:grid-flow-row grid p-2 bg-white dark:bg-black">
        <label className="text-sm md:text-base lg:text-2xl lg:mx-4 dark:text-white">{title}</label>
        <label className="flex items-center justify-center mt-2 lg:text-2xl lg:ml-4 dark:text-white">{icon}</label>
      </div>
      <div className="mt-2 p-2">
        <label className="text-xs md:text-sm lg:text-base text-black dark:text-white">{text}</label>
      </div>
    </div>
  );
};

export default OurServicesLink;
