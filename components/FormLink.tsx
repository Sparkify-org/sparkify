import React from "react";
import { cn } from "@/utils/twcn";

interface FormLinkProps {
  type: string;
  placeholder: string;
  height?: string;
}

const FormLink: React.FC<FormLinkProps> = ({ type, placeholder, height }) => {
  return (
    <div className="relative mt-4">
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "peer relative z-10 border border-black p-2 w-full text-black bg-white rounded-none outline-none focus:border-black focus:ring-0",
          "dark:border-white dark:text-white dark:bg-black",
          height
        )}
      />
      <span className="absolute top-1 left-1 w-full h-full bg-white border border-black -z-10 rounded-none transition-all duration-300 peer-focus:bg-black peer-hover:bg-black peer-focus:translate-y-1 dark:bg-black dark:border-white peer-focus:dark:bg-white peer-hover:dark:bg-white"></span>
    </div>
  );
};

export default FormLink;
